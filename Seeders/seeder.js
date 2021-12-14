require("dotenv").config({ path: __dirname + "/../.env" });
let mongoose = require("mongoose");
// const fs = require("fs");
const faker = require("faker");
const fetch = require("node-fetch");
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
    useUnifiedTopology: true,
  }
);

const employeeCount = 50;
var employees = [];

const runSeeder = async () => {
  for (let count = 0; count < employeeCount; count++) {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    let profilePic = data.results[0].picture.large;
    // console.log("IMAGE: ", data.results[0].picture.large);
    // console.log(profilePic);

    let firstName = count == 49 ? "Theo" : faker.name.firstName();
    let lastName = count == 49 ? "Basallaje" : faker.name.lastName();
    // let image = count == 49 ? "https://avatars.githubusercontent.com/u/17411515?v=4" : faker.internet.avatar();
    let image =
      count == 49
        ? "https://media-exp1.licdn.com/dms/image/C4E03AQFsOmA1R8Ih8A/profile-displayphoto-shrink_800_800/0/1637481352718?e=1645056000&v=beta&t=2yODzXoVNQz8u7plPw8viOqHx4IBuUYm3E0ZP6kFVxQ"
        : profilePic;
    let title = count == 49 ? "UI/UX Developer" : faker.name.jobTitle();
    let department = count == 49 ? "UI/UX" : faker.commerce.department();
    let number = count == 49 ? "972-261-4070" : faker.phone.phoneNumberFormat();
    let email =
      count == 49 ? "Theobasallaje@gmail.com" : faker.internet.email();
    let address =
      count == 49 ? "Royse City, Texas" : faker.address.streetName();
    // console.log("AVATAR: ", avatar, image);

    // console.log(profilePic);

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

  // // Delete all employees
  db.Employee.deleteMany({}).then(() => {
    employees.forEach((employee) => {
      db.Employee.create(employee);
    });
  });
};

runSeeder();