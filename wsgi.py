from requestlogger import WSGILogger, ApacheFormatter
from app import app

application = WSGILogger(app.wsgi_app, [],
                         formatter=ApacheFormatter(),
                         ip_header='HTTP_X_FORWARDED_FOR')

if __name__ == "__main__":
    app.run()
