import React from 'react'
import classes from './Values.module.scss'
import Value_001 from './assets/SVG/val_001.svg'
import Value_002 from './assets/SVG/val_002.svg'
import Value_003 from './assets/SVG/val_003.svg'
import Value_004 from './assets/SVG/val_004.svg'
import UndertitleAbout from '../UndertitleAbout/UndertitleAbout'
const Values = () =>{
    return(
<div className = {classes.Values}>
<UndertitleAbout>Наши ценности</UndertitleAbout>
    
    <div className = {classes.Lead}>
    Чтобы следовать нашей миссии, нужен профессионализм и командная работа. Это наши ценности. Они дают понять, кто мы и чем мы руководствуемся в работе.
    </div>
        <div className = {classes.Holder}>
             <div className={classes.MicroGropupe}>
            <div className = {classes.Item}> <img src={Value_001} alt="Мы честны и порядочны"/></div>
            <div className = {classes.Item}> <img src={Value_002} alt="Мы одна команда"/></div>
            </div>
            <div className={classes.MicroGropupe}>
            <div className = {classes.Item}> <img src={Value_003} alt="Мы болеем за результат"/></div>
            <div className = {classes.Item}> <img src={Value_004} alt="Мы постоянно улучшаемся"/></div>
            </div>
            </div>
</div>
    )
}
export default Values