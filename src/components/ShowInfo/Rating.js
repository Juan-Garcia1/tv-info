import React from 'react'

const Rating = ({rating}) => (
    <div>          
        <p className='show-rating'>
        { rating && rating.average }
        <span style={{color:'gray', fontSize:'15px'}}><small>/10</small></span>
        </p>
        <span style={{color: 'gray', fontSize:'14px'}}>Rating</span>
    </div>
)

export default Rating