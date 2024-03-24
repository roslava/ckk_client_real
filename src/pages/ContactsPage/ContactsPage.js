import React from 'react'
import classes from './ContactsPage.module.scss'
import YandexMaps from '../../components/YandexMaps/YandexMaps'
import Container from '../../components/Structure/Container/Container'
import H1 from '../../components/H1/H1'
import Adress from './Adress/Adress'
import Phone from './Phone/Phone'
import Email from './Email/Email'
// import INN from './INN/INN'
import ContactForm from '../../components/ContactForm/ContactForm'
import FeedbackArea from '../../components/FeedbackArea/FeedbackArea'

class ContactsPage extends React.Component {
    render() {
        const imgresource = this.props.imgresource
        return (
            <React.Fragment>
                <Container>
                    <H1 titleType='Main'>Контакты</H1>
                    <div className={classes.Contacts}>
                        <div className={classes.ItemsHolder}>
                            <Adress></Adress>
                            <div className={classes.Join}>
                                <Phone></Phone>
                                <Email></Email>
                            </div>
                            
                        </div>
                        
                        
                        <div className={classes.MapHolder}>
                            <YandexMaps />
                        </div>
                        {/* <INN></INN> */}
                        {/* <div className={classes.WorkingMode}>
                            Работаем с понедельника по пятницу с 8:00 до 17:00
                        </div> */}
                    </div>

                </Container>
  
                {/* import FeedbackArea from '../../components/FeedbackArea/FeedbackArea' */}
                <FeedbackArea imgresource={imgresource} bgImg='regular_img/BgContacts.jpg' >
                    <ContactForm titleType='FeedbackWhite' />
                </FeedbackArea>


            </React.Fragment>
        )
    }
}

export default ContactsPage