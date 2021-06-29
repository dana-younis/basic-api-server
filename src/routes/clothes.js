'use strict';
const express = require('express');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();
const validator = require('../middlewares/Validator');


router.get('/', getClothes);
router.get('/:id', getClothesWithId);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

function deleteClothes(req, res) {
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}

function updateClothes(req, res) {
    const objForClothes = req.body;
    const resObj = clothes.update(req.params.id, objForClothes);
    res.json(resObj);
}

function createClothes(req, res) {
    const objForClothes = req.body;
    const resObj = clothes.create(objForClothes);
    res.status(201).json(resObj);
   
}

function getClothes(req, res) {
    const resObj = clothes.read();
    res.json(resObj);
}

function getClothesWithId(req, res) {
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

module.exports = router;