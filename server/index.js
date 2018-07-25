require('dotenv').config();
 
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive =require('massive');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');



const port = 4000;
// process.env.PORT ||
const app = express();

app.use(bodyParser.json());
app.use(cors());


massive( process.env.CONNECTION_STRING ).then(db => {
app.set('db', db);
            // console.log(db);
}).catch(err => console.log(err));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false
}));
app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/login', 
    scope: 'openid email profile'
},

// => means i don't have to put function at the beginning and return before done.
(accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
}
));
// serialUser is what properties from the user we want back.
passport.serializeUser((user, done) => {
    console.log(user)
   done(null, { clientID: user.id, email: user._json.email, name: user._json.name });
});
// logic to be done with this new version of user.
passport.deserializeUser((obj, done) => {
   done( null, obj);
});


passport.serializeUser((user, done) => {
    app
      .get("db")
      .auth.getUserAuthid(user.id)
      .then(response => {
        if (!response[0]) {
          app
            .get("db")
            .auth.addUserAuthid([user.name, user.email])
            .then(res => {
              return done(null, res[0]);
            })
            .catch(err => console.log(err));
        } else {
          return done(null, response[0]);
        }
      })
      .catch(err => console.log(err));
  });
  passport.deserializeUser((user, done) => {
    return done(null, user);
  });


// endpoints
app.get('/login', 
passport.authenticate('auth0',
        {successRedirect: 'http://localhost:3000/#/user',
        failureRedirect: 'http://localhost:3000/#/login'}
    )
);

app.get('/', (req, res, next) => {
    console.log("hit")
    if( !req.user ) {
      res.redirect('/login')
    } else {
        res.status(200).send(req.user);
    }
  });



// app.get('/api/test', (req, res, next) => {
//     res.status(200).send("It's Working!")
// });

app.get('/api/centers', controller.getAll)
app.get('/api/userData', controller.getMyData)



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})