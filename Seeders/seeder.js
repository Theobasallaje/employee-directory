require('dotenv').config({ path: __dirname + '/../.env' })
let mongoose = require("mongoose");
// const fs = require("fs");
const faker = require("faker");
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

for (let count = 0; count < employeeCount; count++) {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let image = faker.internet.avatar();
  let title = faker.name.jobTitle();
  let department = faker.commerce.department();
  let number = faker.phone.phoneNumberFormat();
  let email = faker.internet.email();
  let address = faker.address.streetName();

  console.log(image);

  employees.push({
    firstName,
    lastName,
    image,
    title,
    department,
    number,
    email,
    address,
  });
}

// Delete all employees
db.Employee.deleteMany({}).then(() => {
  employees.forEach((employee) => {
    db.Employee.create(employee);
  })
})