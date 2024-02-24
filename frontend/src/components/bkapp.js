import "../css/bkapp.css"

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { useState } from 'react';

import axios from 'axios'
function Bkapp() {

    /*UseSate*/
    const [app, setApp] = useState({
        name:"",
        age:"",
        mob:"",
        cause:"",
        date:"",
        time:""
    })

    /*Cause of visit Drop down*/
    const causes = ["Fever", "General Checkup", "Others"];

    /*PopUp*/
    const pop = useRef(null);

    /*Time*/
    const update = () => {
        setApp({...app, time:"Any"});
    }

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
                            <h1>BOOK APPOINTMENT</h1>
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
                            <Button className="butpro" label="Proceed" icon="pi pi-check" onClick={(e) => pop.current.toggle(e)} />
                            <OverlayPanel ref={pop} style={{marginLeft: '300px', padding:'15px'}}>
                                <div className='popup'>
                                    <span className='p-float-label'>
                                        <Calendar id="date" value={app.date} onChange={(e) => setApp({...app, date: e.value})} dateFormat="dd/mm/yy" showIcon/>
                                        <label htmlFor='date'>Date</label>
                                    </span>
                                    <br></br>
                                    <label>Time:</label><br></br><br></br>
                                    <div className='time'>
                                        <Button label="Any Time" onClick={update}/><br></br><br></br>
                                        <span className='p-float-label'>
                                            <Calendar id="time" value={app.time} onChange={(e) => setApp({...app, time: e.value})} timeOnly/>
                                            <label htmlFor='time'>Pick a time slot</label>
                                        </span>
                                    </div>
                                    <br></br>
                                    <Toast ref={toast1} />
                                    <Button label="Submit" icon="pi pi-check" onClick={insertPatient}/>
                                </div>
                            </OverlayPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bkapp;