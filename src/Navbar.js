import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="nav-link">
                    <Link to ="/Character" >characters</Link>
                </div>
                <div className="nav-link">
                    <Link to ="/Location" >location</Link>
                </div>
                <div className="nav-link">
                    <Link to ="/Episode" >episodes</Link>
                </div>
            </div>
        ) 
    }
}

export default Navbar