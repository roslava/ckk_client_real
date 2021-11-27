import React from 'react'
import Radium from 'radium'
import classes from './BlockItem.module.scss'


const style = {
    border: '1px #e6e6e6 solid',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px 1px rgba(230,230,230,1)',
    background: '#ffffff',
    ':hover': {
        border: '1px #e6e6e6 solid',
        boxShadow: '10px 10px 17px -11px rgba(24, 106, 165, .5)',
        transition: 'background .3s ease-in-out',
        background: 'linear-gradient(45deg, rgba(223, 242, 241, .7), rgba(177, 223, 219, 0)',
        // backgroundColor: 'rgba(223, 242, 241, .3)'
    }
}



const BlockItem = (props) => {
    const cls = [classes.BlockItem, classes[props.numberOfColumns]]
        return(
            <div
            className = {cls.join(' ')}
            style = {style}
            
            >
                {props.children}
            </div>
        )
    }
export default Radium (BlockItem)