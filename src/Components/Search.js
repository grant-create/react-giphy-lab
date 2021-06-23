import { Component } from 'react'

export default class Search extends Component {
    render() {
        return(
            <div>
                <input type="text"  value={this.props.searchValue} onChange={this.props.runSearch}/>
                
            </div>
        )
    }

}