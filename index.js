const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
// const path = require('path');
// const createError = require('http-errors')

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ultrock', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)
app.use(cors({
    origin:'http://localhost:3000', 
}));
// app.use(express.json());



// this is routes
// const User = require('./router/User');
// app.use("/api/user", User);

// const routes= require('./routes');

// this is middleware
app.use(express.json())

app.use('/api/User' , require('./routes/User'));
// app.use('/api/login' , require('./routes/login'));



const port = 3001;



//middleware




 

 

 app.get('/', (req,res) => {
    res.send("Hello ujala your backend is connected now")
})

app.listen(port, () => {
    console.log("server is running on port "+port)
});
