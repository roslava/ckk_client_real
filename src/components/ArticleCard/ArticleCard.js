import React from 'react'
import classes from './ArticleCard.module.scss'
import { FiCalendar } from "react-icons/fi"
import { NavLink } from 'react-router-dom'
import { FaAngleDoubleRight } from "react-icons/fa"
import Radium from 'radium'
import Lead from '../Lead/Lead'







const ArticleCard = (props) => {
    // console.log(props)
    const cls = [classes.Card, classes[props.direction]]
    const clsRowGroup = [classes.rowGroup, classes[props.direction]]
    const partially = props.partially
    const imgresource = props.imgresource
    return (
        <div className={cls.join(' ')}>
            <div
                className={classes.CardContent}
                style={{ overflow: 'hidden' }}
            >

                <div>
                    <div
                        className={classes.orangeLine}
                        style={partially ? { marginBottom: '15px' } : null}>
                        {props.smiName}
                    </div>


                    {/* этот div держит группу заголовка-даты и cover в горизонтальной ориентации */}
                    <div className={clsRowGroup.join(' ')}>
                        {/* этот безымянный div родитель-обертка заголовка и даты */}
                        <div style={{ padding: '0px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                            <div
                                className={classes.titleDell}
                                dangerouslySetInnerHTML={{ __html: props.article_title }}
                                style={partially ?
                                    {
                                        fontSize: '17px',
                                        fontFamily: "'Oswald', sans-serif",
                                        padding: '0px'
                                    } : null}
                            >

                            </div>

                            <div style={{ display: 'flex' }}>

                                <div
                                    className={classes.date}
                                    style={partially ?
                                        {
                                            marginTop: '10px',
                                            marginBottom: '15px'
                                        } :
                                        null}>
                                    <React.Fragment>
                                        <FiCalendar color='#777a82' size='14' />{props.smi_date}
                                    </React.Fragment>
                                </div>

                            </div>
                        </div>
                        {/* div coverHolder задает ширину cover img   */}
                        <div className={classes.coverHolder}>
                            <img className={classes.cover}
                                src={imgresource + props.article_cover}


                                alt="" />
                        </div>
                    </div>

                    {/* div содержит Лид */}


                    <Lead leadType='smiPre'>
                        {props.article_lead}
                    </Lead>

                </div>


                {/* Ссылка обертывающая кнопку 'Читать далее' */}
                <NavLink
                    to={{
                        pathname: '/smi/' + props.id,
                        article_title: props.article_title,
                        article_lead: props.article_lead,
                        article_text: props.article_text,
                        article_cover: props.article_cover,
                        smi_name: props.smi_name,
                        smi_author: props.smi_author,
                        smi_original: props.smi_original,
                        smi_date: props.smi_date,
                        imgresource: imgresource,
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'rgba(24, 106, 165, 1)'
                    }}>

                    <div
                        className={classes.button}
                        style={
                            partially ? {
                                marginTop: '15px',
                                borderTop: '2px #a6bedb solid',
                                boxShadow: '0px -2px 20px 3px rgba(240, 95, 42, 0)',
                                ':hover': {
                                    borderTop: '2px #f05f2a solid',
                                    boxShadow: '0px -2px 20px 3px rgba(240, 95, 42, .26)'
                                }
                            } : {
                                    borderTop: '2px #a6bedb solid',
                                    boxShadow: '0px -2px 20px 3px rgba(240, 95, 42, 0)',
                                    ':hover': {
                                        borderTop: '2px #f05f2a solid',
                                        boxShadow: '0px -2px 20px 3px rgba(240, 95, 42, .26)'
                                    }
                                }}>

                        {/* Кнопка 'Читать далее' */}
                        <div className={classes.buttonContent}>
                            Читать далее
                                        <span style={{ marginLeft: '1px' }}>
                                <FaAngleDoubleRight size='11' />
                            </span>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Radium(ArticleCard)