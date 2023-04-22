const express = require('express');

const secure = require('./secure');

const response = require('../../../network/response');

const Controller = require('./index')


const router = express.Router();
//router.use(express.json())

router.get('/', list);

router.get('/:id', get);

router.post('/', upsert);

router.put('/', secure('update'), upsert);

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Controller.remove(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        })
});

//Internal functions

function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next)
}

function get(req, res, next){
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next)
}

function upsert(req, res, next){
    Controller.upsert(req.body)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(next)
}


module.exports = router;