require('dotenv').config();
 
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive =require('massive');
const cors = require('cors');

const port = 4000;
// process.env.PORT ||
const app = express();

app.use(bodyParser.json());
app.use(cors());



massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db);
    // console.log(db);
}).catch(err => console.log(err));


// app.get('/api/test', (req, res, next) => {
//     res.status(200).send("It's Working!")
// });

app.get('/api/centers', controller.getAll)



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})