import React from 'react'
import BlockRow from '../Block/BlockRow/BlockRow'
import H1 from '../../H1/H1'
import Lead  from '../../Lead/Lead'
import classes from './Block.module.scss'
import PriceFullDownload from '../../PriceFullDownload/PriceFullDownload'





const Block = (props) => {
    const imgresource = props.imgresource
      return(
        
        <div className = {classes.Block}>
            <H1 titleType = {props.titleType}>{props.titleH1}</H1>
            
            <div style={{display:'flex'}}>
                <Lead leadType = 'Main'>{props.leadP}</Lead>
                
        
                
                <div className = {classes.show_hide}>
                    <PriceFullDownload />
                </div>


            </div>
            
            <BlockRow
            numberOfColumns = {props.numberOfColumns}
            BaseSevices = {props.BaseSevices}
            imgresource = {imgresource}
            />
        </div>
        
    )
}
export default Block