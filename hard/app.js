const express = require('express');
// Create an instance of the express application
const app = express();
const port = 5000;

// Import the employee data from the 'employees.json' file.
const employeesData = require('./employees.json');

// Define a route that handles HTTP GET requests to '/' or home
app.get('/', (req, res) => {
  res.send(`running`);
});

// path for employees
app.get('/employees', (req, res) => {
    // Respond with all json of employees' data
    res.json(employeesData);
});




// Define a route that handles HTTP GET requests to '/employee/:employeeID'.
app.get(`/employees/:employeeID`, (req, res) => {
    // Extract the 'employeeID' parameter from the request URL.
    const employeeID = req.params.employeeID;
  
    // Find the employee with the specified 'employeeID' in the data.
    const employee = employeesData.employees.find(emp => emp.employeeID === parseInt(employeeID));
    //const employee = employeesData.find(emp => emp.employeeID === parseInt(employeeID));
  
 // Check if the employee is found.


if (employee) {
  // Respond with the JSON representation of the specific employee's data.
  return res.json(employeesData.employees);
} else {
  // If the employee is not found, send a 404 Not Found status and an error message in JSON format.
  return res.status(404).json({ error: 'Employee not found' });
};}
  











// Start the server and listen on the specified port.
,app).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
