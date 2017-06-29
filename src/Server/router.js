const Authentication = require('./controllers/authentication');
const Users = require('./controllers/user_dashboard');
const passportService = require('./services/passport');
const passport = require('passport');



//Helper object to authenticate users
const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){

  //This made sure that any requests is routed through the authorization module
  app.get('/', requireAuth, function(req, res){
    res.send({message: 'Responding to your request!'});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.get('/users', Users.dashboard)
}
