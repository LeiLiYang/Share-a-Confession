import "../styles/style.css";
import Navbar from "./navbar.jsx";
import {Component} from "react";
import axios from "axios";


export default class WriteConfession extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeConfession = this.onChangeConfession.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: "",
            confession: "",
            anonymous: true,
        }
    }
    onSubmit(event) {
        event.preventDefault();
        const confession = {
            title: this.state.title,
            confession: this.state.confession,
            anonymous: true,
            date: this.date ////VERIFY IF THIS IS CORRECT
            
        }
        axios.post("http://localhost:5000/confess/", confession)
            .then(res => console.log(res.data));
        
        window.location="/";
    }

    onChangeTitle (event) {
        this.setState({
            title: event.target.value
        })
    }
    
    onChangeConfession (event) {
        this.setState({
            confession: event.target.value
        })
    }

    render() {
        return(
        <div>
            <Navbar></Navbar>
            <div className="ownhead">
                CONFESS AWAY!
            </div>

            <div className="writeconfession">
                <form onSubmit={this.onSubmit}>
                    <label for="title">
                        Title:
                    </label>
                    <input value={this.state.title} onChange={this.onChangeTitle} type="text" id="title" name="title" maxLength="30"></input>
                    
                    <label for="confession">
                        Confession:
                    </label>
                    <br></br>
                    <textarea value={this.state.confession} onChange={this.onChangeConfession} id="confession" name="confession" rows="5" maxLength="300"></textarea>
                    <br></br><br></br>
                    <div className="ownsubmission">
                        <input type="submit" value="Post Confession"></input>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}