const express = require('express');
const router = express.Router();

const MemoryController = require('./../controllers/memory')

router.get('/random-question', MemoryController.getRandomQuestion);
router.get('/', MemoryController.getAll);
router.post('/', MemoryController.postMemory);
router.get('/count', MemoryController.getMemoryCount);
router.get('/mine', MemoryController.getMyMemories);

module.exports = router;
