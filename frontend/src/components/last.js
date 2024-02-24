import "../css/last.css";
import logo from "../images/logo.png";

function Last() {
    return (
        <>

            <div id="body" style={{}}>

                <div style={{ paddingTop: "200px", display:"flex", justifyContent:"space-evenly", width:"1500px" }}>
                    <div style={{ width: "200px" }}>
                        <img src={logo} width="130px" />
                        <p style={{ marginTop: "20px" }}>illum, fugit sapiente delectus amet libero, aliquid tenetur. Voluptatum</p>
                        <div style={{ display: "flex", width: "110px", justifyContent: "space-between", marginRight: "20px", color: "rgb(48, 100, 231)", marginTop: "20px" }}>
                            <i className="pi pi-facebook" style={{ fontSize: '1rem', backgroundColor: "rgb(238, 238, 238)", borderRadius: "100%", padding: "6px" }}></i>
                            <i className="pi pi-twitter" style={{ fontSize: '1rem', backgroundColor: "rgb(238, 238, 238)", borderRadius: "100%", padding: "6px" }}></i>
                            <i className="pi pi-linkedin" style={{ fontSize: '1rem', backgroundColor: "rgb(238, 238, 238)", borderRadius: "100%", padding: "6px" }}></i>
                        </div>
                    </div>

                    <div>
                        <h3>Our Links</h3>
                        <hr style={{ width: "30%", marginTop: "20px" }} />
                        <p style={{ marginTop: "20px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Partners</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>About Us</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Career</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Reviews</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Teams & Condition</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Help</p>
                    </div>

                    <div>
                        <h3>Other Links</h3>
                        <hr style={{ width: "30%", marginTop: "20px" }} />
                        <p style={{ marginTop: "20px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Home</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>About Us</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Services</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Project</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Our Team</p>
                        <p style={{ marginTop: "10px" }}><i className="pi pi-angle-right" style={{ fontSize: '1rem', padding: "1px", marginRight: "10px" }}></i>Latest Blog</p>
                    </div>

                    <div>
                        <h3>Contact Us</h3>
                        <hr style={{ width: "30%", marginTop: "20px" }} />
                        <p style={{ marginTop: "20px" }}><i className="pi pi-phone" style={{ fontSize: '1rem', backgroundColor: "rgb(48, 100, 231)", borderRadius: "100%", padding: "6px", color: "white", marginRight: "10px" }}></i>1800-121-3456</p>
                        <p style={{ marginTop: "20px" }}><i className="pi pi-inbox" style={{ fontSize: '1rem', backgroundColor: "rgb(48, 100, 231)", borderRadius: "100%", padding: "6px", color: "white", marginRight: "10px" }}></i>info@example.com</p>
                        <p style={{ marginTop: "20px" }}><i className="pi pi-map-marker" style={{ fontSize: '1rem', backgroundColor: "rgb(48, 100, 231)", borderRadius: "100%", padding: "6px", color: "white", marginRight: "10px" }}></i>380 Melbourne, Autralia</p>


                    </div>
                </div>

            </div>


        </>
    )
}

export default Last;




