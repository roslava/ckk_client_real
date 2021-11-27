import React from 'react'
import Radium from 'radium'
import classes from './ContactsBlock.module.scss'
import PhoneIcon from './assets/phone-call.svg'






const ContactsBlock = (props) => {
    return(
        <div className = {classes.ContactsBlock}>
            
            
            <div
                className={classes.PhoneIconHolder} >
                    <img name='phoneLink' src={PhoneIcon} alt="phone"/>
            </div>
            
            <div  className={classes.ContactsBlock__phone}>
                <a href="tel:+79186752452">8 (918) 675–24–52</a>
            </div>
            
            
        </div>
    )
}

export default Radium (ContactsBlock)