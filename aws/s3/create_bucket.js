/**
 * Created by Zeeshan on 3/4/2016.
 */

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

//Load the S3 information from the environment variables.
var AWS_ACCESS_KEY = "xxxAJ76xxxxxxxxx";//process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = "xxxxxxZrkJbTxxxxxxxxxxxxxxxxxxxxxx";//process.env.AWS_SECRET_KEY;


// Set your region for future requests.
AWS.config.region = 'us-west-2';

// Create a bucket using bound parameters and put something in it.
var s3bucket = new AWS.S3({params: {Bucket: 'this_is_bucket_name'}});
s3bucket.createBucket(function() {
 var params = {Key: 'this_is_key', Body: 'This is data.'};
 s3bucket.upload(params, function(err, data) {
  if (err) {
   console.log("Error uploading data: ", err);
  } else {
   console.log("Successfully uploaded.");
  }
 });
});