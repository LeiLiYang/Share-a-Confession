import React from "react";
import "../styles/style.css";
import Navbar from "./navbar.jsx";
import Confession from "./confession.jsx";
import {Link} from "react-router-dom";

export default function Home({confessions}) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="ownhead">
                CONFESS ANONYMOUSLY
                <div className="confessbutton">
                    <Link to="/writeconfession">Confess</Link>
                </div>
            </div>
            <div className="confession-board">
                <div className="confession-list">
                    <Confession confessions = {confessions}></Confession>
                </div>
                
            </div>
            <div className="ownhead">
                <div className="confessbutton">
                    <Link to="/writeconfession">Confess</Link>
                </div>
            </div>
            <br></br>
        </div>
    );
}