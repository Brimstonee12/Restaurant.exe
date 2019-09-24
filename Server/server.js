const express = require('express');
const {customers} = require('./serverData')
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/customers',require('./serverComp'));
app.use('/api/ReservedTables',require('./serverReserved'));


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
