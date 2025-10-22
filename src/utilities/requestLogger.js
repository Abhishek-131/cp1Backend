const fs = require('fs')
// const path = require('path')

const requestLogger = (req, res, next) => {
    // const reqpath = path.join(__dirname,'RequestLogger.txt')
    fs.appendFile('RequestLogger.txt', `${new Date().toDateString()} - ${req.method} - ${req.url}\n`, (err) => {
        if (err) {
            next(err)
        }
    })
    next()
}
module.exports=requestLogger