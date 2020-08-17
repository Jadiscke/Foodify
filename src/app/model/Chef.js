const db = require('../config/db');


module.exports = {
    create(data,callback){
        const query = `
            INSERT into chefs(
                name,
                avatar_url
            ) VALUES ( $1, $2 )
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url
        ]

        db.query(query,values, function(err, results){
            if(err) throw `Database ERROR! \n ${err}`;

            callback();
        });
    },
    index(callback){
        db.query(`
            SELECT chefs.* FROM chefs
        `, function(err,results){
            if(err) throw `Database ERROR! \n ${err}`;

            callback(results.rows)
        })
    }
}