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
from flask import Flask, request, Response
from ops.user import register_user, change_password, back_password

app = Flask("mhzx", static_url_path='/static')


def expose(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except KeyError:
            return APIResult(1, msg="参数错误")
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


def send_static_file(directory, path):
    filename = safe_join(directory, path)
    filename = os.path.join(os.path.dirname(__file__), filename)
    if not os.path.isfile(filename):
        return "file path not find"
    return send_file(filename)


def send_update_file(path):
    filename = safe_join(conf.ROOT_DIR, path)
    if not os.path.isfile(filename):
        return "file path not find"
    return send_file(filename)


@app.route('/')
def index():
    return send_static_file("static", "index.html")


@app.route('/<path:path>')
def send_static(path):
    if path.split("/")[0] == "update":
        return send_update_file(path)
    else:
        return send_static_file("static", path)


@app.route('/register', methods=['POST'])
@api_wrap
@expose
def register():
    flag, user = register_user(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/changepasswd', methods=['POST'])
@api_wrap
@expose
def changepasswd():
    flag, user = change_password(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/changepasswd', methods=['POST'])
@api_wrap
@expose
def backpasswd():
    flag, user = back_password(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


application = app


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80, debug=True)
