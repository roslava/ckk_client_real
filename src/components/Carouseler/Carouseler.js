import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';
import slide1 from './img/s_img_01.jpg'
import slide2 from './img/s_img_02.jpg'
import slide3 from './img/s_img_03.jpg'

export default class Carouseler extends React.Component{
    render(){
        return(
            <Carousel transitionTime={700} interval={5000} showThumbs={false}  autoPlay infiniteLoop showArrows={true} showStatus={false}>
                <div>
                    <img src={slide1} alt={''}/>
                    
                </div>
                <div>
                    <img src={slide2} alt={''}/>
                    
                </div>
                <div>
                    <img src={slide3} alt={''}/>
                    
                </div>
            </Carousel>
        )
    }
}