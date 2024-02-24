import "../css/dashbd.css"

import logo from "../images/logo.png"

import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { ToggleButton } from 'primereact/togglebutton';
import { Avatar } from 'primereact/avatar';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { saveAs } from 'file-saver';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faDollarSign, faHouse, faPenToSquare, faPrescription, faScissors, faStethoscope, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

        
function Dashbd() {
    
    //leave
    const [visible, setVisible] = useState(false);

    const [leave, setLeave] = useState({
        dates:"",
        reason:""
    })

    //login
    const [checked, setChecked] = useState(false);

    //graph
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Working Hours',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    //doc table
    const [products, setProducts] = useState([]);
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'speciality', header: 'Speciality'},
    ];

    //patient list
    const [patients, setPatients] = useState({
        pat_name:'',
        age:'',
        cause:''
    });
    const columns1 = [
        {field: 'name', header: 'Name'},
        {field: 'age', header: 'Age'},
        {field: 'cause', header: 'Cause'},
    ];

    const yesterdayPatient = () => {
        axios.get('http://localhost:3001/patient/currentDay')
        .then((response) => {
            setPatients({
                name:response.data[0].name,
                age:response.data[0].age,
                cause:response.data[0].cause
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const todayPatient = () => {
        axios.get('http://localhost:3001/patient/currentDay')
        .then((response) => {
            setPatients({
                name:response.data[0].name,
                age:response.data[0].age,
                cause:response.data[0].cause
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const monthPatient = () => {
        axios.get('http://localhost:3001/patient/currentDay')
        .then((response) => {
            setPatients({
                name:response.data[0].name,
                age:response.data[0].age,
                cause:response.data[0].cause
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet([patients]); // Convert data to worksheet
        const workbook = XLSX.utils.book_new(); // Create a new workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Patients'); // Add worksheet to the workbook
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' }); // Convert workbook to array buffer
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); // Create a blob from the array buffer
        saveAs(blob, 'patients.xlsx'); 
    }
    return(
        <div>
            <div className="dashhead">
                <img src={logo} style={{width: '150px'}}></img>
                <div className="dashheadcontent">
                    <div className="leavepopup">
                        <Button icon="pi pi-calendar-minus" onClick={() => setVisible(true)} />
                        <Dialog header="Leave Application" visible={visible} onHide={() => setVisible(false)}>
                            <Calendar value={leave.dates} onChange={(e) => setLeave({...leave, dates: e.value})} selectionMode="multiple" readOnlyInput showIcon/>
                            <span className="p-float-label">
                                <InputTextarea id="reason" value={leave.reason} onChange={(e) => setLeave({...leave, reason: e.target.value})} rows={5} cols={30} style={{marginTop: '20px', width:'295px'}}/>
                                <label htmlFor="reason" style={{marginTop: '20px'}}>Reason</label>
                            </span>
                            <Button label="Apply" style={{marginLeft: '100px', marginTop: '10px'}}/>
                        </Dialog>
                    </div>
                    <ToggleButton onLabel="Logout" offLabel="Login" onIcon="pi pi-times" offIcon="pi pi-check" checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" style={{marginRight: '20px'}}/>
                    <Avatar label="Doctor" style={{ backgroundColor: '#2196F3', color: '#ffffff', width: '120px', fontSize: '23px', padding: '23px'}} />
                </div>
            </div>
            <div className="dashbody">
                <div className="dashbodyleft">
                    <FontAwesomeIcon icon={faHouse} style={{color: 'grey', marginRight: '5px'}}/><a style={{fontSize: '20px', color: 'grey'}}>Home</a><br></br><br></br>
                    <FontAwesomeIcon icon={faStethoscope} style={{color: 'grey', marginRight: '5px'}}/><Link to="/opentry" style={{fontSize: '20px', color: 'grey'}}>Out Patient</Link><br></br><br></br>
                    <FontAwesomeIcon icon={faPrescription} style={{color: 'grey', marginRight: '5px'}}/><Link to="/prescription" style={{fontSize: '20px', color: 'grey'}}>Prescription</Link><br></br><br></br>
                    <FontAwesomeIcon icon={faUser} style={{color: 'grey', marginRight: '5px'}}/><Link to="/empreg" style={{fontSize: '20px', color: 'grey'}}>Register Employee</Link><br></br><br></br>
                    <FontAwesomeIcon icon={faPenToSquare} style={{color: 'grey', marginRight: '5px'}}/><Link to="/editprof" style={{fontSize: '20px', color: 'grey'}}>Edit Employee</Link><br></br><br></br>
                </div>
                <div className="dashbodyryt">
                    <h1 style={{marginLeft:'30px'}}>Dashboard</h1>
                    <div className="dashbox">
                        <div className="box" style={{backgroundColor: '#007bff'}}>
                            <div style={{marginTop: '60px', marginLeft: '30px', fontSize: '30px'}}><FontAwesomeIcon icon={faUsers} /></div>
                            <div style={{marginLeft: '40px', fontSize: '20px'}}>
                                <p>Appointments</p>
                                <p>450</p>
                                <hr></hr>
                                <p>45% increase in...</p>
                            </div>
                        </div>
                        <div className="box" style={{backgroundColor: '#fd7e14'}}>
                            <div style={{marginTop: '60px', marginLeft: '30px', fontSize: '30px'}}><FontAwesomeIcon icon={faBed} /></div>
                            <div style={{marginLeft: '40px', fontSize: '20px'}}>
                                <p>New Patients</p>
                                <p>155</p>
                                <hr></hr>
                                <p>40% increase in...</p>
                            </div>
                        </div>
                        <div className="box" style={{backgroundColor: '#6f42c1'}}>
                            <div style={{marginTop: '60px', marginLeft: '30px', fontSize: '30px'}}><FontAwesomeIcon icon={faScissors} /></div>
                            <div style={{marginLeft: '40px', fontSize: '20px'}}>
                                <p>Operations</p>
                                <p>52</p>
                                <hr></hr>
                                <p>85% increase in...</p>
                            </div>
                        </div>
                        <div className="box" style={{backgroundColor: '#198754', marginRight:'20px'}}>
                            <div style={{marginTop: '60px', marginLeft: '30px', fontSize: '30px'}}><FontAwesomeIcon icon={faDollarSign} /></div>
                            <div style={{marginLeft: '40px', fontSize: '20px'}}>
                                <p>Hospital Earnings</p>
                                <p>13,921$</p>
                                <hr></hr>
                                <p>50% increase in...</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashryt2">
                        <div className="dashgraph">
                            <h1>Woking Hours</h1>
                            <Chart type="bar" data={chartData} options={chartOptions} />
                        </div>
                        <div className="dashdoclist">
                            <h1>Doctors</h1>
                            <DataTable value={products} >
                                {columns.map((col, i) => (
                                    <Column key={col.field} field={col.field} header={col.header} />
                                ))}
                            </DataTable>
                        </div>
                    </div>
                    <div className="dashpatlist">
                        <div className="headbutsplit">
                            <h1>Patient Details</h1>
                            <div>
                            <span className="p-buttonset" style={{paddingTop: '12px', marginRight: '5px'}}>
                                <Button label="Yesterday" onClick={ yesterdayPatient }/>
                                <Button label="Today" onClick={ todayPatient } />
                                <Button label="Last Month" onClick={ monthPatient} />
                            </span>
                            <Button icon="pi pi-file-excel" severity="success" onClick={ exportToExcel }/>
                            </div>
                        </div>
                            <DataTable value={[patients]} >
                                {columns1.map((col, i) => (
                                    <Column key={col.field} field={col.field} header={col.header} />
                                ))}
                            </DataTable>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbd;