import types
import logging

logger = logging.getLogger('gsconfig')
logger.setLevel(logging.INFO)


def get_text_from_s3(s3_bucket, s3_key):
    import awsutil.conf
    import awsutil.s3sync
    sess = awsutil.conf.get_session()
    s3_client = awsutil.s3sync.S3sync(sess, s3_bucket)
    return s3_client.get(s3_key)


def load_to_dict(d, text=None, filename=None,
                 s3_bucket=None, s3_key=None):
    '''
    Load the code from text into the dict d.
    '''
    if text:
        pass
    elif filename:
        text = open(filename).read()
    elif s3_bucket and s3_key:
        text = get_text_from_s3(s3_bucket, s3_key)
    else:
        text = ''
    code_obj = compile(text, "<config string>", 'exec')
    exec(code_obj, d)
    for (k, v) in d.items():
        logger.info("%s = %s" % (k, repr(v)))


def load_as_module(text=None, filename=None,
                   s3_bucket=None, s3_key=None,
                   module_name="config"):
    '''
    Load the code as a module, and return the module.
    '''
    config_module = types.ModuleType(module_name)
    load_to_dict(config_module.__dict__,
                 text=text, filename=filename,
                 s3_bucket=s3_bucket, s3_key=s3_key)
    return config_module
