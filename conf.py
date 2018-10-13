import os

DEBUG = True

ZONE_CONF = {
    "征战天下": 1
}

ROOT_DIR = "C:/server"
UPDATE_DIR = os.path.join(ROOT_DIR, "update")
PACKAGE_DIR = os.path.join(ROOT_DIR, "package")
LINUX_DATA_DIR = os.path.join(ROOT_DIR, "data")

UPDATE_FILE = os.path.join(UPDATE_DIR, "data.7z")

SERVER_DIR = os.path.join(PACKAGE_DIR, "server")
CLIENT_DIR = os.path.join(PACKAGE_DIR, "client")
COMMON_DIR = os.path.join(PACKAGE_DIR, "common")
CLIENT_EL_DIR = os.path.join(CLIENT_DIR, "element")
CLIENT_DATA_DIR = os.path.join(CLIENT_EL_DIR, "data")


SQL_1345_CONF = {
    "host": "172.31.187.199",
    "port": 1989,
    "user": "sa",
    "password": "123456",
    "database": "wm",
    "timeout": 10,
    "login_timeout": 5,
    "charset": "utf8"
}


ZONE_SQL_CONF = {
    "1": SQL_1345_CONF
}
