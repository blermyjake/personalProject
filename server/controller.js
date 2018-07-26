module.exports = {

getAll: (req, res, next ) => {
    const db = req.app.get('db');

    db.Help_Centers()
    .then(response=>{
        res.status(200).send(response)
        
    })
},

getMyData: (req, res, next) => {
    const db = req.app.get('db');
    db.User_Table(req.params.id)
    .then(response=>{
        res.status(200).send(response)
    })
},

addCenter: (req, res, next) => {
    const { organization, services, website, hours, phone, maplink, userid } = req.body;
    const db = req.app.get('db');
    // refers to sql file
    // object?????
    db.Add_Center([organization, services, website, hours, phone, maplink, userid])
    .then(response =>{
        res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err))
  },

getUser: (req, res) => {
    console.log(req.user)
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
    db.Delete(id)
    .then(res => {
        res.status(200).send(res);
    })
    .catch(err => res.status(500).send(err))

}
}
