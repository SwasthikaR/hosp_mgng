const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const client1 = require("./connection");
const patient = require('./patient');
const employee = require('./employee');
const prescribe = require('./prescribe');


app.use('/prescribe',prescribe);
app.use('/employee',employee);
app.use('/patient',patient);

app.listen(port, ()=>{
    console.log('API activated.........');
})