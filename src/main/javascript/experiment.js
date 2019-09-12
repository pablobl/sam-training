const AWS = require('aws-sdk');
let response;



exports.handler = async (event, context) {

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
    try{
        response = {
          'statusCode': 200,
          'body': JSON.stringify({
            location: text.trim()
          })
        }
      } catch (err) {
          console.log(err);
          return err;
      }
      return response
  });
};
