import React from "react"

class CharacterTile extends React.Component{
    render(){
        return(
            <div className="tile center">
                <img src={this.props.image} alt="An of rick and morty"></img>
                <h3>Name:{this.props.name}</h3>
                <h3>Gender:{this.props.gender}</h3>
                <h3>Species:{this.props.species}</h3>
                <h3>Status:{this.props.status}</h3>
            </div>
            
        )
    }
}

export default CharacterTile