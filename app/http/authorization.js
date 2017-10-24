exports = module.exports = function(authorizationHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', authorizationHandler);
  
  return router;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oauth2/http/DeviceAuthorizationService';
exports['@require'] = [
  './handlers/authorization'
];
