import React from 'react'

import Row from '../../components/Row/Row'
import Section from '../../components/Section/Section'

import ClientsBlock from '../../components/ClientsBlock/ClientsBlock'
import ClientsBase from '../../base_fake/clients/clients'
import Container from '../../components/Structure/Container/Container'
import H1 from '../../components/H1/H1'
import ContactForm from '../../components/ContactForm/ContactForm'
import FeedbackArea from '../../components/FeedbackArea/FeedbackArea'




class OurClientsPage extends React.Component{
    render(){
        const imgresource = this.props.imgresource
        return(
            <React.Fragment>
            <Container>
                    <Row>
                    <Section>
                    <H1 titleType='Main'>
                    Наши клиенты
                    </H1>
                   
                    </Section>
                    </Row>
                    <ClientsBlock
                        ClientsBase = {ClientsBase}
                    />
                    </Container>




                {/* import FeedbackArea from '../../components/FeedbackArea/FeedbackArea' */}
                <FeedbackArea imgresource={imgresource} bgImg='regular_img/BgClients.jpg' >
                    <ContactForm titleType='FeedbackWhite' />
                </FeedbackArea>




</React.Fragment>
            
        )
    }
}

export default OurClientsPage