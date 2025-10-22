// Import all required modules

// Implement the following endpoints based upon the instructions provided in the INSTRUCTIONS.doc file
const express = require('express')
const router = express.Router();
const Employee = require('../model/employee')
const allocateService = require('../service/allocate')

router.post('/employee', async (req, res, next) => {
    try {
        const employee = new Employee(req.body)
        console.log("route",employee)
        const empId = await allocateService.addSingleEmp(employee)
        console.log("route",empId)
        return res.status(201).json({message:`Employee with empId: ${empId} added successfully !`})
    } catch (error) {
        next(error)
    }  
})

router.get('/employees', async (req, res, next) => {
    try {
        const allEmployee = await allocateService.findAllEmp();
        console.log("route: ",allEmployee)
        
        res.status(200).json(allEmployee)  
    } catch (error) {
        next(error)
    }    
})

router.delete('/employee/:empId',async (req, res, next) => {
    try {
        const empId = Number(req.params.empId) 
        const deluser = await allocateService.deleteSingleEmp(empId)
        console.log("route",deluser)
        return res.json({message:`Employee with id: ${empId} deleted successfully !`})
    } catch (error) {
        next(error)
    }
    
})

router.patch('/employee/:empId',async (req, res, next) => {
    try {
         const empId =Number(req.params.empId);
         console.log(empId)
        const employee = new Employee(req.body)
        console.log(employee)
        const updateEmp = await allocateService.updateEmp(empId,employee)
        console.log("updateEmp",updateEmp)
        res.json({message:`Employee with id: ${empId} updated successfully !`})
    } catch (error) {
        next(error);
    }
      
})

// Export the router as a module
module.exports = router