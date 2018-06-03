import React from 'react'
import { createMarkup } from '.././helperFunctions'


const Thumnail = ({
    imgUrl,
    title,
    summary, 
    boxShadow, 
    flex, 
    margin, 
    display, 
    marginText, 
    textAlign,
    width,
    height
}) => (
    <figure className='thumbnail' style={{flex, margin, display}}>
        <img src={imgUrl} style={{boxShadow, margin, width, height}} alt={imgUrl}/>
        {
            title &&
            <figcaption>
                <p style={{margin: marginText, textAlign}} ><b>{title}</b></p>
                {summary &&
                    <div dangerouslySetInnerHTML={createMarkup(summary)}/>
                }
            </figcaption>
        }
    </figure>   
)

Thumnail.defaultProps = {
    imgUrl: 'image',
    title: '',
    boxShadow: '',
    summary: '',
    flex: '',
    margin: '',
    display: '',
    marginText: '',
    textAlign: '',
    width: '',
    height: ''    
}

export default Thumnail