// import the controllers
const SkiffsControllers = require('../controllers/skiffs.controllers');


// create the valid routes
module.exports = (app) => {
    app.get('./api/skiffs', SkiffsControllers.getAll);
    app.post('./api/skiffs',SkiffsControllers.create);
    app.get('./ap/skiffs/:id', SkiffsControllers.getOne);
    app.put('./ap/skiffs/:id', SkiffsControllers.update);
    app.delete('./ap/skiffs/:id', SkiffsControllers.delete);

};