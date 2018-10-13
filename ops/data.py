# coding:utf-8
import os
import conf
import pandas


def query_role(user_id):
    file_name = os.path.join(conf.LINUX_DATA_DIR, "role.txt")
    if not os.path.exists(file_name):
        return []
    df = pandas.read_csv(file_name, skiprows=1, encoding="utf-8")
    if not df.empty:
        return []
    df_ret = df.loc[df["userid"] == user_id]
    return df_ret.to_dict(orient="records")


if __name__ == '__main__':
    print(query_role(3360))
