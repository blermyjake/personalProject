require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const port = 4000;
// process.env.PORT ||
const app = express();

console.log(`${__dirname}/../build`);
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    // console.log(db);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 //1 hour
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },

    // => means i don't have to put function at the beginning and return before done.
    (accessToken, refreshToken, extraParams, profile, done) => {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .auth.getUserAuthId(user.user_id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .auth.addUserAuthId([
            user.displayName,
            user.user_id,
            user._json.email
          ])
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
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/user",
    failureRedirect: "http://localhost:3000/#/login"
  })
);

app.get("/user", (req, res, next) => {
  console.log("hit");
  if (!req.user) {
    res.redirect("/login");
    // res.status(401).send({message: "OH NO!! please login!!1"})
  } else {
    res.status(200).send(req.user);
  }
});

// user endpoint
app.get("/api/centers", controller.getAll);
app.get("/api/user/logout", controller.logout);

app.get("/api/getUser", controller.getUser);

app.post("/api/userData", controller.addCenter);
app.put("/api/userData/:id", controller.updateUser);
app.delete("/api/userData/:id", controller.deleteUserData);
app.get("/api/userData/:id", controller.getMyData);

app.get("/api/userData/hello/:id", controller.getUniqueData);
// app.get("/api/weather/", controller.getMeWeather);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
