import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Footer.module.scss'
import Row from '../Row/Row'
import Radium from 'radium'

import MediaFacebook from './assets/media_logo/fb.svg'
import MediaTwitter from './assets/media_logo/tw.svg'
import MediaInstagramm from './assets/media_logo/in.svg'
import Vkontakte from './assets/media_logo/vk.svg'
import Container from '../Structure/Container/Container'
import LabSVG from './assets/SVG/lab.svg'
import PixelChevron from './assets/pixel_chevron.gif'
import Logo from '../Logo/Logo'
import PhoneIcon from './assets/SVG/phone-call.svg'
import KeyAuth from './assets/key/key.svg'
import YandexLogo from './assets/yandex/yandex.svg'

//для техники безопасности 
import SafetyPrecautions from './assets/safety_precautions/recommended_activities.jpg'
import Saut from './assets/safety_precautions/Summary_of_the_SAUT.pdf'
import { Color } from 'chalk'




const media = [MediaFacebook, MediaTwitter, MediaInstagramm, Vkontakte]
const ImportantDocuments = [SafetyPrecautions, Saut]



const servicesPint = (services) => {
    return (
        <ul
            className={classes.FooterUL}
            style={{
                margin: '0px',
                padding: '0px',
            }}>
            {services.map((item_, index) => {
                return (
                    <li
                        key={index + 'serv'}
                        className={classes.Services}
                        style={{ listStyle: 'none', margin: '0px', padding: '0px' }}>
                        {/* {console.log(item_)} */}
                        <NavLink
                            to={{
                                pathname: '/' + item_.id,
                                index: index,
                                title: item_.title,
                                lead: item_.lead,
                                img: item_.img[0],
                                text: item_.text
                            }}>
                            <img src={PixelChevron} alt="" />
                            {item_.shortTitle}
                        </NavLink>

                    </li>
                )
            }
            )
            }
        </ul>
    )
}




class Footer extends React.Component {
    render() {


        return (
            <header className={classes.Footer}>
                <Container>
                    <Row>
                        <div className={classes.FooterSection}>

                            <div
                                className={classes.LogoDiv}
                                style={{ width: this.props.logoWidth + 'px' }}
                            >
                                <Logo
                                    logoColorType={this.props.logoColorType}
                                />


                            </div>
                            <div className={classes.ServicesDiv}>
                                <img style={{ width: '43px', marginBottom: '7px', marginTop: '7px' }} src={LabSVG} alt="" />
                                <div className={classes.ServicesDivTitle}>Исследования:</div>
                                {servicesPint(this.props.BaseSevices)}
                            </div>
                            {/* !!!!! */}
                            <div className={classes.InfoDiv}>


                                <NavLink
                                    to={{ pathname: '/smi' }}>
                                    <div style={{ minWidth: '100%' }}>
                                        <img src={PixelChevron} alt="Сми о нас" />
                                        Сми о нас
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={{ pathname: '/equipment' }}>
                                    <div style={{ minWidth: '100%' }}>
                                        <img src={PixelChevron} alt="Сертификаты" />
                                        Сертификаты
                                    </div>
                                </NavLink>

                                {/* Два документа для начальника отдела охраны труда */}
                                <div style={{ minWidth: '100%', display:'flex', alignItems:'flex-start' }}>
                                    <img  style={{marginTop:'6px'}} src={PixelChevron} alt="Сми о нас" />
                                    <a
                                        style={{ lineHeight: '17px', margin: '0px', padding: '0px', display: 'block' }}
                                        href={ImportantDocuments[0]} rel="noreferrer" target="_blank" download>
                                        Перечень рекомендуемых мероприятий по улучшению условий труда
                                    </a>
                                </div>

                                <div style={{ minWidth: '100%', display:'flex', alignItems:'flex-start' }}>
                                    <img  style={{marginTop:'6px'}} src={PixelChevron} alt="Сми о нас" />
                                    <a
                                        style={{ lineHeight: '17px', margin: '0px', padding: '0px', display: 'block' }}
                                        href={ImportantDocuments[1]} rel="noreferrer" target="_blank" download>
                                        Сводная ведомость результатов проведения специальной оценки условий труда
                                    </a>
                                </div>

                            </div>
                            {/* !!!!!!!                             */}
                            <div className={classes.ContactsDiv}>
                                <ul>
                                    <li><img src={PhoneIcon} alt="" /><a href="tel:+79186752452">8 (918) 675–24–52</a></li>
                                </ul>

                                {/* {MediaLogtypes(30, 5)} */}

                                <div className={classes.Media}>
                                    {media.map((item, index) => {
                                        return (
                                            <div
                                                title={'Социальные сети в разработке.'}
                                                key={index}
                                                className={classes.MediaItem}
                                                style={{
                                                    backgroundImage: 'url(' + item + ')',
                                                    backgroundColor: '#313a45',
                                                    ':hover': {
                                                        backgroundColor: '#ffffff',
                                                        transition: 'background-color .3s ease-in-out'
                                                    }

                                                }}
                                            ></div>
                                        )
                                    })}
                                </div>









                                <div className={classes.Auth}>

                                    <a
                                        title="Администратору"
                                        key="key002"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="http://www.cf13541.tmweb.ru/login"

                                        style={{
                                            backgroundImage: 'url(' + KeyAuth + ')',
                                            backgroundColor: '#313a45',
                                            ':hover': {
                                                backgroundColor: '#ffffff',
                                                transition: 'background-color .3s ease-in-out'
                                            }
                                        }}
                                    > </a>


                                    <a
                                        title="Яндекс метрика"
                                        key="key001"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://metrika.yandex.ru/dashboard?id=86669194"

                                        style={{
                                            backgroundImage: 'url(' + YandexLogo + ')',
                                            backgroundColor: '#313a45',
                                            ':hover': {
                                                backgroundColor: '#ffffff',
                                                transition: 'background-color .3s ease-in-out'
                                            }
                                        }}
                                    > </a>

                                </div>








                            </div>
                        </div>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Radium(Footer)


