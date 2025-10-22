const dbModel = require('../utilities/connection')

const employeeData = [
    {
        empId: 1001,
        empName: "Tony",
        empAge: 40
    },
    {
        empId: 1002,
        empName: "Bruce",
        empAge: 24
    },
    {
        empId: 1003,
        empName: "Peter",
        empAge: 25
    }
]

exports.getDB_SetUp = async () => {
    const storedData = await dbModel.getDBModel()
    await storedData.deleteMany()
    const data = await storedData.insertMany(employeeData)

    if (data.length > 0) {
        return "Insertion Succeeded !"
    } else {
        let err = new Error("Failed to SetUp DB")
        err.status = 500
        throw err
    }
}