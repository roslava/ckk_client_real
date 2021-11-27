import React from 'react'
import classes from './EquipmentBlock.module.scss'
import H1 from '../H1/H1'
import Lead from '../Lead/Lead'


const EquipmentBlock = (props)=> {

    const equipmentBase = props.equipmentBase
    const imgresource = props.imgresource

    return(
<div className = {classes.EquipmentBlock}>
    {equipmentBase.map((item, index) => {
        return(
            <div
            className = {classes.EquipmentItem}
            key={index}
            >
                <div className = {classes.EquipmentImgHolder}>
                        <img src={imgresource+item.img} alt="item.title"/>
                </div>
                <H1 titleType='Equipment'>{item.title}</H1>
                <Lead leadType = 'Equipment'>{item.lead}</Lead>
            </div>
        )
    })}
</div>
        
    )
}

export default EquipmentBlock
