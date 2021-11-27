import React from 'react'
import classes from './H1.module.scss'

const H1 = (props) => {
    const cls = [classes.H1, classes[props.titleType]]
    return(
        <h1
        dangerouslySetInnerHTML = {{__html:props.children}}
        className = {cls.join(' ')}></h1>
    )
}

export default H1

