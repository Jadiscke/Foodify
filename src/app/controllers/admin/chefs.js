const chefs = {
    index(req,res){
        return res.render("admin/chefs/index");
    },
    create(req,res){
        return res.render("admin/chefs/create");
    }
}

module.exports = chefs;