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
def send_update_static(path):
    return send_update_file(path)


@app.route('/api/register', methods=['POST'])
@api_wrap
@expose
def register():
    params = [
        "name",
        "passwd",
        "question",
        "answer",
        "qq"
    ]
    flag, user = register_user(**{i: request.form.get(i) for i in params})
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/api/changepasswd', methods=['POST'])
@api_wrap
@expose
def changepasswd():
    params = [
        "name",
        "old_pwd",
        "new_pwd"
    ]
    flag, user = change_password(**{i: request.form.get(i) for i in params})
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/api/backpasswd', methods=['POST'])
@api_wrap
@expose
def backpasswd():
    params = [
        "name",
        "question",
        "answer",
        "passwd"
    ]
    flag, user = back_password(**{i: request.form.get(i) for i in params})
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


application = app


if __name__ == '__main__':
    app.run(host='192.168.5.65', port=8000, debug=True)
