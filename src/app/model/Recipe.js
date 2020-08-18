const db = require('../config/db');

module.exports = {
    create(data, callback){
        const query = `
            INSERT into recipes(
                chef_id,
                image,
                ingredients,
                preparations,
                information,
                title
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            ) RETURNING id
        `;

        const values = [
            data.chef_id,
            data.image,
            data.ingredients,
            data.preparations,
            data.information,
            data.title
        ];

        db.query(query,values, (err, results)=> {
            if(err) throw `Database ERROR ${err}`

            callback();
        })
    },
    index(callback){
        db.query(`
        SELECT recipes.* , chefs.name as chef_name 
        FROM recipes
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        `, (err, results)=> {
            if(err) throw `Database ERROR! \n ${err}`

            callback(results.rows);
        })
    }
}