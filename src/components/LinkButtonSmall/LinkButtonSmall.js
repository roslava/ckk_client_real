import React from 'react'
import Radium from 'radium'
import classes from './LinkButtonSmall.module.scss'
import { IconContext } from "react-icons"
import { FaAngleDoubleRight } from "react-icons/fa";


const styleNavLinkWrapper = {
        background: '#ffffff',
        border: '1px solid #e9f5f4',
            ':hover': {
                background: 'rgba(194, 240, 234, 1)',
                border: '1px solid rgba(181, 235, 227, 1)',
                transition: 'background .3s ease-in-out',
            }
}


const LinkButtonSmall = (props) => {
    return(
        <div
        className = {classes.LinkButtonSmall}
        style = {styleNavLinkWrapper}
        
        >
           <span
                style={{
                    marginRight:'1px',
                    marginTop:'-1px',
                }}>
                    {props.children}
            </span>
            <span
            style={{
                // marginRight:'1px',
                marginTop:'-2px',
            }}
            >
            <IconContext.Provider
                value={{
                    color: "rgba(24, 165, 153, 1)",
                    size: '13px'
                    }}>
                <FaAngleDoubleRight/> 
            </IconContext.Provider>
            </span>
        </div>
    )
}

export default Radium (LinkButtonSmall)