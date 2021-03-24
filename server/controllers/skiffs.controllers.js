const TollmanSkiff = require ('../models/skiffs.model');

module.exports = {
    getAll: (req, res) =>{
        TollmanSkiff.find()
        .then((allSkiffs) =>{
            console.log(allSkiffs);
            res.json(allSkiffs);
        })
        .catch((err) => {
            console.log("err in getAll:" + err);
            res.json(err);
        })
    },

    create:(req,res) => {
        // create a skiff in the DB
        console.log(req.body);
        TollmanSkiff.create(req.body)
        .then((newSkiff) => {
            console.log(newSkiff);
            res.json(newSkiff);
        })
        .catch((err) => {
            console.log("err in create:" + err);
            res.json(err);
        })

    },

    getOne:(req, res) => {
        // get a skiff in the DB
        console.log(req.params.id);
        TollmanSkiff.findById(req.params.id)
        .then((OneSkiff) => {
            console.log(OneSkiff);
            res.json(OneSkiff);
        })
        .catch((err) => {
            console.log("err in getOne:" + err);
            res.json(err);
        })
    },

    update:(req, res) => {
    // update a skiff in the DB
    console.log(req.params.id);
    console.log(req.body);
        TollmanSkiff.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true,
        })
        .then((updatedSkiff) => {
            console.log(updatedSkiff);
            res.json(updatedSkiff);
        } )
        .catch((err) => {
            console.log("err in update:" + err);
            res.json(err);
        })
   

    },

    delete:(req, res) => {
    // remove  a single skiff by ID
    console.log(req.params.id);
        TollmanSkiff.findByIdAndRemove(req.params.id)
        .then((removeSkiff) => {
            console.log(removeSkiff);
            res.json(removeSkiff);
        })
        .catch((err) => {
            console.log("err in delete:" + err);
            res.json(err);
        })
    },
}