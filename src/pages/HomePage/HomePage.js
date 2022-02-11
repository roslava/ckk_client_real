import React from 'react'
import Carouseler from '../../components/Carouseler/Carouseler'
import Figures from '../../components/Figures/Figures'
import Container from '../../components/Structure/Container/Container'
import Block from '../../components/Structure/Block/Block'
import EquipmentMovie from '../../components/EquipmentMovie/EquipmentMovie'
import ContactForm from '../../components/ContactForm/ContactForm'
import FeedbackArea from '../../components/FeedbackArea/FeedbackArea'




const standarts = 'Лаборатория «Центра Контроля Качества» исследует сельскохозяйственную продукцию. Испытательная лаборатория аккредитована Центральным органом СДС «Добровольная система аккредитации, аттестации и&nbsp;подтверждения соответствия». Аттестат №&nbsp;ГОСТ.RU.22055 выдан 12&nbsp;декабря 2018 года.'

class HomePage extends React.Component {

    render() {
        const BaseSevices = this.props.BaseSevices
        const imgresource = this.props.imgresource
        return (
            <React.Fragment>

                <Container>
                    <div style={{ borderRadius: '8px', overflow: 'hidden', marginTop: '30px', height: 'auto' }}>
                        {/* <CarouselBox /> */}
                        <Carouseler />

                    </div>
                </Container>

                <Container>
                    <Block
                        titleH1='Услуги'
                        titleType='Main'
                        leadP={standarts}
                        numberOfColumns='Three'
                        BaseSevices={BaseSevices}
                        imgresource={imgresource}
                    />
                </Container>
                <Figures  imgresource={imgresource} />


                {/* Тут ролик про оборудование */}
                <div style={{
                    backgroundColor: '#313a45',
                    backgroundImage: 'url(' + imgresource + 'regular_img/icons/podrobneeGreen.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150px',
                    backgroundPosition: 'center',
                    minWidth: '100%',
                    minHeight: '300px',
                    padding: '30px'
                }}>


                    <EquipmentMovie imgresource={imgresource} />
                </div>
                
                {/* import FeedbackArea from '../../components/FeedbackArea/FeedbackArea' */}
                <FeedbackArea imgresource={imgresource} bgImg='regular_img/BgField_green_colored.jpg' >
                    <ContactForm titleType='FeedbackWhite' />
                </FeedbackArea>

            </React.Fragment>
        )
    }
}

export default HomePage

