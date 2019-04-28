import React from "react"
import CharacterTile from "./CharacterTile"
import Search from "./Search";


class Character extends React.Component {
    constructor() {
        super()
        this.state = {
            IsLoading: true,
            data: []
        }
        this.HandleChange = this.HandleChange.bind(this)
    }
    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((res) => res.json())
            .then(
                (Data) => {
                    this.setState(() => {
                        return (
                            {
                                IsLoading: false,
                                data: Data.results,
                                SearchValue: ""
                            }
                        )
                    })
                })
    }

    HandleChange(e){
        console.log(e.target.value)
        this.setState({ [e.target.name]:e.target.value})

        this.setState(()=>{
            return(
        {IsLoading:true,
        })})

        fetch("https://rickandmortyapi.com/api/character/?name="+e.target.value)
        .then((res)=>res.json())
        .then((Data)=>{
            this.setState(()=>
            {
                return(
                    {
                        IsLoading:false,
                        data:Data.results
                    }
                )
            }
        )
        
    })
    }
    render() {
        let load
        if (!this.state.IsLoading&& this.state.data!=null) {
            const Arr = this.state.data.map((element) => {
                return (

                    <CharacterTile
                        key={element.id}
                        image={element.image}
                        name={element.name}
                        gender={element.gender}
                        species={element.species}
                        status={element.status}
                    />
                )
            })
            load = Arr
        }
        else
            load = <div className="loader"></div>
        console.log(this.state.data)
        console.log(this.state.SearchValue)
        return (
            <div>
                <Search placeholder="Enter any Character Name" value={this.state.SearchValue} func={this.HandleChange} name="SearchValue"/>
                <div className="CharacterTile">
                    {load}
                </div>
            </div>
        )
    }
}

export default Character