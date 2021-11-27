import React from 'react'
import classes from './Employees.module.scss'
import UndertitleAbout from '../UndertitleAbout/UndertitleAbout'


const Employees = () =>{
    return(
    <div className = {classes.Employees}>
        <UndertitleAbout>Сотрудники</UndertitleAbout>
        
            <div className = {classes.Holder}>

                <div className={classes.Circle}>
                    <div className={classes.Quotes}>
                        {/* <img src={EmployeesSVG} alt=""/> */}
                    </div>
                </div>
                
            </div>
    </div>
    )
}

export default Employees