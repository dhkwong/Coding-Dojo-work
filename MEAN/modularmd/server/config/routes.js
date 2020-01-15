var otters = require('../controller/otters.js');
module.exports = function (app) {
    app.get('/otters/new', (req, res) => {
        otters.otternew(req, res);
    });

    app.post('/otters', (req, res) => {
        otters.otters(req, res);
    });

    app.get('/otter/:id', (req, res) => {
        otters.otterid(req, res);
    });
    app.get('/otter/edit/:id', (req, res) => { //gets an otter by id to edit, and renders edit page
        otters.ottereditid(req, res);
    });

    app.post('/otter/:id', (req, res) => { //edits the otter in question
        otters.otterpostid(req, res);
    });

    app.get('/', (req, res) => {
        otters.otterhome(req, res);
    });

    app.get('/otter/destroy/:id', (req, res) => {
        otters.destroy(req, res);
    })
}