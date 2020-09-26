var express = require('express');
var router = express.Router();

let {Question} = require('../db');



router.get('/', async function(req, res, next) {
    console.log(req.query)
    // let questions = [];
    let questions = await Question.findAll({where: {category: req.query.category}});
    // if(req.query.category){
    //     let questions = await Question.findAll({where: {category: req.query.category}});
    // } else {
    //     let questions = await Question.findAll({});
    // }
    res.json(questions);
});

router.get('/:id', async function(req, res, next) {
    let question = await Question.findAll({where: {id: req.params.id}});
    res.json(question);
});

router.put('/:id', async function(req, res, next) {
    let question = await Question.update(req.body, {where: {id: req.params.id}});
    res.json(question);
});

router.delete('/:id', async function(req, res, next) {
    let question = await Question.destroy({where: {id: req.params.id}});
    res.json(question);
});

router.post('/', async function(req, res, next) {
    let question = await Question.create(req.body);
    res.json(question);

});

module.exports = router;
