import React from "react"
import Navbar from "./Navbar"
import { BrowserRouter, Route } from "react-router-dom"
import Character from "./Character";
import Episode from "./Episode";
import Location from "./Location";



class App extends React.Component{
    constructor(){
        super()
        this.state={
            IsLoading:false,
            data:[]
        }
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                <Navbar />
                <Route path="/Character" component={Character} />
                <Route path="/Location" component={Location} />
                <Route path="/Episode" component={Episode} />
                </BrowserRouter>
            </div>
        )
    }

}

export default App