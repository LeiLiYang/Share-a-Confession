import "../styles/style.css";
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
    return (
        <div className="ownnavbar">
            <div className="ownleftnavbar">
                <Link to="/"> <img className="navbarlogo" src={Logo} alt="Logo"></img> </Link>
            </div> 
        </div>
    )
}