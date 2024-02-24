import "../css/bkapp.css"

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { useState } from 'react';

import axios from 'axios'
function OpEntry() {

    /*UseSate*/
    const [app, setApp] = useState({
        name:"",
        age:"",
        mob:"",
        cause:""
    })

    /*Cause of visit Drop down*/
    const causes = ["Fever", "General Checkup", "Others"];


    /*Toast*/
    const toast1 = useRef(null);

    const show1 = () => {
        toast1.current.show({severity: 'success', summary: 'Appointment Successful !', detail: 'Appointment booked.' })
    }

    const show2 = () => {
        toast1.current.show({severity: 'error', summary: 'Error !', detail: 'Please bokk again.' })
    }

    const insertPatient = () =>{

        let copyApp = {...app}

        axios.post('http://localhost:3001/patient/bkapp', copyApp)
        .then(() => {
            show1();
        })
        .catch(() => {
            show2();
        })

        setApp({
            name:"",
            age:"",
            mob:"",
            cause:"",
            date:"",
            time:""
        })
    } 

    return(
        <div>
           <div className='bkimg'>
                <div className='appcol'>
                    <div className='appcont'>
                        <h1>BOOK YOUR APPOINTMENTS NOW</h1>
                        <h2>MEET THE <span style={{color:'rgb(62, 238, 62)'}}>BEST</span> DOCTORS</h2>
                        <p>We care for your Life. Your life our Resposibility</p>
                        <div className='appform'>
                            <h1>OUT PATIENT ENTRY</h1>
                            <div className='formdet'>
                            <span className="p-float-label">
                                <InputText style={{width:'300px'}} id="username" value={app.name} onChange={(e) => setApp({...app, name: e.target.value})} />
                                <label htmlFor="username">Username</label>
                            </span>
                            <br></br>
                            <span className="p-float-label">
                                <InputNumber style={{width:'300px'}} id="age" value={app.age} onValueChange={(e) => setApp({...app, age: e.value})} />
                                <label htmlFor="age">Age</label>
                            </span>
                            <br></br>
                            <span className='p-float-label'>
                                <InputMask style={{width:'300px'}} value={app.mob} onChange={(e) => setApp({...app, mob: e.value})} mask="999-999-9999" placeholder="Phone No." />
                            </span>
                            <br></br>
                            <span className='p-float-label'>
                                <Dropdown style={{width:'300px'}} id="cause" value={app.cause} onChange={(e) => setApp({...app, cause: e.value})} options={causes}/>
                                <label htmlFor='cause'>Cause of Visit</label>
                            </span>
                            <br></br>
                            <Toast ref={toast1} />
                            <Button className="butpro" label="Submit" icon="pi pi-check" onClick={ insertPatient } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpEntry;