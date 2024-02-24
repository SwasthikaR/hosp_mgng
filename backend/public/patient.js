const express = require('express');
const router = express.Router();

const client1 = require("./connection");

let conn = client1.db("Hospital").collection("Patient");

/*Function for 6 digit p_Id*/
function generateUniqueID() {
    const chars = '123456789';
    let uniqueID = '5'; // Start with 'P'
    for (let i = 1; i < 3; i++) { 
      const randomIndex = Math.floor(Math.random() * chars.length);
      uniqueID += chars[randomIndex];
    }
    return uniqueID;
}

/*Add patient data to db bkapp*/
router.post('/bkapp', async function(req,res){
    
    const patient_ID = generateUniqueID();

    res.send(patient_ID);

    let objPatient = {
        p_id: patient_ID,
        name:req.body.name,
        age:req.body.age,
        mob:req.body.mob,
        cause:req.body.cause,
        date:req.body.date,
        time:req.body.time
    }

    await conn.insertOne(objPatient);

})

/*Add patient data to db opentry*/
router.post('/opentry', async function(req,res){
    
    const patient_ID = generateUniqueID();

    res.send(patient_ID);

    let objPatient = {
        p_id: patient_ID,
        name:req.body.name,
        age:req.body.age,
        mob:req.body.mob,
        cause:req.body.cause
    }

    await conn.insertOne(objPatient);

})


/*For prescription*/
router.get('/pres/:id', async function(req,res){
    
    const patId = req.params.id;

    const toSend = await conn.find({p_id: patId}).project({_id: 0, name: 1, age: 1, mob: 1, cause: 1}).toArray();
    res.send(toSend);
    
})

/*For patient list*/

router.get('/currentDay', async function(req, res){

    const tabSend = await conn.find({}, { projection: { _id: 0, name: 1, age: 1, cause: 1 } }).toArray();
    res.send(tabSend);
        
    })


module.exports = router;