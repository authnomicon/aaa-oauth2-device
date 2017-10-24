exports = module.exports = function(promptHandler, verifyHandler) {
  var express = require('express');
  var path = require('path');
  
  
  var app = express();
  app.set('views', path.resolve(__dirname, '../../views'));
  app.set('view engine', 'ejs')
  
  app.get('/', promptHandler);
  app.post('/', verifyHandler);
  
  return app;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oauth2/http/DeviceVerificationService';
exports['@require'] = [
  './handlers/verification/prompt',
  './handlers/verification/verify'
];
