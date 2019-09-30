const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const ReservedRouter = require('./routes/Reserved');
const TablesAVRouter = require('./routes/TablesAV');
const path = require('path');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname,'client/build')))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {res.sendfile(path.join(__dirname = 'client/build/index.html'));
      })}

// app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'))})

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
