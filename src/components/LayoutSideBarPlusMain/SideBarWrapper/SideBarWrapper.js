import React from 'react'
import classes from './SideBarWrapper.module.scss'

const SideBarWrapper = (props) => {
    return (
        <div className={classes.SideBarWrapper}>
            {props.children}
        </div>
    )
}

export default SideBarWrapper