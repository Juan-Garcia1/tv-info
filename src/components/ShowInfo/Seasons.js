import React from 'react'
import Thumnail from '../Thumbnail';

import { text_truncate } from '../../helperFunctions'

const Seasons = ({ seasons }) => (
    <div id="seasons">
        {
            seasons.map(season => season && season.image === null ? '' :
            !season.image ? 'loading' :
            <Thumnail 
            key={season.id}
            imgUrl={season.image && season.image.medium}
            summary={season.summary && text_truncate(season.summary, 200)}
            display={'flex'}
            margin={'0 10px 15px 0'}
            marginText={'0 auto auto'}
            title={`Season ${season.number}`}
            width={'100px'}
            height={'100%'}
            /> )
        }
    </div>
)

export default Seasons