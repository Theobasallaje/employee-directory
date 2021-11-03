const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/api/employee', (req, res) => {
    db.Employee.find({}).then(employees => res.json(employees)).catch(err => res.json(err));
})

module.exports = router;