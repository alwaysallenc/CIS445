var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  




console.log('todo list RESTful API server started on: ' + port);


app.get('server/review/:reviewid', function (req, res) {
    res.send('GET request');
})
app.get('server/review/:n/:stars', function (req, res){
  res.send('GET random star review')  
})
app.get('server/review/:n/:from_date/:to_date', function (req, res){
  res.send('GET random review by date')  
})
app.post('server/review/:reviewid', function(req, res){
    res.send('POST review')
})
app.put('server/review/:reviewid', function(req, res){
    res.send('PUT update reveiw')  
})
app.delete('server/review/:reviewid', function(req, res){
  res.send('DELETE review')  
})

app.listen(port);