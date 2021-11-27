import React from 'react'
import classes from './Announcement.module.scss'
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';
import Slide1 from './assets/sl1.jpg'
import Slide2 from './assets/sl2.jpg'


const Announcement = () =>{
    return(
<div className = {classes.Announcement}>
    {/* В слайдер или анонс: */}
        <div className = {classes.Holder}>
          


        <Carousel axis="vertical" transitionTime={700} interval={4000} showThumbs={false} showIndicators={false}  autoPlay infiniteLoop showArrows={false} showStatus={false}>
                <div>
                    <img src={Slide1} alt={''}/>
                    
                </div>
                <div>
                    <img src={Slide2} alt={''}/>
                    
                </div>
             
            </Carousel>




          </div>
</div>
    )
}
export default Announcement