const express = require('express');
const router = express.Router();

const client1 = require("./connection");

let conn = client1.db("Hospital").collection("Employee");

/*Function for 6 digit p_Id*/
function generateUniqueID() {
    const chars = '123456789';
    let uniqueID = '1'; // Start with 'P'
    for (let i = 1; i < 3; i++) { 
      const randomIndex = Math.floor(Math.random() * chars.length);
      uniqueID += chars[randomIndex];
    }
    return uniqueID;
}

/*Add employee data to db bkapp*/
router.post('/employee', async function(req,res){
    
    const emp_ID = generateUniqueID();

    res.send(emp_ID);

    let objEmployee = {
        e_Id:emp_ID,
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        dob:req.body.dob,
        age:req.body.age,
        gender:req.body.gender,
        job:req.body.job,
        addr:req.body.addr,
        phNo:req.body.phNo,
        bldgrp:req.body.bldgrp
    }

    await conn.insertOne(objEmployee);

})

module.exports = router;