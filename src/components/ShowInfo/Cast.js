import React from 'react'
import Thumbnail from '../Thumbnail'

const Cast = ({casts}) => (
    <div id='cast'>
        {
            casts.map(cast => <Thumbnail 
                key={cast.person.id}
                imgUrl={cast.person.image && cast.person.image.medium}
                title={cast.person.name}
                margin={'0 18px 0 0'} />)
        }
    </div>
)

export default Cast