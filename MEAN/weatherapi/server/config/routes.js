const weatherapicontroller = require('../controllers/controller.js');
// const cakes = require('../controllers/cakes.js');
module.exports = (app) => {
    app.get("/test", (req, res) => {
        console.log("routes.js /");
        weatherapicontroller.index(req, res);
    });
}
