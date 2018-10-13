var express = require('express')
const animalQueries = require('../queries/animalQueries')

const animalRouter = express.Router()

// animalRouter.post('/', animalQueries.create)
animalRouter.get('/', animalQueries.retrieve)
animalRouter.get('/:id', animalQueries.retrieve)
// animalRouter.put('/:id', animalQueries.update)
// animalRouter.delete('/:id', animalQueries.remove);

module.exports = animalRouter