const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const expressLayouts = require('express-ejs-layouts');

const app = express()

app.set('views', './Client/layouts')
app.set('view engine', 'ejs')
app.set("layout extractScripts", true);
app.set('layout extractStyles', true);
app.use(expressLayouts);
app.use(express.static('public'));
app.get('/SignIn', (request, response) => {
  response.render('signIn', {
  })
})
app.get('/SignUp', (request, response) => {
  response.render('signUp', {
  })
})
var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});