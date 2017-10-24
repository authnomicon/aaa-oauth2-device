exports = module.exports = function(issue, parse) {

  return [
    parse('application/x-www-form-urlencoded'),
    require('oauth2orize-device-code').middleware.request(issue)
  ];
};

exports['@require'] = [
  './authorization/issue',
  'http://i.bixbyjs.org/http/middleware/parse'
];
