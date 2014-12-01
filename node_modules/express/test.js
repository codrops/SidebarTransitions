var app = require('./index')()
app.get('/iamaverylongcomponent/in_a_url/you_said_didnt_work', function (req, res) {
  res.send('got long url')
})
app.get('/IamUSINGcaps', function (req, res) {
  res.send('got caps matching')
})
app.listen(3333)