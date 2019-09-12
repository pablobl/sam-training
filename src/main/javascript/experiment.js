const AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {

  var params = {
    Bucket: 'nicehelloforfede',
    Key: 'greetings'
  }

  var s3 = new AWS.S3();
  var text;

  s3.getObject(params, function(err, data) {
    const buf = Buffer.from(data.Body, 'hex')
    text = buf.toString('utf8');
    console.log(text);
    callback(null, {
      "isBase64Encoded": false,
      "statusCode": 200,
      "body": text
    });
  });
};
