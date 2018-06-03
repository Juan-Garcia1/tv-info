import React, { Component } from 'react'
import './Home.css'
import Thumbnail from './../Thumbnail'

import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = { 
            shows: []
         }    
    }
     componentDidMount() {
         fetch('https://api.tvmaze.com/shows')
         .then(resp => resp.json())
         .then(shows => {
            this.setState({shows})
         })
     }

    render() {
        const { shows } = this.state
        const topShows = shows.filter(show => show.rating.average >= 7)
        .map(show => <Link to={`/show-info/${show.id}`} key={show.id}><Thumbnail flex={1} margin={'0 15px 10px'} imgUrl={show.image.medium}/></Link>)
        .slice(0,20)
        return (
          <section id='home'>
              <h3 style={{marginLeft: '46px'}}>Top {topShows.length} Tv Shows</h3>
               
                <div id='tvList'>
                    {topShows}
                </div>
          </section>  
        )
    }
}

export default Home