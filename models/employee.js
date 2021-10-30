var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  name: String,
  title: String,
}); 

// This creates our model from the above schema, using mongoose's model method
var Employee = mongoose.model("Employee", EmployeeSchema);
// Export the Card model
module.exports = Employee;
