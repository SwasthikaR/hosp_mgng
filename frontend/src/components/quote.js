//quote.js

import "../css/quote.css";

import smile from "../images/smilyy.png";

import { Link } from 'react-router-dom';

function Quote() {
    return (
        <>

            <div className="body">

                <div>
                    <h1 style={{ width: "500px", fontSize: "50px" }}>Get Better Care For Your Health</h1>
                    <p style={{ width: "450px", marginTop:"20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus aspernatur aperiam eius quidem commodi </p>
                    <Link to="bkapp"><button style={{ backgroundColor: "rgb(48, 100, 231)", padding: "10px", paddingLeft: "30px", paddingRight: "30px", borderRadius: "20px", border: "none", color: "white", boxShadow: "7px 5px 5px 0px lightblue", marginTop:"20px" }}>Book Appointment <i className="pi pi-angle-right" style={{ fontSize: '1rem', backgroundColor: "rgb(238, 238, 238, 0.5)", borderRadius: "100%", padding: "1px", marginRight:"-15px", marginLeft:"10px"}}></i></button>
                    </Link>
                </div>

                <div style={{marginTop:"-50px"}}>
                    <img width={"450px"} src={smile} alt="smile" />
                </div>

            </div>


        </>
    )
}

export default Quote;



