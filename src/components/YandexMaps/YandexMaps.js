import React from 'react'
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classes from './YandexMaps.module.scss'







import { YMaps, Map, Placemark } from "react-yandex-maps";


const placeMark = {
  properties: {
    hintContent: 'Центр Контроля Качества',
    balloonContent: 'Центр Контроля Качества'
  },
   modules: 
  ['geoObject.addon.balloon', 'geoObject.addon.hint']
   
}

const mapData = {
  center: [45.14488361974781,39.75649365428526],
  zoom: 20
}

const coordinates = [
  // [45.14450683594781,39.75559779647429],
  // [45.14526040104086,39.75738951209625]
  [45.14504686031352,39.75618050638278]
]




const YandexMaps = () => (

  <div className={classes.block}>
    
  <YMaps>
 
    <Map defaultState={mapData} width='1200px' height='700px'>
    
      {coordinates.map((coordinate, index) => {
        return(
          <Placemark
            geometry={coordinate}
            key = {index}
            {...placeMark}
            
            />
        )
      } )}
      
    </Map>
    
  </YMaps>
  
  </div>

);


export default YandexMaps














