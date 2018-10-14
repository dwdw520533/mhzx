# coding:utf-8
import re
import socket
import binascii
from binascii import hexlify, unhexlify

PROTECT_VALUE = {
    0: "00:00",
    1: "00:40",
    2: "00:93",
    3: "02:53",
}


class MailSend(object):
    def int_to_hex2(self, num):
        hex_value = hex(num).lstrip("0x")
        if len(hex_value) == 1:
            hex_value = "0" + hex_value
        return hex_value

    def int_to_hex4(self, num):
        hex_value = hex(num).lstrip("0x")
        if len(hex_value) == 1:
            hex_value = "00:0" + hex_value;
        elif len(hex_value) == 2:
            hex_value += ":00"
        elif len(hex_value) == 3:
            hex_value = "0"+hex_value[:1]+":"+hex_value[1:]
        elif len(hex_value) == 4:
            hex_value = hex_value[:2]+":"+hex_value[2:]
        else:
            raise ValueError()
        return hex_value

    def str_to_hex(self, value):
        sb = []
        for c in value:
            hv = hex(ord(c)).lstrip("0x")
            if len(hv) == 2:
                hv += "00"
            else:
                hv = hv[2:4] + ":" + hv[:2]
            sb.append(hv)
        return ":".join(sb)

    def get_hex(self, receiver, item, number, title, text, protect):
        str = "90:76:xx:80:00:00:06:00:00:04:00:03:00:00:" \
              + self.int_to_hex4(receiver) + ":" \
              + self.int_to_hex2(len(title) * 2) \
              + ":" + self.str_to_hex(title) \
              + ":" + self.int_to_hex2(len(text) * 2) \
              + ":" + self.str_to_hex(text) \
              + ":00:00:" \
              + self.int_to_hex4(item) \
              + ":00:00:00:00:00:00:" \
              + self.int_to_hex4(number) \
              + ":00:00:" \
              + self.int_to_hex4(number) \
              + ":00:00:00:" \
              + PROTECT_VALUE[protect] \
              + ":00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00"

        return str.replace("xx", self.int_to_hex2(((len(str) + 1) // 3) - 3))

    def send(self, receiver, item, number, title, text, protect=0):
        hex_str = self.get_hex(receiver, item, number, title, text, protect)
        print(hex_str)
        sc = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sc.connect(("192.168.200.100", 29400))
        bf = hex_str.split(":")
        sc.sendall(unhexlify("".join(bf)))
        data = sc.recv(1024)
        if not data:
            return
        print(hexlify(data).decode())
        print(hextostr(hexlify(data).decode()))


def hextostr(text):
    text = re.findall(r'.{2}', text)
    s = map(lambda x:chr(int(x,16)),text)
    flag = ''.join(s)
    return flag


if __name__ == '__main__':
    receiver = 2257
    item = 43257
    number = 1
    title = "鸿蒙快递，请查收"
    text = "这是您在鸿蒙宝库购买的商品，请查收！"
    MailSend().send(receiver, item, number, title, text)
