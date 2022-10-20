# -*- coding: utf-8 -*-
import io
import os
import zipfile
import contextlib
import tempfile
import shutil
import tarfile
import subprocess
import hashlib
from functools import partial


class OSUtils(object):
    ZIP_DEFLATED = zipfile.ZIP_DEFLATED

    def environ(self):
        return os.environ

    def open(self, filename, mode):
        return open(filename, mode)

    def open_zip(self, filename, mode, compression=ZIP_DEFLATED):
        return zipfile.ZipFile(filename, mode, compression=compression)

    def remove_file(self, filename):
        """Remove a file, noop if file does not exist."""
        # Unlike os.remove, if the file does not exist,
        # then this method does nothing.
        try:
            os.remove(filename)
        except OSError:
            pass

    def file_exists(self, filename):
        return os.path.isfile(filename)

    def get_file_contents(self, filename, binary=True, encoding='utf-8'):
        # It looks like the type definition for io.open is wrong.
        # the encoding arg is unicode, but the actual type is
        if binary:
            mode = 'rb'
            # In binary mode the encoding is not used and most be None.
            encoding = None
        else:
            mode = 'r'
        with io.open(filename, mode, encoding=encoding) as f:
            return f.read()

    def set_file_contents(self, filename, contents, binary=True):
        if binary:
            mode = 'wb'
        else:
            mode = 'w'
        with open(filename, mode) as f:
            f.write(contents)

    def extract_zipfile(self, zipfile_path, unpack_dir):
        with zipfile.ZipFile(zipfile_path, 'r') as z:
            z.extractall(unpack_dir)

    def extract_tarfile(self, tarfile_path, unpack_dir):
        with tarfile.open(tarfile_path, 'r:*') as tar:
            def is_within_directory(directory, target):
                
                abs_directory = os.path.abspath(directory)
                abs_target = os.path.abspath(target)
            
                prefix = os.path.commonprefix([abs_directory, abs_target])
                
                return prefix == abs_directory
            
            def safe_extract(tar, path=".", members=None, *, numeric_owner=False):
            
                for member in tar.getmembers():
                    member_path = os.path.join(path, member.name)
                    if not is_within_directory(path, member_path):
                        raise Exception("Attempted Path Traversal in Tar File")
            
                tar.extractall(path, members, numeric_owner=numeric_owner) 
                
            
            safe_extract(tar, unpack_dir)

    def directory_exists(self, path):
        return os.path.isdir(path)

    def get_directory_contents(self, path):
        return os.listdir(path)

    def makedirs(self, path):
        os.makedirs(path)

    def dirname(self, path):
        return os.path.dirname(path)

    def abspath(self, path):
        return os.path.abspath(path)

    def joinpath(self, *args):
        return os.path.join(*args)

    def walk(self, path):
        return os.walk(path)

    def copytree(self, source, destination):
        if not os.path.exists(destination):
            self.makedirs(destination)
        names = self.get_directory_contents(source)
        for name in names:
            new_source = os.path.join(source, name)
            new_destination = os.path.join(destination, name)
            if os.path.isdir(new_source):
                self.copytree(new_source, new_destination)
            else:
                shutil.copy2(new_source, new_destination)

    def rmtree(self, directory):
        shutil.rmtree(directory)

    def copy(self, source, destination):
        shutil.copy(source, destination)

    def move(self, source, destination):
        shutil.move(source, destination)

    def md5_file(self, file_name):
        with open(file_name, mode='rb') as f:
            d = hashlib.md5()
            for buf in iter(partial(f.read, 128), b''):
                d.update(buf)
        return d.hexdigest()

    @contextlib.contextmanager
    def tempdir(self):
        tempdir = tempfile.mkdtemp()
        try:
            yield tempdir
        finally:
            shutil.rmtree(tempdir)

    def popen(self, command, stdout=None, stderr=None, env=None):
        p = subprocess.Popen(command, stdout=stdout, stderr=stderr, env=env)
        return p

    def mtime(self, path):
        return os.stat(path).st_mtime

    @property
    def pipe(self):
        return subprocess.PIPE

    def recreate_dir(self, directory):
        if self.directory_exists(directory):
            self.rmtree(directory)
        self.makedirs(directory)


if __name__ == '__main__':
    OSUtils().copy("api.py", "api2.py")
