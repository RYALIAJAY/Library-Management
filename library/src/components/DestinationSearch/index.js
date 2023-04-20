// Write your code here
import './index.css'

import { Component } from 'react'

import DestinationItem from '../DestinationItem'

// const DestinationSearch = props => {

class DestinationSearch extends Component {
    state = { searchInput: '' }

    onChangeSearchInput = event => {
        this.setState({ searchInput: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const { destinationsList } = this.props
        const { searchInput } = this.state

        const searchResults = destinationsList.filter(eachDestination =>
            eachDestination.date.toLowerCase().includes(searchInput.toLowerCase()) ||
            eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()) || eachDestination.subject.toLowerCase().includes(searchInput.toLowerCase()),
        )

        return ( <
            div className = "destinationSearch-bg-container" >
            <
            h1 className = "destinationSearch-heading" > Library Management < /h1> <
            div className = "searchInputElement-container" >
            <
            input type = "search"
            placeholder = "Search Using Title or Subject or Year"
            className = "searchInputElement"
            onChange = { this.onChangeSearchInput }
            value = { searchInput }
            /> <
            img src = "https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt = "search icon"
            className = "search-icon-img" /
            >
            <
            /div> <
            ul className = "places-container" > {
                searchResults.map(eachDestination => ( <
                    DestinationItem key = { eachDestination.id }
                    imgUrl = { eachDestination.imgUrl }
                    name = { eachDestination.name }
                    subject = { eachDestination.subject }
                    date = { eachDestination.date }
                    />
                ))
            } <
            /ul> < /
            div >
        )
    }
}
// }

export default DestinationSearch