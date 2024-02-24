import { useState, useRef } from "react";
import axios from "axios";
import { Toast } from 'primereact/toast';


function Editprof() {

    const [emp, setEmp] = useState({
        f_name: "",
        l_name:"",
        dob:"",
        age:"",
        gender:"",
        job:"",
        addr:"",
        phNo:"",
        bldgrp:""
    })

    const [age, setAge] = useState(null);

    const toast1 = useRef(null);

    const show1 = () => {
        toast1.current.show({severity: 'success', summary: 'Appointment Successful !', detail: 'Appointment booked.' })
    }

    const show2 = () => {
        toast1.current.show({severity: 'error', summary: 'Error !', detail: 'Please bokk again.' })
    }

    const addEmp = () =>{

        let copyEmp = {...emp}

        axios.post('http://localhost:3001/employee/employee', copyEmp)
        .then(() => {
            show1();
        })
        .catch(() => {
            show2();
        })

        setEmp({
            f_name: "",
            l_name:"",
            dob:"",
            age:"",
            gender:"",
            job:"",
            addr:"",
            phNo:"",
            bldgrp:""
        })
    }
    return (
        <>

<div style={{ padding: "100px", boxShadow: "1px 1px 10px 1px grey", margin: "50px", width: "600px", marginLeft: "360px", backgroundColor:"rgba(240, 240, 240, 0.1)" }}>

<h2>Edit Profile</h2>

{/* Name */}
<div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <div>
        <label>First Name</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px", marginRight: '10px'}} name="fname" 
        value={emp.f_name} onChange={(e) => setEmp({...emp, f_name: e.target.value})}/>
    </div>
    <div>
        <label>Last Name</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px" }} name="lname"
        value={emp.l_name} onChange={(e) => setEmp({...emp, l_name: e.target.value})} />
    </div>
</div>

{/* DOB and AGe */}
<div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <div>
        <label>Date of Birth</label><br />
        <input type="date" style={{ width: "220px", padding: "8px", marginTop: "10px", marginRight: '10px'}} name="dob"
        value={emp.dob} onChange={(e) => setEmp({...emp, dob: e.target.value})} />
    </div>
    <div>
        <label>Age</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px" }} name="age" disabled
        value={age} />
    </div>
</div>


{/* Job and gender */}
<div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <div>
        <label>Gender</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px", marginRight: '10px' }} name="gen" 
        value={emp.gender} onChange={(e) => setEmp({...emp, gender: e.target.value})}/>
    </div>
    <div>
        <label>Job</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px" }} name="job" 
        value={emp.job} onChange={(e) => setEmp({...emp, job: e.target.value})}/>
    </div>
</div>

{/* Address */}
<div style={{ marginTop: "20px" }}>
    <label>Address</label><br />
    <textarea style={{ width: "440px", padding: "8px", marginTop: "10px" }} name="addr"
    value={emp.addr} onChange={(e) => setEmp({...emp, addr: e.target.value})} />
</div>

{/* Phone and Bld */}
<div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <div>
        <label>Phone Number</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px", marginRight: '10px' }} name="phn"
        value={emp.phNo} onChange={(e) => setEmp({...emp, phNo: e.target.value})} />
    </div>
    <div>
        <label>Blood Group</label><br />
        <input style={{ width: "220px", padding: "8px", marginTop: "10px" }} name="bld"
        value={emp.bldgrp} onChange={(e) => setEmp({...emp, bldgrp: e.target.value})}/>
    </div>
</div>

<Toast ref={toast1} />
<button style={{marginTop:"50px", padding:"10px", backgroundColor:"rgb(48, 100, 231)", border:"none", color:"white"}} onClick={ addEmp }>Edit Employee</button>

</div>

        </>
    )
}

export default Editprof;