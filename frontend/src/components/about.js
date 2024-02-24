import "../css/about.css";
import twoDoc from "../images/twoDoc.png";

function About() {
    return (
        <>

            <div id="body">
                <img style={{}} src={twoDoc} alt="two" width={"600px"} />
                <div style={{ marginLeft: "100px" }}>
                    <p>ABOUT US</p>
                    <h1 style={{ marginTop: "10px" }}>We Are Specialize in Medical Diagnostics</h1>
                    <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus aspernatur aperiam eius quidem commodi consectetur nihil reiciendis inventore earum distinctio repellendus veritatis beatae obcaecati excepturi, tempore molestias consequuntur exercitationem eligendi temporibus consequatur dolorum</p>
                    <div>
                        <p style={{marginTop:"20px"}}><i className="pi pi-angle-right" style={{ fontSize: '1rem', backgroundColor: "rgb(210, 210, 210)", borderRadius: "100%", padding: "5px", marginRight: "10px" }}></i>Aperiam eius quidem</p>
                        <p style={{marginTop:"10px"}}><i className="pi pi-angle-right" style={{ fontSize: '1rem', backgroundColor: "rgb(210, 210, 210)", borderRadius: "100%", padding: "5px", marginRight: "10px" }}></i>Quidem commodi consectetur nihil reiciendis</p>
                        <p style={{marginTop:"10px"}}><i className="pi pi-angle-right" style={{ fontSize: '1rem', backgroundColor: "rgb(210, 210, 210)", borderRadius: "100%", padding: "5px", marginRight: "10px" }}></i>Inventore earum distinctio repellendus</p>

                        <button style={{ backgroundColor: "rgb(48, 100, 231)", padding: "10px", paddingLeft: "30px", paddingRight: "30px", borderRadius: "20px", border: "none", color: "white", boxShadow: "7px 5px 5px 0px lightblue", marginTop:"20px" }}>Read More<i className="pi pi-angle-right" style={{ fontSize: '1rem', backgroundColor: "rgb(238, 238, 238, 0.5)", borderRadius: "100%", padding: "1px", marginRight:"-15px", marginLeft:"10px"}}></i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;



