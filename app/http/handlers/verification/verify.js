exports = module.exports = function(parse) {

  function verify(req, res, next) {
    console.log('VERIFY IT')
    console.log(req.body)
  }


  return [
    parse(),
    verify
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse'
];
