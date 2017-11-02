exports = module.exports = function() {
  
  return function loadTransaction(req, res, next) {
    console.log('CUSTOM LOAD TRANSACTION!');
    console.log(req.body)
    
    req.oauth2 = { transactionID: '1235',
      locals: { deviceCode: 'foofoof' },
      client: 
       { id: '1',
         name: 'OAuth 1.0 Client',
         redirectURIs: [ 'http://127.0.0.1:3000/return' ],
         tokenEndpointAuthMethod: 'client_secret_basic',
         grantTypes: [ 'authorization_code' ],
         responseTypes: [ 'code' ],
         scope: [ 'send', 'receive' ],
         authenticationSchemes: [ 'bearer', 'hawk' ] },
      req: 
      { type: 'device_code',
         //type: 'device_code',
         display: 'page' },
      user: undefined };
    
    req.state = req.oauth2;
    req.state.handle = req.oauth2.transactionID;
    
    next();
    
  };
};

exports['@require'] = [];
