import React from 'react'
import {NavLink} from 'react-router-dom'










import Radium from 'radium'


import classes from './EquipmentInHomePage.module.scss'


const EquipmentInHomePage = (props) => {

    const EquipmentBase = props.EquipmentBase



    const style = {
        color: '#737a86',
        border: '1px #313a45 solid',
        boxShadow: '10px 10px 17px 11px #2b323c',
        background: '#313a45',
        ':hover': {
            color: '#21c4c3',
            border: '1px #21c4c3 solid',
            boxShadow: '10px 10px 17px -11px rgba(24, 106, 165, .8)',
            transition: 'border .3s ease-in-out',
            background: '#313a45',
            // backgroundColor: 'rgba(223, 242, 241, .3)'
        }
    }




    return(
<React.Fragment>
        <div className = {classes.EquipmentInHomePage}>
            {EquipmentBase.map((item, index)=>{
                return(
                    <NavLink
                    to='/equipment'
                    key = {index}
                    >
                        <div
                        className = {classes.EquipmentBlock}
                        style = {style}
                        key={index+'R'}
                        >
                        <div
                        className = {classes.ImgHolder}
                        
                        >
                        <img src={item.img} alt=""/>
                        </div>
                        {item.title}
                         
                         
                        
                    </div>
                    </NavLink>  
                )
            })}
        </div>
        </React.Fragment>
    )
}

export default Radium (EquipmentInHomePage) 