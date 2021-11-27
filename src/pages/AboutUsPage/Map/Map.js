import React from 'react'
import classes from './Map.module.scss'
import map from './assets/SVG/map.svg'
import Radium from 'radium'
import UndertitleAbout from '../UndertitleAbout/UndertitleAbout'



import elevator from './assets/SVG/icons/elevator.svg'
import melnica from './assets/SVG/icons/melnica.svg'
import muka from './assets/SVG/icons/muka.svg'
import pekarnya from './assets/SVG/icons/pekarnya.svg'
import tractor from './assets/SVG/icons/tractor.svg'
import mtf from './assets/SVG/icons/mtf.svg'
import stf from './assets/SVG/icons/stf.svg'
import soi from './assets/SVG/icons/soi.svg'
import milk from './assets/SVG/icons/milk.svg'
import mit from './assets/SVG/icons/mit.svg'
import sugar from './assets/SVG/icons/sugar.svg'




const icons = [
    { title:'Элеватор', src: elevator },
    { title:'Комбикормовый цех', src: melnica },
    { title:'Мельница', src: muka },
    { title:'Пекарня', src: pekarnya },
    { title:'Автотракторный парк', src: tractor },
    { title:'МТФ (молочно-товарная ферма)', src: mtf },
    { title:'СТФ свино-товарная ферма', src: stf },
    { title:'Соевый цех', src: soi },
    { title:'Молочный завод', src: milk },
    { title:'Мясокомбинат', src: mit },
    { title:'Сахарный завод', src: sugar },
]


 class Map extends React.Component{

    state = {
        capture:''
    }

// показываем описание иконки при наведении
    ShowCapture = (event) => {
        return(
              this.setState({capture: event.currentTarget.title})
        )
    }

// скрываем описание иконки при убирании 
    HideCapture = (event) => {
        return(
              this.setState({capture: ''})
        )
    }


// рендерим иконки
    MapIcons = () => {
        return(
            <div className={classes.MapIcons}>
    
                    {icons.map((item, index)=>{
                        return(
                            <div key={index} className={classes.IconHolder}>
                                <div
                                className={classes.Icon}
                                title={item.title}
                                key = {index+'icon'}
                                onMouseOver={this.ShowCapture}
                                onMouseOut={this.HideCapture}
                                style={{
                                    boxShadow: '10px 11px 11px -7px rgba(20,60,111,0)',
                                    backgroundColor:'#313a45',
                                    ':hover':{
                                         boxShadow: '10px 11px 11px -7px rgba(20,60,111,1)',
                                         backgroundColor:'#e4771e',
                                    }
                                    }}
                                >
                                    <img
                                    key = {index+'img'}
                                    src={item.src}
                                    alt={item.title}

                                    
                                    />
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }

    render(){
        return(
            <div className = {classes.Map}>
                
                <UndertitleAbout>География наших клиентов</UndertitleAbout>
                <div className = {classes.Holder}>
                        <div className = {classes.Item}>
                        <div className = {classes.Capture}>
                            {this.state.capture}
                        </div>
                            <img
                            src={map} alt="map"
                            />
                        </div>
                        <div className = {classes.Item}>
                        {this.MapIcons()}
                        </div>
         
                </div>
            </div>
        )
    }
}



export default Radium(Map) 