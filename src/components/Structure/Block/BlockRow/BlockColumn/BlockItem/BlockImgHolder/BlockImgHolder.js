import React from 'react'
import classes from './BlockImgHolder.module.scss'


const BlockImgHolder = (props) => {

    const cls = [classes.BlockImgHolder, classes[props.numberOfColumns]]
    // console.log(props.bgImg)
    return(
        
        <div
        className = {cls.join(' ')}
        style = {{
            backgroundImage: 'url('+props.bgImg+')',
            backgroundSize: 'cover'
            }}
        >
       {props.children}
        </div>
    )
}
export default BlockImgHolder