import React from 'react'
import classes from './FeedbackArea.module.scss'
import BgPattern from './img/FeebackArea_bg.png'

const FeedbackArea = (props) => {
    const imgresource = props.imgresource
    const bgImg1 = props.bgImg
    const bgImg1_path = imgresource+bgImg1
    const bgImg2 = BgPattern
    
    return (
        <div
        style={{
            background:
            `url(${bgImg2}) ,
             url(${bgImg1_path}) no-repeat fixed`,
            backgroundSize: '400px, cover' /* Меняем масштаб */,
            backgroundBlendMode:'multiply, normal'
        }}
        className={classes.FeedbackArea}>
            
              {props.children}
            
        </div>
    )
}

export default FeedbackArea





// background: url(/example/image/animate-bg3.png) 90% 90% no-repeat fixed, 
//                 url(/example/image/animate-bg2.png) 40% 40% no-repeat fixed, 
//                 url(/example/image/animate-bg1.jpg) no-repeat fixed;
//     background-size: auto, auto, cover; /* Меняем масштаб */