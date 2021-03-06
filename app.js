var express = require('express'),
    pub = __dirname + '/public',
    app = express(),
    port = process.env.PORT || 3000;
app.use(express.static(pub));
app.set('views',__dirname + '/views');
app.set('view engine','jade');
app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});