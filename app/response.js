exports = module.exports = function(container, activate, logger) {
  var device = require('oauth2orize-device-code');
  
  var modeComps = container.components('http://schemas.authnomicon.org/js/oauth2/responseMode');
  return Promise.all(modeComps.map(function(comp) { return comp.create(); } ))
    .then(function(plugins) {
      var modes = {}
        , name;
      plugins.forEach(function(mode, i) {
        name = modeComps[i].a['@mode'];
        modes[name] = mode;
        logger.info('Loaded response mode for OAuth 2.0 device flow: ' + name);
      });
      
      return device.grant.deviceCode({
        modes: modes
      }, activate);
    });
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oauth2/responseType';
exports['@type'] = 'device_code';
exports['@require'] = [
  '!container',
  './_internals/activate',
  'http://i.bixbyjs.org/Logger'
];
