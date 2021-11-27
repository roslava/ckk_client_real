import React from 'react'
import sertBase from '../../base_fake/certificate/sert'
import Radium from 'radium'
import classes from './SerificateView.module.scss'

const SerificateView = (props) => {
    return (
        <div className={classes.block}>
            <p className={classes.lead}>
            Мы стремимся к тому, чтобы качетво нашей работы всегда соответствовало требованиям технических регламентов, положениям стандартов, сводов правил или условиям договоров.
            </p>
            <div className={classes.wrapper}>
                {sertBase[1].map((item, index) => {
                    return (
                        <div
                            className={classes.item}
                            key={index}>
                            <div>
                                <img
                                src={item.sertImg_prev} alt=""
                                style = {{
                                    cursor:'pointer',
                                    opacity: '1',
                                    
                                      ':hover':{
                                        transition: 'opacity .22s ease-in',
                                        opacity: '0.7'
                                      }
                                  }} 
                                 onClick={() => props.DivDisplayChanger()}
                                />
                            </div>
                            <p className={classes.caption}>
                                {item.sertName}
                            </p>

                            

                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default Radium (SerificateView)