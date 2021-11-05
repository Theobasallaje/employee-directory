require("dotenv").config({ path: __dirname + "/../.env" });
let mongoose = require("mongoose");
// const fs = require("fs");
const faker = require("faker");
const { getObjectId } = require("mongo-seeding");
// const { title, ipsum } = require("@earthtone/prisoner-ipsum");
let db = require("../models");
// const { random } = require("faker");
// const { uuid } = require('uuidv4');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/employeeDirectory",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

const employeeCount = 50;
var employees = [];

for (let count = 0; count < employeeCount; count++) {
  let firstName = count == 49 ? "Theo" : faker.name.firstName();
  let lastName = count == 49 ? "Basallaje" : faker.name.lastName();
  let image = count == 49 ? "https://avatars.githubusercontent.com/u/17411515?v=4" : faker.internet.avatar();
  let title = count == 49 ? "UI/UX Developer" : faker.name.jobTitle();
  let department = count == 49 ? "UI/UX" : faker.commerce.department();
  let number = count == 49 ? "972-261-4070" : faker.phone.phoneNumberFormat();
  let email = count == 49 ? "Theobasallaje@gmail.com" : faker.internet.email();
  let address = count == 49 ? "Royse City, Texas" : faker.address.streetName();

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
  });
});
