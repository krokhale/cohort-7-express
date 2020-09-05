var express = require('express');
var router = express.Router();

let {ListItem} = require('../db');


// REST
// model: ListItem
// GET /list-items all the list items in the system
// GET /list-items/:id, /list-items/1
// POST /list-items creates a list item
// PUT /list-items/:id
// DELETE /list-items/:id
// CRUD


//GET  http://localhost:3000/api/list-items

router.get('/', async function(req, res, next) {
    // fetch all the items from the database
    // update an item or delete item
    // send them back to the browser

    let listItems = await ListItem.findAll({});
    res.json(listItems);

});

//GET  http://localhost:3000/api/list-items/:id
router.get('/:id', async function(req, res, next) {
    let listItem = await ListItem.findAll({where: {id: req.params.id}});
    res.json(listItem);
});

//PUT  http://localhost:3000/api/list-items/:id
router.put('/:id', async function(req, res, next) {
    let listItem = await ListItem.update(req.body, {where: {id: req.params.id}});
    res.json(listItem);
});

//DELETE  http://localhost:3000/api/list-items/:id
router.delete('/:id', async function(req, res, next) {
    let listItem = await ListItem.destroy({where: {id: req.params.id}});
    res.json(listItem);
});

router.post('/', async function(req, res, next) {

    let listItem = await ListItem.create(req.body);
    res.json(listItem);

});






/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/hey', function(req, res, next) {
    res.send('respond with a hey');
});

module.exports = router;
