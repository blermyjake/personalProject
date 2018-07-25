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
// console.log(res)
    db.User_Table()
    .then(response=>{
        res.status(200).send(response)
    })
},

addCenter: (req, res, next) => {
    console.log(req.body)
    const { organization, services, website, hours, phone, maplink } = req.body;
    const db = req.app.get('db');
    // refers to sql file
    // object?????
    db.Add_Center([organization, services, website, hours, phone, maplink])
    .then(response =>{
        res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err))
  },

getUser: (req, res) => {

    if (!req.user) {
      res.status(401).send()
    } else {
      const dbInstance = req.app.set("db")
  
      dbInstance.auth
        .getUserAuthid(req.user.authid).then((person) => {
          res.status(200).json(person[0]);
        }).catch(err => res.status(500).json(err))
    }
  }
}






// const loggedIn = function(){
//     if (!req.user){
//         redirect ('/login')
//         }else {

//         }
//         }
    
//    }
// getAll,
// // getUser,
// getMyData

