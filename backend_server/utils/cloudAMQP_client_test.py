from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://dvuzcnfx:j5RTjqjH1kMc3mLj4Wwhnm5x7vzKBQ1E@elephant.rmq.cloudamqp.com/dvuzcnfx"
TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)
    sentMsg = {'test':'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receivedMsg = client.getMessage()
    assert sentMsg == sentMsg
    print 'test_basic passed!'

if __name__ == "__main__":
    test_basic()