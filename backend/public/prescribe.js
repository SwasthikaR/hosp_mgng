const express = require('express');
const router = express.Router();

const client1 = require("./connection");

let conn = client1.db("Hospital").collection("Prescription");


/*Add prescription*/
router.post('/enterpres', async function(req,res){

    let objPres = {

        patId:req.body.p_id,
        bp:req.body.bp,
        height:req.body.height,
        weight:req.body.weight,
        temp:req.body.temp,
        bmi:req.body.bmi,
        nxt:req.body.nxt
    }

    await conn.insertOne(objPres);

})



module.exports = router;