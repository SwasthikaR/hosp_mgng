import 'primeicons/primeicons.css';


function Top() {
    return (
        <>

            <div style={{display:"flex", justifyContent:"space-between", padding:"3px", backgroundColor:"rgb(48, 100, 231)"}}>
                <div style={{ display: "flex", width: "400px", justifyContent: "space-around", color:"white" }}>
                    <div style={{ display: "flex", alignItems: "center", width: "160px", justifyContent: "space-between" }}>
                        <i className="pi pi-inbox" style={{ fontSize: '1rem' }}></i>
                        <p>info@example.com</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", width: "140px", justifyContent: "space-between" }}>
                        <i className="pi pi-phone" style={{ fontSize: '1rem' }}></i>
                        <p> +8 12 34567890</p>
                    </div>
                </div>

                <div style={{display:"flex",width:"110px", justifyContent:"space-between", marginRight:"20px"}}>
                    <i className="pi pi-facebook" style={{ fontSize: '1rem', backgroundColor:"rgb(238, 238, 238)", borderRadius:"100%", padding:"6px"}}></i>
                    <i className="pi pi-twitter" style={{ fontSize: '1rem', backgroundColor:"rgb(238, 238, 238)", borderRadius:"100%", padding:"6px"}}></i>
                    <i className="pi pi-linkedin" style={{ fontSize: '1rem', backgroundColor:"rgb(238, 238, 238)", borderRadius:"100%", padding:"6px"}}></i>
                </div>
            </div>

        </>
    )
}

export default Top;