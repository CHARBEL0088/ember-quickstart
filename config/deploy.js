// config/deploy.js

module.exports = function(deployTarget) {
  var ENV = {};

  ENV['s3'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'my-ember-app',
    region: 'us-east-1'
  };

  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'my-ember-app-index',
    region: 'us-east-1'
  };
  return ENV;
};