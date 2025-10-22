// Import necessary module
const connection = require('../utilities/connection')

const allocate = {}

allocate.addSingleEmployee = async (empObj) => {
    // Add new Employee details
    const collection = await connection.getDBModel();
    console.log("model : connections",collection)
    const employee = await collection.create(empObj);
    console.log("model : employee",employee)
    if(!employee){
        const err = new Error("Failed to add an Employee")
        err.status = 500;
        throw err;
    }
    return employee.empId;
}

allocate.findEmployees = async () => {
    // Find all Employees
    const collection = await connection.getDBModel()
    console.log("model ",collection)
    const employees = await collection.find();
    console.log("model ",employees)
    // console.log(employees)
    if(employees.length === 0){
        const err = new Error("Failed to Fetch the Employees")
        err.status = 500;
        throw err;
    } 
    return employees;
}

allocate.deleteEmployee = async (empId) => {
    // Delete an Employee for given empId
    const collection = await connection.getDBModel()
    // console.log("collections",collection)
    const delEmp = await collection.deleteOne({empId:empId})
    console.log("delEmp",delEmp)
    if(delEmp.deletedCount >0 ){
        console.log(empId)
        return empId;
    }else{
        const err = new Error("Failed to delete an Employee")
        err.status = 500;
        throw err;
    }
}

allocate.updateEmployee = async (empId, empObj) => {
    // Update an Employee for given empId with empObj
    const model = await connection.getDBModel()
    console.log("model:",model)
    const updateEmp =  await model.updateOne({empId:empId},{$set:empObj})
    console.log("updateEmp model ",updateEmp)
    if(updateEmp.matchedCount > 0 || updateEmp.modifiedCount > 0){
        return empId;
    }else{
        const err = new Error("Failed to update an Employee");
        err.status = 500;
        throw err;
    }
}

module.exports = allocate