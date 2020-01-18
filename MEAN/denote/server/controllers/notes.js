// TODO - replace with sql logic instead of mongoose
const config = require('../config/config.js');
const mysql = require('mysql');
let connection = mysql.createConnection(config);
// const mongoose = require('mongoose');
// const Note = mongoose.model('Note')
module.exports = {
    /*var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });*/

    /*MySQL function*/
    // get_info: (data, callback) => {

    //     var sql = "SELECT a from b where info = ?";

    //     connection.query(sql, [data], function (err, results) {

    //         if (err) {
    //             throw err;
    //         }
    //         console.log(results[0].objid); // good
    //         stuff_i_want = results[0].objid;  // Scope is larger than function

    //         return callback(results[0].objid);
    //     })
    // },
    // getNotesByUserId: (req, res) => {
    //     var _id = req.params.id
    //     var sql = "SELECT * from note WHERE fk_note_user = ?";
    //     connection.query(sql, [_id], function (err, results) {
    //         if (err) { throw err }
    //         console.log(results);
    //         return res(results);
    //     })
    // },

    createUser: (req, res) => {
        //inserts but doesn't return data
        var sql = "INSERT INTO user(username, password) VALUES(?, ?)";
        connection.query(sql, [req.body.username, req.body.password], function (err, results) {
            if (err) { throw err }
            console.log("test")
            console.log(results.insertId)
            res.json(results)
        });
    },
    getUsers: (req, res) => {
        var sql = "SELECT * FROM user";
        connection.query(sql, function(err, results){
            if(err){
                throw err
            }
            
            console.log(results)
            console.log("hi")
            res.json({results :results})
        });
        
    }
    // createUser: (req, res) => {
    //     var sql = "INSERT INTO user(username, password) VALUES(?, ?)";
    //     try{
    //         connection.query(sql, [req.body.username, req.body.password], function (err, results) {
    //             if (err) { throw err }
    //             console.log(results)
    //             return res.json(results)
    //         });
    //     } 
    //     catch(err){
    //         res.json(err);
    //     }
    // }
}
    // all: async (req, res) => {

    //     try {
    //         const notes = await Note.find();
    //         res.json({ notes: notes });
    //     }
    //     catch (err) {
    //         res.json(err);
    //     }
    // },
    // getOneById: (req, res) => {
    //     Note.findById({ _id: req.params.id })
    //         .then((data) => {
    //             res.json({ note: data })
    //         })
    //         .catch(err => res.json(err));
    // },
    // create: (req, res) => {
    //     const note = new Note(req.body);
    //     note.save()
    //         .then((data) => {
    //             res.json({ newNote: data });
    //         })
    //         .catch(err => res.json(err));
    // },
    // update: (req, res) => {
    //     Note.updateOne({ _id: req.params.id }, req.body)
    //         .then((data) => {
    //             res.json({ updatedNote: data });
    //         })
    //         .catch(err => res.json(err));
    // },
    // delete: (req, res) => {
    //     Note.findOneAndDelete({ _id: req.params.id })
    //         .then((data) => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // },
