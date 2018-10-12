# coding=utf-8
# !/usr/bin/env python
import logging
import pymssql

logger = logging.getLogger(__name__)


class Mysql(object):
    def __init__(self, mysql_conf):
        self.mysql_conf = mysql_conf

    def get_connection(self):
        return pymssql.connect(**self.mysql_conf)

    def execute_query(self, sql):
        """
        执行查询语句
        """
        conn = self.get_connection()
        cur = conn.cursor()
        try:
            cur.execute(sql)
            results = cur.fetchall()
            if cur.description is not None:
                columns = [i[0] for i in cur.description]
                return [dict(zip((c for c in columns), row)) for row in results]
            else:
                return None
        finally:
            cur.close()
            conn.close()

    def execute_non_query(self, sql):
        """
        执行非查询语句
        """
        conn = self.get_connection()
        cur = conn.cursor()
        try:
            cur.execute(sql)
            conn.commit()
        finally:
            cur.close()
            conn.close()

    def first(self, sql):
        ret = self.execute_query(sql)
        return ret[0] if ret else None

    def execute_procedure(self, sp, values=()):
        conn = self.get_connection()
        cur = conn.cursor()
        try:
            return cur.callproc(sp, values)
        finally:
            cur.close()
            conn.close()
