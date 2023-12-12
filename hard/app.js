const express = require('express');
// Create an instance of the express application
const app = express();
const port = 5000;

// Import the employee data from the 'employees.json' file.
const employeeData = require('./employee.json');

// Define a route that handles HTTP GET requests to '/' or home
app.get('/', (req, res) => {
  res.send(`running`);
});



// // Route to get all employees
app.get('/employee', (req, res) => {
  res.json(employeeData);
});

// Route to get an employee by ID 
app.get('/employee/:employeeID', (req, res) => {
// Extract employeeID from the route parameter
const employeeID = req.params.employeeID;
// finding the employee in the employeeData array
const employee = employeeData.find(emp => emp.employeeID.toString() === employeeID);
//Checks in Employee was found



if (employee) {
  res.json(employee);

} else {
  return res.status(404).json({ error: 'Employee not found' });
  
}
});












// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
