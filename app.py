# coding:utf-8
import os
import sys
sys.path.append(os.path.dirname(__file__))
import conf
import logging
import traceback
import functools
from flask.helpers import safe_join, send_file
from tool.api import api_wrap, APIResult
from flask import Flask, request, Response, redirect
from ops.user import User
from ops.data import query_role

logger = logging.getLogger(__name__)
app = Flask("mhzx", static_folder="", static_url_path="")


def expose(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            if request.json and "zone_id" in request.json:
                zone_id = request.json.pop("zone_id", None)
            else:
                zone_id = request.args.get("zone_id")
            if not zone_id:
                return APIResult(1, msg="参数错误")
            setattr(request, "user_service", User(conf.ZONE_SQL_CONF[str(zone_id)]))
            return func(*args, **kwargs)
        except KeyError:
            return APIResult(1, msg="参数错误")
        except Exception as ex:
            logger.error(str(ex))
            logger.error(traceback.format_exc())
            return APIResult(1, msg="系统错误")
    return wrapper


@app.errorhandler(Exception)
def handle_error(e):
    logger = logging.getLogger("error")
    logger.exception(e)
    if getattr(conf, 'DEBUG', False):
        resp = traceback.format_exception(type(e), e, e.__traceback__)
    else:
        resp = "Things can go wrong will go wrong,"\
               + "so are servers."
    return Response(response=resp, status=500)


def send_static_file(path):
    filename = os.path.join(os.path.dirname(__file__), safe_join("static", path))
    if not os.path.isfile(filename):
        return "file path not find"
    return send_file(filename)


def send_update_file(path):
    filename = safe_join(conf.UPDATE_DIR, path)
    if not os.path.isfile(filename):
        return "file path not find"
    return send_file(filename)


@app.route('/')
def index():
    return redirect("/static/index.html")


@app.route('/static/<path:path>')
def send_static(path):
    return send_static_file(path)


@app.route('/update/<path:path>')
def send_update(path):
    return send_update_file(path)


@app.route('/api/register', methods=['POST'])
@api_wrap
@expose
def register():
    flag, user = request.user_service.register_user(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/api/changepasswd', methods=['POST'])
@api_wrap
@expose
def changepasswd():
    flag, user = request.user_service.change_password(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/api/backpasswd', methods=['POST'])
@api_wrap
@expose
def backpasswd():
    flag, user = request.user_service.back_password(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/api/queryrole', methods=['GET'])
@api_wrap
@expose
def query_user_role():
    name = request.args.get("name")
    if not name:
        return APIResult(1, msg="参数错误")
    user = request.user_service.get_user_by_name(name)
    if not user:
        return APIResult(1, msg="用户不存在")
    return APIResult(0, query_role(user["ID"]))


application = app


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
