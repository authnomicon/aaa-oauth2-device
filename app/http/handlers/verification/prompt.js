exports = module.exports = function(issue, parse) {

  function prompt(req, res, next) {
    res.locals.verificationURL = req.originalUrl;
    res.render('prompt');
  }


  return [
    prompt
  ];
};

exports['@require'] = [
];
