import { Component } from 'react'
import SearchContainer from './Components/SearchContainer'

export default class Home extends Component {


    render() {
        return(
            <main>
                <section className='jumbotron text-center'>
                    <div className='container'>
                        <h1 className='jumbotron-heading'>Gify Search</h1>
                        
                    </div>
                </section>
                <section className='container'>
                    <SearchContainer/>
                </section>
            </main>
        )
    }

}