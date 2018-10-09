# -*- coding: utf-8 -*-
from conf import *
from utils import OSUtils

os_utils = OSUtils()


def sync_common_data_files():
    if not os_utils.directory_exists(COMMON_DIR):
        raise ValueError("common directory not existed!")
    if not os_utils.directory_exists(SERVER_DIR):
        raise ValueError("server directory not existed!")
    if not os_utils.directory_exists(CLIENT_DATA_DIR):
        raise ValueError("client data directory not existed!")
    for root_dir, _, file_names in os_utils.walk(COMMON_DIR):
        for filename in file_names:
            source = os_utils.joinpath(root_dir, filename)
            server_dist = os_utils.joinpath(SERVER_DIR, filename)
            client_dist = os_utils.joinpath(CLIENT_DATA_DIR, filename)
            os_utils.copy(source, server_dist)
            os_utils.copy(source, client_dist)
            print("copy file %s to server/client ok." % filename)


def package_client():
    if not os_utils.directory_exists(CLIENT_DIR):
        raise ValueError("client directory not existed!")
    with os_utils.open_zip(UPDATE_FILE, "w",
                           os_utils.ZIP_DEFLATED) as zipped:
        prefix_len = len(CLIENT_DIR) + 1
        for root, _, file_names in os_utils.walk(CLIENT_DIR):
            for filename in file_names:
                full_path = os_utils.joinpath(root, filename)
                zip_path = full_path[prefix_len:]
                zipped.write(full_path, zip_path)
        print("package client to data.7z")


if __name__ == '__main__':
    sync_common_data_files()
    package_client()
