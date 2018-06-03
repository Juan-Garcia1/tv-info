import React, { Component } from 'react'
import './ShowInfo.css'
import Thumbnail from './../Thumbnail'

import Rating from './Rating'
import Cast from './Cast'
import Seasons from './Seasons'

import { createMarkup } from '../../helperFunctions'

class ShowInfo extends Component {
    constructor(){
        super()

        this.state = { 
            show: {},
            casts: [],
            seasons: [],
            loading: true
         }
    }
     fetchShowInfo(id) {
         fetch(`https://api.tvmaze.com/shows/${id}`)
         .then(resp => resp.json())
         .then(showInfo => {
             this.setState({ show: showInfo, loading: false })
         })
     }
     fetchCast(id) {
        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(resp => resp.json())
        .then(casts => {
            this.setState({ casts })
        })
     }
     fetchSeasons(id) {
         fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
         .then(resp => resp.json())
         .then(seasons => {
             this.setState({ seasons })
         })
     }

     componentDidMount() {
         const showId = this.props.match.params.id
         this.fetchShowInfo(showId)
         this.fetchCast(showId)
         this.fetchSeasons(showId)
     }
     componentWillReceiveProps(nextProps) {
         if(this.props.location.pathname !== nextProps.location.pathname) {
             const newShowId = nextProps.match.params.id
             this.fetchShowInfo(newShowId)
             this.fetchCast(newShowId)
             this.fetchSeasons(newShowId)
         }
     }

    render() {
        const { show: { name, genres, image, premiered, rating, network, summary }, casts, seasons, loading } = this.state
        return (
            <section>
                <div className="show">

                 
                    <div className="center">
                    
                    {!image ? 'loading' :  <Thumbnail imgUrl={image.medium} title={name} boxShadow={'0 0 30px 0px gray'} textAlign={'center'}/> }
                    
                    { genres &&
                    <div className="show-genre">
                        <p >Genres</p>
                        {
                            
                            genres.map(genre => <span key={genre} className="border">{genre}</span> )
                        }
                    </div>
                    }
                    { premiered &&
                    <div className="show-premire">
                        <p >Premired</p>
                        <span>{ premiered}</span>
                    </div>
                    }
                    { network &&
                    <div className="show-network">
                        <p >Network</p>
                        <span className="border">
                        {network.name}
                        </span>
                    </div>
                    }
                    </div>
                    
                </div>
                { loading ? 'loading...' : 
                <div className="show-details">
                    <Rating rating={rating}/>
                    <br/>
                    <p><b>Summary</b></p>
                    <div dangerouslySetInnerHTML={createMarkup(summary)}/>
                    <br/>
                    <p><b>Cast</b></p>
                    <Cast casts={casts}/>
                    <br/>
                    <p><b>Seasons</b></p>
                    <Seasons seasons={seasons} />
                </div>
                }
            </section>
        )
    }
}

export default ShowInfo