//service.js


import ambu from "../images/ambu.png";
import inj from "../images/inj.png";
import medic from "../images/medic.png";

function Service() {
    return (
        <>

            <div style={{ textAlign: "center", width: "700px", margin: "50px", marginLeft: "450px" , marginBottom:"70px"}}>
                <p style={{ margin: "10px" }}>OUR SERVICES</p>
                <h1 style={{ margin: "10px" }}>Our Special Service For You</h1>
                <p style={{ margin: "10px" }}>Nulla doloribus consequatur rerum saepe illum, fugit sapiente delectus amet libero, aliquid tenetur. Voluptatum. onsequatur rerum saepe illum, fugit sapient</p>
            </div>

            <div style={{display:"flex", width:"1050px", justifyContent:"space-between", marginLeft:"250px", marginBottom:"70px"}}>
                <div style={{textAlign:"center", width:"300px"}}>
                    <img style={{borderRadius:"100%", padding:"10px", boxShadow:"1px 2px 5px 1px gray"}} src={ambu } alt="ambu" width={"50px"} />
                    <h5 style={{marginTop:"10px"}}>Medication Service</h5>
                    <p style={{marginTop:"10px"}}>illum, fugit sapiente delectus amet libero, aliquid tenetur. Voluptatum</p>
                </div>
                <div style={{textAlign:"center", width:"300px"}}>
                    <img style={{borderRadius:"100%", padding:"10px", boxShadow:"1px 2px 5px 1px gray"}} src={ medic} alt="medic" width={"50px"} />
                    <h5 style={{marginTop:"10px"}}>24hr Health Program</h5>
                    <p style={{marginTop:"10px"}}>illum, fugit sapiente delectus amet libero, aliquid tenetur. Voluptatum</p>
                </div>
                <div style={{textAlign:"center", width:"300px"}}>
                    <img style={{borderRadius:"100%", padding:"10px", boxShadow:"1px 2px 5px 1px gray"}} src={inj } alt="inj" width={"50px"} />
                    <h5 style={{marginTop:"10px"}}>Online Emergency</h5>
                    <p style={{marginTop:"10px"}}>illum, fugit sapiente delectus amet libero, aliquid tenetur. Voluptatum</p>
                </div>
            </div>

        </>
    )
}

export default Service;