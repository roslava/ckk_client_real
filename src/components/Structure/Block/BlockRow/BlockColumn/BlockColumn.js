import React from 'react'

import classes from './BlockColumn.module.scss'

const BlockColumn = (props) => {

    const cls = [classes.BlockColumn, classes[props.numberOfColumns]]

    return(
        <div className = {cls.join(' ')}>
            {props.children}
        </div>
    )
}
export default BlockColumn