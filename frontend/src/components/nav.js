import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <>

            <div style={{display:"flex", width:"1470px", justifyContent:"space-around", padding:"20px", alignItems:"center"}}>

                <img width={"120px"} height={"35px"} src={logo} alt="logo" />

                <div style={{ display: "flex", width: "700px", justifyContent: "space-between", alignItems:"center" }}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Departments</p>
                    <Link to="login"><button style={{backgroundColor:"rgb(48, 100, 231)", padding:"10px", paddingLeft:"30px", paddingRight:"30px", borderRadius:"20px", border:"none", color:"white", boxShadow:"7px 5px 5px 0px lightblue"}}>Login</button>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default Nav;