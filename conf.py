import os

DEBUG = True

ZONE_CONF = {
    "征战天下": 1
}

UPDATE_DIR = "C:/server/update"
PACKAGE_DIR = "C:/server/package"

UPDATE_FILE = os.path.join(UPDATE_DIR, "data.7z")

SERVER_DIR = os.path.join(PACKAGE_DIR, "server")
CLIENT_DIR = os.path.join(PACKAGE_DIR, "client")
COMMON_DIR = os.path.join(PACKAGE_DIR, "common")
CLIENT_EL_DIR = os.path.join(CLIENT_DIR, "element")
CLIENT_DATA_DIR = os.path.join(CLIENT_EL_DIR, "data")
