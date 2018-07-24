module.exports = {

    getAll: (req, res, next ) => {
        const db = req.app.get('db');

        db.Help_Centers()
        .then(response=>{
            res.status(200).send(response)
            
        })
    },


    getIf  : (req, res, next) => {
        const db = req.app.get('db');

        db.Help_Centers()
        .then(response=>{
            res.status(200).send(response)
        })
    }


}