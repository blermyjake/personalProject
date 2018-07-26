module.exports = {

getAll: (req, res, next ) => {
    const db = req.app.get('db');

    db.Help_Centers().then(response=>{
        res.status(200).send(response)
        
    }).catch(err => console.log(err))
},

getMyData: (req, res, next) => {
    const db = req.app.get('db');
    // console.log("fired")
    db.User_Table(req.params.id).then(response=>{
        res.status(200).send(response)
    }).catch(err => res.status(500).send(err))
},

addCenter: (req, res, next) => {
    const { organization, services, website, hours, phone, maplink, userid } = req.body;
    const db = req.app.get('db');
    // refers to sql file
    // object?????
    db.Add_Center([organization, services, website, hours, phone, maplink, userid]).then(response =>{
        res.status(200).send(response);
    }).catch(err => res.status(500).send(err))
  },

getUser: (req, res) => {
    if (!req.user) {
      res.status(401).send()
    } else {
      const dbInstance = req.app.set("db")
  
      dbInstance.auth
        .getUserAuthId(req.user.authid).then((person) => {
          res.status(200).json(person[0]);
        }).catch(err => res.status(500).json(err))
    }
    
  },

deleteUserData: (req, res, next)=>{
    const {id} = req.params;
    const db = req.app.get('db');

    db.DeleteE(parseInt(id)).then(results => {
        res.status(200).send();
    }).catch(err => console.log(err))
    },

updateUser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params  } = req;
    const { type, value } = req.body.data;

    dbInstance.query('UPDATE centers SET ' + type + ' = $1 WHERE id = $2;', [value, +params.id])
    .then( () => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({errorMessage: 'Uh oh. Probs...'});
        console.log(err)
    });
},


}
