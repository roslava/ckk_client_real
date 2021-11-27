import React from 'react'
import Radium from 'radium'
import classes from './ServiceItemPrev.module.scss'
import {withRouter, NavLink} from 'react-router-dom'
import { IconContext } from "react-icons"
import { FaAngleDoubleRight } from "react-icons/fa";


const style = {
    width: '30%',
    marginBottom: '30px',
    border: '1px rgba(183, 224, 250, 1) solid',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '10px 10px 17px -11px rgba(183, 224, 250, 1)',
    background: 'rgba(223, 242, 241, 0)',
    ':hover': {
        border: '1px rgba(125, 202, 196, 1) solid',
        boxShadow: '10px 10px 17px -11px rgba(24, 106, 165, .5)',
        transition: 'border .3s ease-in-out',
        background: 'linear-gradient(45deg, rgba(223, 242, 241, .4), rgba(177, 223, 219, 0)',
        // backgroundColor: 'rgba(223, 242, 241, .3)'
    }
}

const styleNavLinkWrapper = {
    background: 'rgba(223, 242, 241, 0)',
        width:'110px',
        borderRadius: '3px',
        paddingLeft:'6px',
        marginLeft: '-7px',
        marginTop:'8px',
            ':hover': {
                background: 'rgba(223, 242, 241, 1)'
            }
}










const ServiceItemPrev = (props) => {
    const ServisesBase = props.ServisesBase

    return(
        <React.Fragment>
            {ServisesBase.map((item, index) => {
    
            return(
                
                <div
                    key = {index}
                    className={classes.ServiceItemPrev}
                    style = {style}
                >
                     <div className={classes.ImgHolder}>
                        <img src={item.img[0]} alt=""/>
                     </div>
                    <div className = {classes.TextHolder}>
                    <h1>{item.title}</h1>
                    <p>
                    {item.lead}
                    {/* {console.log(item.lead.toString())} */}
                    </p>
                    <div
                    key = {index+'NavLinkWrapper'}
                    style={styleNavLinkWrapper}
                    >
                    <NavLink
                    style={{color:'rgba(24, 165, 153, 0)'}}
                    className={classes.link}
                    to={{
                        pathname: item.id,
                        index: index,
                        title: item.title,
                        lead: item.lead,
                        img: item.img,
                        text: item.text
                        }}
                    >
                    <div className={classes.link}>
                         <span style={{marginRight:'1px'}}>{item.linkName}</span>
                          <IconContext.Provider value={{ color: "rgba(24, 165, 153, 1)", className: "global-class-name", size: '13px'}}>
                          <FaAngleDoubleRight/> 
                          </IconContext.Provider>
                    </div> 
                    </NavLink>
                    </div>
                    


     





                    </div>
               
            </div>
            )
        })
}

        </React.Fragment>
    )
}

export default withRouter (Radium (ServiceItemPrev))