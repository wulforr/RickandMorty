import React from "react"

class LocationTile extends React.Component{
    render(){
        return(
            <div className="tile center">
                <h3>Name:{this.props.name}</h3>
                <h3>Air-Date:{this.props.Air_Date}</h3>
                <h3>Episode:{this.props.episode}</h3>
                <h3>Characters:{this.props.characters.forEach(element => {
                    return(
                        <h3>{element}</h3>
                    )
                    
                })}</h3>
            </div>
            
        )
    }
}

export default LocationTile