var tasks = require('../controller/tasks.js');

module.exports = function (app) {

    app.get("/tasks", (req, res) => {
        tasks.index(req, res);
    });
    app.post('/newtask', (req, res) => { //used to be .post
        console.log("I am in /newtask", req.body);
        tasks.insert(req, res);
    });
    app.get('/task/:taskid', (req, res) => {
        tasks.find(req, res);
    });
    app.delete('/:taskid', (req, res) => {
        console.log("app.delete");
        tasks.remove(req, res);
    });
    app.put('/:taskid',(req,res)=>{
        console.log("Editing task in routes.js", req.body)
        tasks.update(req,res);

    });



}