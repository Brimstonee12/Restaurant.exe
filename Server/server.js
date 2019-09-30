const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const ReservedRouter = require('./routes/Reserved');
const TablesAVRouter = require('./routes/TablesAV');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//CONNECT TO DB
mongoose.connect('mongodb+srv://Brimstonee12:huaweip29l@respository-mmcvv.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

//CONSOLE CONNECT INFO
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//USE COMPONENTS
app.use('/reserved', ReservedRouter);
app.use('/tablesav', TablesAVRouter);


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
