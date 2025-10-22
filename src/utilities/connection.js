const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Employee_DB_040923'

const employeeSchema = mongoose.Schema({
    empId: {
        type: Number,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    empAge: {
        type: Number,
        required: true
    }
})

exports.getDBModel = async () => {
    try {
        const dbConnection = await mongoose.connect(url)
        const model = await dbConnection.model("Employee", employeeSchema)
        return model
    } catch (error) {
        let err = new Error('Failed to connect with Employee_DB_040923 !')
        err.status = 500
        throw err
    }
}