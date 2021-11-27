import React from 'react'
import classes from './MainWrapper.module.scss'

const MainWrapper = (props) => {
    return (
        <div className={classes.MainWrapper}>
            {props.children}
        </div>
    )
}

export default MainWrapper