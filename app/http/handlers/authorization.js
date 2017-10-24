exports = module.exports = function(issue) {

  return [
    require('body-parser').urlencoded({ extended: false }),
    require('oauth2orize-device-code').middleware.request(issue)
  ];
  
};

exports['@require'] = [
  './authorization/issue'
];
