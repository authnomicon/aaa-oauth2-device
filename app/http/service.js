exports = module.exports = function(createHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', createHandler);
  
  return router;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oauth2/http/DeviceAuthorizationService';
exports['@require'] = [
  './handlers/device'
];
