const express = require('express')
const app = express()
const create = require('./model/setup_db')

const userRouter = require('./routes/routing')
const requestLogger = require('./utilities/requestLogger')
const errorLogger = require('./utilities/errorLogger')

// Import necessary modules and configure the middleware in proper order
// Note :  Do not remove any code which is already given 


//middleware
app.use(express.json());
app.use(requestLogger)
app.use('/',userRouter);

app.use('/set-up-db', (req, res, next) => {
    create.getDB_SetUp().then((data) => {
        res.status(500).send(data)
    }).catch((err) => {
        next(err)
    })
})



app.all('*', (req, res, next) => {
    res.status(400).send("Sorry ! Page Not Found...")
})

//errorLogger
app.use(errorLogger);

app.listen(5000, () => console.log("Server running on port 5000"))