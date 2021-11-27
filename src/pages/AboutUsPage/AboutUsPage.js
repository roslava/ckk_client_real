import React from 'react'
import Aside from '../../components/Aside/Aside'
import classes from './AboutUsPage.module.scss'
import Container from '../../components/Structure/Container/Container'

// три структурных компонента для макета с сайдбаром
import MainWrapper from '../../components/LayoutSideBarPlusMain/MainWrapper/MainWrapper'
import ContentWrapper from '../../components/LayoutSideBarPlusMain/ContentWrapper/ContentWrapper'
import SideBarWrapper from '../../components/LayoutSideBarPlusMain/SideBarWrapper/SideBarWrapper'


import AsideName from '../../components/AsideName/AsideName'

import ReversLink from '../../components/ReversLink/ReversLink'
import H1 from '../../components/H1/H1'
import ArticleCards from '../../components/ArticleCards/ArticleCards'
import ContactForm from '../../components/ContactForm/ContactForm'
import Lead from '../../components/Lead/Lead'

import Guarantees from './Guarantees/Guarantees'
import Values from './Values/Values'
import Director from './Director/Director'
import Employees from './Employees/Employees'
import Announcement from './Announcement/Announcement'
import Map from './Map/Map'
import FeedbackArea from '../../components/FeedbackArea/FeedbackArea'





class AboutUsPage extends React.Component {
    render() {
        const imgresource = this.props.imgresource
        const smiBase = this.props.smiBase
        const style_AllArticlesBtn = {
            position: 'absolute',
            bottom: '-30px',
            width: '100%'
        }

        return (
            <React.Fragment>
                <Container>
                    <div className={classes.AboutUsPage}>



                        <MainWrapper>

                            <ContentWrapper>
                                <H1
                                    titleType='Main'>О компании</H1>

                                <Lead leadType='Main'>
                                    Лаборатория «Центр контроля качества» исследует сельскохозяйственную продукцию. Расположена в Усть-Лабинском районе в станице Некрасовской.
                        </Lead>
                                {/*
------------------------------------------------
| БЛОК 1. ЦКК гарантирует                      |
------------------------------------------------
*/}
                                <Guarantees />

                                {/*
------------------------------------------------------
| БЛОК 2. ЦКК работает по нормативным документам    |
------------------------------------------------------
*/}
                                {/* <Documents /> */}

                                {/*
------------------------------------------------------
| БЛОК 3. Наши ценности                              |
------------------------------------------------------
*/}
                                <Values />

                                {/*
------------------------------------------------------
| БЛОК 4. Наталья Шаханская                          |
------------------------------------------------------
*/}
                                <Director />

                                {/*
------------------------------------------------------
| БЛОК 5. Сотрудники                                 |
------------------------------------------------------
*/}
                                <Employees />

                                {/*
------------------------------------------------------
| БЛОК 6. В слайдер или анонс                        |
------------------------------------------------------
*/}
                                <Announcement />

                                {/*
------------------------------------------------------
| БЛОК 7. Карта                                      |
------------------------------------------------------
*/}
                                <Map />



                            </ContentWrapper>

                            <SideBarWrapper>
                                <Aside>

                                    <AsideName
                                        asideName='СМИ О НАС'
                                        asideNameType='orange'
                                        link={true}
                                        to='smi'
                                    />

                                    <ArticleCards

                                        // передается внешний путь в компонент
                                        imgresource={imgresource}

                                        // передается база в компонент
                                        smiBase={smiBase}

                                        // partially, сигнализирует, надо ли отображать все посты, или только их часть
                                        partially={true}

                                        // postsSlice, передает количество последних постов для показа (в случае, если partially = {true})
                                        postsSlice={3}

                                        //задается flex-direction 'column' и margin-top 15px
                                        direction='column'

                                    />

                                    <div style={style_AllArticlesBtn}>
                                        <ReversLink
                                            name='Все статьи!'
                                            history={this.props.history}
                                            pathTo='/smi/'
                                        />
                                    </div>
                                </Aside>
                            </SideBarWrapper>
                        </MainWrapper>

                    </div>
                </Container>


                <FeedbackArea imgresource={imgresource} bgImg='regular_img/BgAbout.jpg' >

                    <ContactForm titleType='FeedbackWhite' />
                </FeedbackArea>

            </React.Fragment>
        )
    }
}

export default AboutUsPage