// Import required modules
const modelAllocate = require('../model/allocate')
const validate = require('../utilities/validator')


const allocate = {}

// This function fetches all employees from the database and returns the result.
// If the operation fails then an exception is thrown.
allocate.findAllEmp = async () => {
    try {
        const result = await modelAllocate.findEmployees();
        console.log("service:",result)
        return result;   
    } catch (error) {
        throw error;
    }
}

// This function validate the employee's information such as name, age, and id.
// Then add a single employee to the database and returns the result.
// If the operation fails then an exception is thrown.
allocate.addSingleEmp = async (empObj) => {
    try {
        validate.validateEmpId(empObj.empId);
        validate.validateEmpName(empObj.empName);
        validate.validateEmpAge(empObj.empAge);
        const result = await modelAllocate.addSingleEmployee(empObj);
        console.log("service: " ,result)
        return result;
    } catch (error) {
        throw error
    }
}

// This function validate the employee's information such as name, age, and id.
// Then update a single employee based on the employee id with employee object having new values.
// If the operation fails then an exception is thrown.
allocate.updateEmp = async (empId, empObj) => {
     try {
        validate.validateEmpId(empId);
        validate.validateEmpName(empObj.empName);
        validate.validateEmpAge(empObj.empAge);
        const result = await modelAllocate.updateEmployee(empId,empObj)
        console.log(result)
        return result;
    } catch (error) {
        throw error
    }
}

// This function validate the employee's id.
// Then delete a single employee based on the employee id
// If the operation fails then an exception is thrown.
allocate.deleteSingleEmp = (empId) => {
    try {
        validate.validateEmpId(empId);
        const result =  modelAllocate.deleteEmployee(empId)
        return result;  
    } catch (error) {
        throw error
    }
}

module.exports = allocate