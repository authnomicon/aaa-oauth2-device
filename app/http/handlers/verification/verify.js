exports = module.exports = function(server, loadTransaction, processTransaction, completeTransaction, prompt, parse) {

  function verify(req, res, next) {
    console.log('VERIFY IT')
    console.log(req.body)
  }


  return [
    parse('application/x-www-form-urlencoded'),
    server.resume(
      loadTransaction,
      processTransaction,
      completeTransaction
    ),
    prompt()
  ];
};

exports['@require'] = [
  'http://schemas.authnomicon.org/js/oauth2/Server',
  '../../middleware/loadtransaction',
  'http://schemas.authnomicon.org/js/oauth2/http/authorize/processTransactionFunc',
  'http://schemas.authnomicon.org/js/oauth2/http/authorize/completeTransactionFunc',
  'http://schemas.authnomicon.org/js/oauth2/http/middleware/prompt',
  'http://i.bixbyjs.org/http/middleware/parse'
];
