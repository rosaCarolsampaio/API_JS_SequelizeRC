const Item = require("../models").Item;

module.exports = {
    create(req, res) {
        return Item.create({
            item_id: req.body.item_id,
            name: req.body.name,
            weight: req.body.weight
        })
            .then(Item =>
                res
                    .status(201)
                    .send({
                        success: true,
                        message: "Successfully created an item entity.",
                        Item
                    })
            )
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Item.findAll()
        .then(items=> res.status(200).send(items))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Item.findAll(req.params.itemId)
        .then(item => {
            if(!item){
                return res.status(404).send({
                    message: "Item not found"
                });
            }
            return res.status(200).send(item);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Item.findByPk(req.params.itemId)
        .then(item => {
            if(!item){
                return res.status(404).send({
                    message: "Item not found"
                });
            }
            return item
            .update(req.body)
            .then(() =>  res.status(200).send(item))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return Item.findByPk(req.params.itemId)
        .then(item => {
            if(!item){
                return res.status(404).send({
                    message: "Item not found"
                });
            }
            return item
            .destroy()
            .then(() =>  res.status(204).send({ message: "successfully deleted the item." }))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
};