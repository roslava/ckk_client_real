

import React from 'react'
import Garanties from './assets/garanties.svg'
import UndertitleAbout from '../UndertitleAbout/UndertitleAbout'


import classes from './Guarantees.module.scss'

const Guarantees = () => {
    return (
        
        <div className={classes.Guarantees} >
            
         
            <UndertitleAbout>Для вас мы гарантируем:</UndertitleAbout>
            <div>
            <img className={classes.svg} src={Garanties} alt=""/>
            </div>
        </div>
    )
}
export default Guarantees