import "../css/prescription.css"

import r from "../images/rblue.webp"
import logo from "../images/logo.png"

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { InputMask } from 'primereact/inputmask';
import { Toast } from "primereact/toast";

import { useState, useRef } from "react";

import axios from 'axios';

function Prescription() {

    const [pres, setPres] = useState({
        patId:"",
        bp:"",
        height:"",
        weight:"",
        temp:"",
        tab:[],
        test:[],
        bmi:"",
        nxt:""
    })

    //tablets list
    const tablets = [
        { name: 'Paracetamol'},
        { name: 'Rantac'},
        { name: 'Amox'},
        { name: 'Emiset'},
        { name: 'Telma'},
        { name: 'Zintac'},
        { name: 'Gelusil'}
    ];

    const selectedTabletTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };
    const tabletOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    //tests
    const onTestChange = (e) => {
        let _test = [...pres.test];

        if (e.checked)
            _test.push(e.value);
        else
            _test.splice(_test.indexOf(e.value), 1);

        setPres({...pres, test: _test});
    }


    //for autofill
    const [auto, setAuto] = useState({
        name:"",
        age:"",
        mobNo:""
    })

    //bmi
    const [calbmi, setCalbmi] = useState(null);

    const handleOnChange = (e) => {
        const newPatId = e.value;
    
        // Update patId in the state
        setPres(prevState => ({ ...prevState, patId: newPatId }));
    
        // Perform Axios call
        axios.get(`http://localhost:3001/patient/pres/${newPatId}`)
            .then((response) => {
                console.log(response.data);
                setAuto(
                    {
                        name: response.data[0].name,
                        age:response.data[0].age,
                        mobNo:response.data[0].mob
                    }
                )
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const bmiCal = (e) => {

        const wgt = e.value;

        setPres(prevState => ({...prevState, weight: wgt}));

        let bmi = wgt/(pres.height*pres.height);

        setCalbmi(bmi);
    }

    const toast1 = useRef(null);

    const show1 = () => {
        toast1.current.show({severity: 'success', summary: 'Prescription added Successful !', detail: 'Done.' })
    }

    const show2 = () => {
        toast1.current.show({severity: 'error', summary: 'Error !', detail: 'Please fill again.' })
    }

    const handleSubmit = () =>{

        let copyPres = {...pres}

        axios.post('http://localhost:3001/prescribe/enterpres', copyPres)
        .then(() => {
            show1();
        })
        .catch(() => {
            show2();
        })

        setPres({
            patId:"",
            bp:"",
            height:"",
            weight:"",
            temp:"",
            tab:[],
            test:[],
            bmi:"",
            nxt:""
        })
    }

    return(
        <div>
            <div className= "presbk">
                <div className="presleft">
                    <div className="preshead">
                        <img src={r} style={{width: '100px', marginLeft: '15px'}}></img>
                        <p className="presp">Prescription Form</p>
                        <div style={{marginRight: '20px', marginTop: '30px'}}>
                            <img src={logo} style={{width: '80px'}}></img>
                            <p>Taylors Road, Kilpauk</p>
                            <p>Chennai, 600010</p>
                        </div>
                    </div>
                    <hr style={{width: '90%', backgroundColor: '#1e0b9b', height: '4px'}}></hr>
                    <div className="autofill">
                        <div>
                            <span className="p-float-label">
                                <InputNumber id="patId" value={pres.patId} onValueChange={handleOnChange} />
                                <label htmlFor="patId">Patient ID</label>
                            </span><br></br>
                            <span className="p-float-label">
                                <InputNumber id="name" value={auto.age}  useGrouping={false} />
                                <label htmlFor="name">Name</label>
                            </span>
                        </div>
                        <div>
                            <span className="p-float-label">
                                <InputText id="age" value={auto.name} />
                                <label htmlFor="age">Age</label>
                            </span><br></br>
                            <span className="p-float-label">
                            <InputMask value={auto.mobNo} mask="999-999-9999" placeholder="Phone No." />
                                <label htmlFor="mob">Phone No.</label>
                            </span>
                        </div>
                    </div>
                    <hr style={{width: '90%', backgroundColor: '#1e0b9b', height: '4px'}}></hr>
                    <div className="autofill">
                        <div>
                            <span className="p-float-label">
                                <InputNumber id="patId" value={pres.bp} onValueChange={(e) => setPres({...pres, bp: e.value})} useGrouping={false} />
                                <label htmlFor="patId">BP</label>
                            </span><br></br>
                            <span className="p-float-label">
                                <InputNumber id="name" value={pres.temp}  onValueChange={(e) => setPres({...pres, temp: e.value})} useGrouping={false} />
                                <label htmlFor="name">Temperature</label>
                            </span>
                        </div>
                        <div>
                            <span className="p-float-label">
                                <InputNumber id="age" value={pres.height} onValueChange={(e) => setPres({...pres, height: e.value})} useGrouping={false}/>
                                <label htmlFor="age">Height</label>
                            </span><br></br>
                            <span className="p-float-label">
                                <InputNumber id="mob" value={pres.weight}  onValueChange={ bmiCal } useGrouping={false} />
                                <label htmlFor="mob">Weight</label>
                            </span>
                        </div>
                    </div>
                    <hr style={{width: '90%', backgroundColor: '#1e0b9b', height: '4px'}}></hr>
                </div>
                <div className="presryt">
                    <div>
                        <Dropdown style={{width:'500px', margin: '30px', marginLeft: '70px'}} value={pres.tab} onChange={(e) => {
                            const selectedTablets = Array.isArray(e.value) ? e.value : [e.value];
        setPres(prevState => ({ ...prevState, tab: [...prevState.tab, selectedTablets] }));
                        }} 
                        options={tablets} optionLabel="name" placeholder="Select Tablet" 
                        filter valueTemplate={selectedTabletTemplate} itemTemplate={tabletOptionTemplate} />   
                        <ol>
                        {Array.isArray(pres.tab) && pres.tab.map((option, uni) => (
                            <div key={uni}>
                                <li>{option.name}</li>
                            </div>
                        ))}
                        </ol>
                    </div>
                    <hr style={{width: '90%', backgroundColor: '#1e0b9b', height: '4px'}}></hr>
                    <div className="prestest">
                        <p>Tests:</p>
                        <div className="flex align-items-center">
                            <Checkbox inputId="test1" name="tests" value="Blood test" onChange={onTestChange} checked={pres.test.includes('Blood Test')} />
                            <label htmlFor="test1" className="ml-2">Blood test</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="test2" name="tests" value="Blood Sugar" onChange={onTestChange} checked={pres.test.includes('Blood Sugar')} />
                            <label htmlFor="test2" className="ml-2">Blood Sugar</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="test3" name="tests" value="ECG" onChange={onTestChange} checked={pres.test.includes('ECG')} />
                            <label htmlFor="test3" className="ml-2">ECG</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="test4" name="tests" value="MRI" onChange={onTestChange} checked={pres.test.includes('MRI')} />
                            <label htmlFor="test4" className="ml-2">MRI</label>
                        </div>
                    </div>
                    <hr style={{width: '90%', backgroundColor: '#1e0b9b', height: '4px'}}></hr>
                    <div className="presbot">
                        <span className="p-float-label">
                            <Calendar id="nxt" value={pres.nxt} onChange={(e) => setPres({...pres, nxt: e.value})} showIcon/>
                            <label htmlFor="nxt">Next Visit</label>
                        </span>
                        <span className="p-float-label">
                            <InputNumber id="bmi" value={calbmi}  useGrouping={false} />
                            <label htmlFor="bmi">BMI</label>
                        </span>
                    </div>
                    <Toast ref={toast1} />
                    <Button label="Submit" style={{marginLeft: '280px', marginTop:'20px'}} onClick={ handleSubmit }/>
                </div>
            </div>
        </div>
    )
}

export default Prescription;