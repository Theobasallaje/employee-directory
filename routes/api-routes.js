const express = require("express");
const router = express.Router();
const db = require("../models");

router.route('/api/employees')
    .get((req, res) => {
        db.Employee.find({}).then(employees => res.json(employees)).catch(err => res.json(err));
    })
    .post((req, res) => {
        console.log(req.body);
        db.Employee.create(req.body).then(employees => res.json(employees)).catch(err => res.json(err));
    })

// router.update('/api/employees/:id', (req, res) => {
//         db.Employee.find({}).then(employees => res.json(employees)).catch(err => res.json(err));
//     })

module.exports = router;