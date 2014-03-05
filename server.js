var connect = require('connect'), 
    http = require('http'),
    app;

app = connect()
  .use(connect.static('app'))
  .use('/scripts/vendor/', connect.static('node_modules/requirejs/'))
  .use('/node_modules', connect.static('node_modules'));

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Running on http://localhost:8080');
});