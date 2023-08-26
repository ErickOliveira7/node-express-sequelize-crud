const db = require("../models");
const Items = db.Items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: "O Conteúdo não pode ser vazio!"
        })
    return;    
    }

    const item = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        is_flammabe: req.body.is_flammabe ? req.body.is_flammabe : false
    }

    Items.create(item)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao criar o item."
        })
    })
};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: { [Op.like]: `%${name}$` } } : null;

    Items.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao listar os itens."
        })
    })
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllFlammabes = (req, res) => {

};