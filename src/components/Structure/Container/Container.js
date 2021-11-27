import React from 'react'
import classes from './Container.module.scss'

const Container = (props) => {
    const cls = [classes.Container, classes[props.padding]]
    return(
        <div className = {cls.join(' ')}>
        
        {props.children}
        </div>
    )
}
export default Container