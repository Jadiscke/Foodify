const Chef = require('../../model/Chef');


const chefs = {
    index(req,res){

        Chef.index(function(chefs){
            return res.render("admin/chefs/index", { chefs })
        });
        
    },
    create(req,res){
        return res.render("admin/chefs/create");
    },
    show(req,res){
        res.send("Route Working");
    }
}

module.exports = chefs;