exports = module.exports = function(issueCb) {
  
  
  function prompt(req, res, next) {
    console.log('DO IT!');
    next();
  }


  return [
    require('body-parser').urlencoded({ extended: false }),
    prompt,
    require('oauth2orize-device-code').middleware.request(issueCb)
  ];
  
};

exports['@require'] = [
  './device/issuecb'
];
