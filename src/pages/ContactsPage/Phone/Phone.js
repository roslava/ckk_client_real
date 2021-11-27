import classes from './Phone.module.scss'
import { FiPhoneCall } from "react-icons/fi";
import React from 'react'
const Phone = (props) => {
    return (
        
<div className={classes.PhoneWrap}>
        <div className={classes.PhoneBlock}>

            <div className={classes.PhoneTitle}>
                <span style={{ marginRight: 5 + 'px', marginTop: -3 + 'px' }}><FiPhoneCall /></span>
                <span style={{ marginTop: -2 + 'px' }}>Телефоны:</span>
            </div>

            <div className={classes.Holder}>
                <p><a href='tel:89184294204'>8 (918) 429–42–04</a></p>
            </div>
        </div>
        </div>
    )
}
export default Phone