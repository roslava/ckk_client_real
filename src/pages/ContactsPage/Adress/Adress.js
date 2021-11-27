import classes from './Adress.module.scss'
import { FiMapPin } from "react-icons/fi";
import React from 'react'
const Adress = (props) => {
    return(
        <div className={classes.AdressWrap}>
        <div className={classes.AdressBlock}>
                              
                                    <div className={classes.AdressTitle}>
                                        {/* Иконка «Адрес» */}
                                        <span id="adressIcon" style={{ marginRight: 5 + 'px', marginTop: -5 + 'px' }}><FiMapPin /></span>
                                        <span style={{ marginTop: -2 + 'px' }}>Адрес:</span>
                                    </div>

                                    <div className={classes.Holder}>
                                        <p>
                                            Российская Федерация, 352344, <br />
                                            Краснодарский край, <br />
                                            Усть-Лабинский район, <br />
                                            ст. Некрасовская, ул. Чапаева, 17.
                                            </p>
                                    </div>
                                    </div>                      
        </div>
    )
}
export default Adress