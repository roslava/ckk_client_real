
import { FiMail } from "react-icons/fi";
import classes from './Email.module.scss'
import React from 'react'
const Email = (props) => {
    return (
        
        <div className={classes.EmailWrap}>
        <div className={classes.EmailBlock}>
        <div className={classes.EmailTitle}>


            <span
                style={{
                    marginRight: 5 + 'px',
                    marginTop: -4 + 'px'
                }}
            >
                <FiMail />
            </span>

            <span
                style={{
                    marginTop: -2 + 'px'
                }}
            >
                Электроння почта:
</span>
        </div>
        <div className={classes.Holder}>
            {/* <p><a href="mailto:IvanovaMO@ahkuban.ru">IvanovaMO@ahkuban.ru</a></p> */}
            <p><a href="IvanovaMO@KONTRKACHESTVA.SU ">IvanovaMO@kontrkachestva.su</a></p>
        </div>
    </div>
    </div>
    )
}
export default Email