import React from 'react'
import classes from './Row.module.scss'

const Row = (props) => {
    return(
        <div className={classes.Row}>
            {props.children}
        </div>
    )
}

export default Row