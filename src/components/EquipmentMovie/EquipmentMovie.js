import React from 'react'
import Radium from 'radium'
import {NavLink} from 'react-router-dom'
import classes from './EquipmentMovie.module.scss'
import Carosel from './carousel/Carosel'








const styleFrame = {
        opacity:'1',
       
        
                ':hover':{
                opacity:'.2'

}}


const EquipmentMovie = (props) => {
        const imgresource = props.imgresource
    return(
     

        <div style={{maxWidth:'770px', margin:'0 auto', borderRadius: '5px ', overflow:'hidden'}}>
        <NavLink
        style={{textDecoration:'none', cursor:'pointer'}}
        to='/equipment'>     


                {/* Обертка слайдера */}
                <div
                className = {classes.Frame}
                style={styleFrame}>




                        {/* Заголовок */}
                        <div
                                className = {classes.Tile}
                                style={{ position:'absolute'}}>
                                <h3>Используем</h3><br/><h3>самое современное</h3><br/><h3>оборудование</h3>
                        </div>
                                
                        
                         
                                
                                



      
                                
        <Carosel imgresource = {imgresource}  />                   









             
                        
                </div>
                </NavLink>         
                </div>     
    )
}

export default Radium (EquipmentMovie)