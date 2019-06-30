var express = require('express')
var path = require('path')

var app = express()
var PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var contacts = []

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'))
})

app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname, './client/view.html'))
})

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, './client/search.html'))
})

app.get('/api/contacts', (req, res) => {
  res.send(contacts)
})

app.get('/api/contacts/:name', (req, res) => {
  var nameToFind = req.params.name

  var info = contacts.filter(info => {
    return info.name == nameToFind
  })

  res.json(info)
})

app.post('/api/contacts', (req, res) => {
  var newContact = req.body
  contacts.push(newContact)
  res.json(contacts)
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})
