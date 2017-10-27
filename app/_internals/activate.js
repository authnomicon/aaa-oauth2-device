exports = module.exports = function() {
  
  return function activate(_, cb) {
    console.log('ACTIVATE IT!');
    return cb();
  };
};

exports['@require'] = [
];
