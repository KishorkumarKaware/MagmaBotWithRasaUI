
   var apiai = require('apiai');
    var app = apiai('900e4587fa4e48018b7fc03454a7bd28');
    
    var request = app.textRequest('Hello!', {
      'sessionId': 1234567890,
      
    });
    request.on('response', function(response) {
        console.log(response);
        console.log(response.result.parameters);
      });
      
      request.on('error', function(error) {
        console.log(error);
      });
      
      request.end();