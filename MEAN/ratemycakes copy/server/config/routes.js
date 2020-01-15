const cakes = require('../controllers/cakes.js');
module.exports = (app) => {
    app.get("/cakes", (req, res) => {
        console.log("routes.js /cakes");
        cakes.index(req, res);
    });
    app.post('/newcake', (req, res) => { //used to be .post
        console.log("I am in /newcake", req.body);
        cakes.insert(req, res);
    });
    app.get('/cake/:cakeid', (req, res) => {
        cakes.find(req, res);
    });
    app.delete('/:cakeid', (req, res) => {
        console.log("app.delete");
        cakes.remove(req, res);
    });
    app.put('/:cakeid', (req, res) => {//insert + $push reviews and description
        console.log("Editing cake in routes.js", req.body)
        cakes.update(req, res);

    });



}
