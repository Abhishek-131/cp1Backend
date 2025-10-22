const validator = {}

validator.validateEmpId = (empId) => {
    // Validate Employee's Id
    if(!/^\d{4}$/.test(empId)){
        const err = new Error("Employee Id should be of 4 digits")
        err.status = 400;
        throw err;
    }
}

validator.validateEmpName = (empName) => {
    // Validate Employee's Name
    if(!/^[A-Z][a-zA-Z]{2,}$/.test(empName)){
        const err = new Error("Employee name should start with capital letter and contain only alphabets having minimum length as 3 letters")
        err.status = 400;
        throw err;
    }
}

validator.validateEmpAge = (empAge) => {
    // Validate Employee's Age
    if(empAge < 20 || empAge > 60){
        const err = new Error("Employee age should between the range of 20 to 60 years")
        err.status = 400;
        throw err;
    }
}

module.exports = validator