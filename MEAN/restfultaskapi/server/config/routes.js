var tasks = require('../controller/tasks.js');

module.exports = function (app) {

    app.get("/", (req, res) => {
        tasks.index(req, res);
    });
    app.post('/newtask', (req, res) => {
        tasks.insert(req, res);
    });
    app.get('/:taskid', (req, res) => {
        tasks.find(req, res);
    });
    app.delete('/:taskid', (req, res) => {
        tasks.remove(req, res);
    });
    app.put('/:taskid',(req,res)=>{
        tasks.update(req,res);

    });



}