# coding:utf-8
import os
import conf
import pandas


def query_role(user_id):
    #file_name = os.path.join(conf.LINUX_DATA_DIR, "role.txt")
    df = pandas.read_csv("role.txt", skiprows=1, encoding="utf-8")
    df_ret = df.loc[df["userid"] == user_id]
    return df_ret.to_dict(orient="records")


if __name__ == '__main__':
    print(query_role(3360))
