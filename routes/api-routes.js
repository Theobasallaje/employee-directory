const express = require("express");
const router = express.Router();
const db = require("../models");

router.route('/api/employees')
    // Retrieve all employees
    .get((req, res) => {
        db.Employee.find({}).then(employees => res.json(employees)).catch(err => res.json(err));
    })
    // Create an employee
    .post((req, res) => {
        console.log(req.body);
        db.Employee.create(req.body).then(employees => res.json(employees)).catch(err => res.json(err));
    })

router.route('/api/employees/:id')
    // Retrieve an existing employee
    .get((req, res) => {
        db.Employee.find({ _id: req.params.id })
            .then((employee) => {
                console.log(employee);
                res.json(employee)
            })
            .catch((err) => {
                console.log('ERROR: ', err)
            })
    })
    // Edit an existing employee
    .put((req, res) => {
        db.Employee.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((data) => {
                res.json('Update Successful!')
                console.log("Employee Data:", data);
                console.log("req.body", req.body);
            })
            .catch((err) => {
                console.log('ERROR: ', err);
            })
    })
    // Delete an existing employee
    .delete((req, res) => {
        db.Employee.delteOne({ _id: req.params.id })
            .then((data) => {
                res.json('Delete Successful!')
                console.log("Employee Data:", data);
            })
            .catch((err) => {
                console.log('ERROR: ', err);
            })
    })

module.exports = router;