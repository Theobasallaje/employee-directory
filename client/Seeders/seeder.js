require('dotenv').config({ path: __dirname + '/../.env' })
let mongoose = require("mongoose");
// const fs = require("fs");
// const faker = require("faker");
const { getObjectId } = require("mongo-seeding");
// const { title, ipsum } = require("@earthtone/prisoner-ipsum");
let db = require("../models");
// const { random } = require("faker");
// const { uuid } = require('uuidv4');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeeDirectory", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
const employeeCount = 50;
var employees = [];
var currentDate = new Date();
var hourPastDate = currentDate.getHours() - 1;

axios.get()

// Create users array dependent on userCount
for (let count = 0; count < employeeCount; count++) {
//   let userName = faker.internet.userName();
  // TODO: account for username max length
  //TODO: add subscriber and piece count
  employees.push({
    name: '',
    title: '',
    department: '',
    number: null,
    email: '',
    address: '',
  });
}

// Write User List with Passwords for testing
// fs.writeFileSync("users.json", JSON.stringify(users));

// Delete All users
db.Employee.deleteMany({})).then(() => {
    employees.forEach((employee) => {
    
    })
    db.Employee.create(employee);
  })
  //insert array of pieces into the db
  db.Employee.collection.insertMany(employees).then(() => {
    console.log('COMPLETE!');
  })
});
