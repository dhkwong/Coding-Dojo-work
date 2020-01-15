const mongoose = require('mongoose');
const Customer = mongoose.model('Customer')
const Order = mongoose.model('Order')
module.exports = {
    all: async (req, res) => {
        try {
            const customers = await Customer.find();
            res.json({ customers: customers });
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Customer.findById({ _id: req.params.id })
            .then((data) => {
                res.json({ customer: data })
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const customer = new Customer(req.body);
        console.log('in create controller', req.body)
        customer.save()
            .then((data) => {
                res.json({ newCustomer: data });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors)
            });


    },
    update: (req, res) => {
        // Customer.updateOne({ _id: req.params.id }, req.body)
        //     .then((data) => {
        //         res.json({ updatedCustomer: data });
        //     })
        //     .catch(err => res.json(err));
        const order = new Order(req.body);
        console.log("just created order to push to customer", req.body);
        order.save()
            .then((data) => {
                console.log("order", data)
                console.log("id", req.body)
                Customer.findByIdAndUpdate(req.params.id, { $push: { orders: data } })
                    .then(data2 => {
                        return res.json(data2)
                    })
                    .catch(err => {
                        console.log(err)
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        return res.status(400).json(errors);
                    });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors);

            });

    },
    updateCustomer: (req, res) => {
        Customer.updateOne({ _id: req.params.id }, req.body)
            .then((data) => {
                res.json({updatedCustomer: data});
            })
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Customer.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    deleteorder: (req, res) => {
        Customer.findByIdAndUpdate(req.params.id, { $pull: { orders: { _id: req.params.oid } } })
            .then(data => {
                console.log("deletorder success in customers.js controller", data)
                res.json(data)
            })
            .catch(err => {
                console.log(err)
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors);
            });

    }

    ,
}
