# coding:utf-8
import conf
import logging
import traceback
import functools
from utils.api import api_wrap, APIResult
from flask import Flask, request, Response, send_from_directory

app = Flask("zx", static_url_path='/static')


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


@app.route('/')
def index():
    return send_from_directory('static', "index.html")


@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


@app.route('/register', methods=['POST'])
@api_wrap
@expose
def register():
    flag, user = register(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/changepasswd', methods=['POST'])
@api_wrap
@expose
def changepasswd():
    flag, user = changepasswd(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


@app.route('/changepasswd', methods=['POST'])
@api_wrap
@expose
def backpasswd():
    flag, user = backpasswd(**request.json)
    if not flag:
        return APIResult(1, msg=user)
    return APIResult(0)


if __name__ == '__main__':
    app.run(host='192.168.5.65', port=80, debug=True)
