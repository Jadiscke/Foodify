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
        Chef.findById(req.params.id, (chef) => {
            return res.render("admin/chefs/chef", { chef });
        })
    },
    post(req,res){
        Chef.create(req.body,()=>{
            return res.redirect("/admin/chefs");
        });
    }
}

module.exports = chefs;