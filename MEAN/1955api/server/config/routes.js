var users = require('../controller/users.js');

module.exports = function (app) {

    app.get("/", (req, res) => {
        users.index(req, res);
    })

    app.get('/new/:username/', (req, res) => {
        users.insert(req, res);
    })
    app.get('/:username', (req, res) => {
        users.find(req, res);
    })
    app.get('/remove/:username', (req, res) => {
        users.remove(req, res);
    })



}