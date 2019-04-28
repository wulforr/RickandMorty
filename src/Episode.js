import React from "react"
import Search from "./Search"
import EpisodeTile from "./EpisodeTile"

class Episode extends React.Component {
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
        fetch("https://rickandmortyapi.com/api/episode/")
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

        fetch("https://rickandmortyapi.com/api/episode/?episode=" + e.target.value)
            .then((res) => res.json())
            .then((Data) => {
                console.log(Data)
                this.setState(() => {
                    return (
                        {
                            IsLoading: false,
                            data: Data.results.slice(0, 20)
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
               const chara = element.characters.map((el) => {
                        return(fetch(el)
                        .then((res) => res.json())
                        .then((Data) => {
                            return (Data.name)
                        }
                        )
                        )
                })
                return (

                    <EpisodeTile
                        key={element.id}
                        name={element.name}
                        Air_Date={element.air_date}
                        episode={element.episode}
                        characters={chara}
                    />
                )
            })
            load = Arr
        }
        else
            load = "hello"
        return (
            <div>
                <Search placeholder="Enter any Episode Number" value={this.state.SearchValue} func={this.HandleChange} name="SearchValue" />
                <div className="LocationTile">
                    {load}
                </div>
            </div>
        )
    }
}

export default Episode