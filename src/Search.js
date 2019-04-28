import React from "react"


class Search extends React.Component{
    render(){
        return(
            <div className="center">
                <input className="searchbar" type="text" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.func}/>
            </div>        
        )
    }
}

export default Search