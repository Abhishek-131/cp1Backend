//Import required modules
//Implement errorLogger function as per the requirement
const fs = require('fs')
const path = require('path')
const errorLogger = (err,req,res) => {
    const logPath = path.join(__dirname,'ErrorLogger.txt')
    const logError = `${new Date().toISOString()}-${err.stack}\n`
    fs.appendFile(logPath,logError,(fsErr)=>{
        console.log("Failed to loggin error")
    })
    if(err.status){
        res.json({message:err.message})
    }else{
        res.status(500).json({message:err.message})
    }
};

module.exports = errorLogger;