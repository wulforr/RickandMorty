import React from "react"
import Search from "./Search"
import LocationTile from "./LocationTile"

class Location extends React.Component {
    constructor() {
        super()
        this.state = {
            IsLoading: false,
            data: [],
            SearchValue: ""
        }
        this.HandleChange = this.HandleChange.bind(this)
    }
    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/location/")
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

    HandleChange(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })

        this.setState(() => {
            return (
                {
                    IsLoading: true,
                })
        })

        fetch("https://rickandmortyapi.com/api/location/?name=" + e.target.value)
            .then((res) => res.json())
            .then((Data) => {
                console.log(Data)
                this.setState(() => {
                    return (
                        {
                            IsLoading: false,
                            data: Data.results
                        }
                    )
                }
                )
                console.log(this.state.data)

            })
    }

    render() {
        let load
        if (!this.state.IsLoading && this.state.data != null) {
            const Arr = this.state.data.map((element) => {
                return (

                    <LocationTile
                        key={element.id}
                        //image={element.image}
                        name={element.name}
                        type={element.type}
                        dimension={element.dimension}
                        //status={element.status}
                    />
                )
            })
            load = Arr
        }
        else
            load = "hello"
        return (
            <div>
                <Search placeholder="Enter any Location Name" value={this.state.SearchValue} func={this.HandleChange} name ="SearchValue"/>
                <div className="LocationTile">
                    {load}
                </div>
            </div>
        )
    }
}

export default Location 