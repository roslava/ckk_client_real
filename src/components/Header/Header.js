import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss'
import Row from '../../components/Row/Row'
// import LogoHeader from './assets/SVG/LogoHeader.svg'
// import LogoHeaderWhite from './assets/SVG/LogoHeaderWhite.svg'
import Container from '../Structure/Container/Container'
import ContactsBlock from './ContactsBlock/ContactsBlock'
import Logo from './../Logo/Logo'
import Radium from 'radium'


class Header extends React.Component{
    
    render(){
        const cls = [classes.Header, classes[this.props.bgImg]]
        return(
            <header style ={{backgroundColor: '#'+this.props.bgColor, width: '100%'}}>
                <Container padding = 'Padding_0'>
                    <Row>
                       
                        <div className={cls.join(' ')}>
                                   
                                    <div
                                    style={{
                                        opacity: '1',
                                        ':hover':{
                                         opacity: '.8'
                                        }}}
                                    className={classes.LogoDiv}>

                        <NavLink to='/' exact = {true} > 
                        <Logo logoColorType = {this.props.logoColorType} />
                        </NavLink>

                                    </div>
                                    
                                    <div className={classes.SertDiv}>
                                        {/* <h3>Лаборатория аккредитована</h3>
                                        Подробнее о сертификатах */}
                                        {/* <a href="#">Подробнее о сертификатах</a> */}
                                    </div>
                                    



                                    <div className={classes.ContactsDiv}>
                                        <div className={classes.contactsHolder}>

                                        <ContactsBlock>
                                            
                                        </ContactsBlock>
                                    </div>
                                        
                                    
                                    
                                    
                                    
                                    </div>
                        </div>
                    
                    
                    </Row>
                    </Container>
               </header>
            
        )
    }
}

export default Radium (Header)