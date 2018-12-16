import pyjsonrpc
import os
import sys
import json

from bson.json_util import dumps

sys.path.append(os.path.join(os.path.dirname(__file__),'./','utils'))
import mongodb_client

SERVER_HOST = 'localhost'
SERVER_PORT = 4040


class RequestHandler(pyjsonrpc.HttpRequestHandler):
    """ RPC request handler """
    @pyjsonrpc.rpcmethod
    def add(self, num1, num2):  # pylint: disable=no-self-use
        """ Test method """
        print "add is called with %d and %d" % (num1, num2)
        return num1 + num2

    @pyjsonrpc.rpcmethod
    def getNews(self):
        db = mongodb_client.get_db()
        news = list(db['news'].find())
        return json.loads(dumps(news))

# Threading HTTP Server
HTTP_SERVER = pyjsonrpc.ThreadingHttpServer(
    server_address=(SERVER_HOST, SERVER_PORT),
    RequestHandlerClass=RequestHandler
)

print "Starting HTTP server on %s:%d" % (SERVER_HOST, SERVER_PORT)

HTTP_SERVER.serve_forever()