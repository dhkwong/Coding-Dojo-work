const mongoose = require('mongoose');
const Product = mongoose.model('Product')
module.exports = {
    all: function (req, res) {//
        Product.find({})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },
    getOneById: (req, res) => {
        Product.findById({ _id : req.params.id })
            .then((data) => {
                res.json({product: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const product = new Product(req.body);
        product.save()
            .then((data) => {
                res.json({newProduct: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors);
            
            });
    },
    update: (req, res) => {
        Product.findOneAndUpdate(req.params.id,req.body,{runValidators: true, context: 'query', new:true})
        .then(data=>{
            res.json({updatedProduct:data})
        })
        .catch(err => {
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            res.status(400).json(errors);
        
        });
        // Product.updateOne({ _id : req.params.id }, req.body)
        //     .then((data) => {
        //         res.json({updatedProduct: data});
        //     })
        //     .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Product.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
