import React from "react"

class LocationTile extends React.Component{
    render(){
        return(
            <div className="tile center">
                <h3>Name:{this.props.name}</h3>
                <h3>Type:{this.props.type}</h3>
                <h3>Dimension:{this.props.dimension}</h3>
            </div>
        )
    }
}

export default LocationTile