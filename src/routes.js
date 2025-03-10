const express = require('express');
const router = express.Router();
const { getAllData, getDataById, addData, deleteData } = require('./controllers/dataController');

router.get('/data', getAllData);
router.get('/data/:id', getDataById);
router.post('/data', addData);
router.delete('/data/:id', deleteData);

module.exports = router;