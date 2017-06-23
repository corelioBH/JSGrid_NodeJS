var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function(request, response){
    response.sendFile(__dirname + "/lista_clientes.html");
});
app.get('/lista_clientes', function (req, res) {
   fs.readFile( __dirname + "/" + "clientes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Aplicancao ouvindo na porta http://%s:%s", host, port)

})
