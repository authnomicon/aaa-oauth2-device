exports = module.exports = function(createHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/init', createHandler);
  
  return router;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oauth2/http/DeviceService';
exports['@require'] = [
  './handlers/device'
];
