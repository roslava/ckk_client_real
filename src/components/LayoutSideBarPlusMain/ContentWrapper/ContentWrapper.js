import React from 'react'
import classes from './ContentWrapper.module.scss'

const ContentWrapper = (props) => {
    return (
        <div className={classes.ContentWrapper}>
            {props.children}
        </div>
    )
}

export default ContentWrapper