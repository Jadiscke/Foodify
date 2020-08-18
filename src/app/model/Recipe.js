const db = require('../config/db');

module.exports = {
    create(data, callback){
        const query = `
            INSERT into recipes(
                chef_id,
                image,
                ingredients,
                preparations,
                information
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5
            ) RETURNING id
        `;

        const values = [
            data.chef_id,
            data.image,
            data.ingredients,
            data.preparations,
            data.information
        ];

        db.query(query,values, (err, results)=> {
            if(err) throw `Database ERROR ${err}`

            callback();
        })
    },
    index(callback){
        db.query(`
        SELECT recipes.* FROM recipes
        `, (err, results)=> {
            if(err) throw `Database ERROR! \n ${err}`

            callback(results.rows);
        })
    }
}