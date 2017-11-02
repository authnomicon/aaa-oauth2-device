exports = module.exports = function() {
  
  return function activate(client, deviceCode, user, cb) {
    console.log('ACTIVATE IT! - ' + deviceCode);
    return cb();
  };
};

exports['@require'] = [
];
