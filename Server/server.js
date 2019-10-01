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


if (process.env.NODE_ENV === 'production') {
  //SET STATIC FOLDER
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../','client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
