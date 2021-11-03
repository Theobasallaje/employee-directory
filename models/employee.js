var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  image: String,
  title: String,
  department: String,
  number: String,
  email: String,
  address: String,
}); 

// This creates our model from the above schema, using mongoose's model method
var Employee = mongoose.model("Employee", EmployeeSchema);
// Export the Employee model
module.exports = Employee;
