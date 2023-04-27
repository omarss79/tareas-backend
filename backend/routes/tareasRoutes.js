const express = require('express')
const router = express.Router()
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getTareas)
router.post('/', protect, setTareas)
router.put('/:id', protect, updateTareas)
router.delete('/:id', protect, deleteTareas)

module.exports = router