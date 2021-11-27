import React from 'react'
import classes from './Carosel.module.scss'
import Radium from 'radium'


class Carosel extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        currentSlideIndex: 0
                }
        }

        render() {
                const imgresource = this.props.imgresource
                const slides = slidesAll(imgresource)
                const { currentSlideIndex } = this.state
                return (
                        <React.Fragment>

                                <div className={classes.SlideOpacityWrapper}>

                                        <div
                                                className={classes.slide}
                                                style={{
                                                        backgroundImage: slides[currentSlideIndex].bgImg,
                                                        opacity: 1
                                                }}
                                        >
                                                <div className={classes.Capture}>
                                                        <p>{slides[currentSlideIndex].capture}</p>
                                                </div>
                                        </div>

                                </div>






                        </React.Fragment>
                )

        }


        componentDidMount() {
                this.myInterval = setInterval(() => {
                        this.state.currentSlideIndex <= 7 ?
                                this.setState(prevState => ({
                                        currentSlideIndex: prevState.currentSlideIndex + 1
                                }))
                                : this.setState({ currentSlideIndex: 0 })
                }, 6000)
        }


        componentWillUnmount() {
                clearInterval(this.myInterval)
        }
}

export default Radium(Carosel)


function slidesAll(imgresource) {
        return (
                [
                        {

                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Foss_Soxtec_8000.jpg)',
                                capture: 'Foss Soxtec 8000',
                                id: '01'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Infatec_1241.jpg)',
                                capture: 'Infatec 1241',
                                id: '02'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Milichrome_А_02.jpg)',
                                capture: 'Хроматограф Милихром А-02',
                                id: '03'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/ASASH_8_2.jpg)',
                                capture: 'Сушильный шкаф АСЭШ-8-2',
                                id: '04'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Borey.jpg)',
                                capture: 'Лабораторная мельница БОРЕЙ',
                                id: '05'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Foss_Fibertec_8000.jpg)',
                                capture: 'Foss Fibertec 8000',
                                id: '06'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Foss_8400.jpg)',
                                capture: 'Foss 8400',
                                id: '07'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Foss_infomatic_8800.jpg)',
                                capture: 'Foss Инфраматик 8800',
                                id: '08'
                        },
                        {
                                bgImg: 'url(' + imgresource + 'regular_img/equipment_img/equipment_movie/Viuga.jpg)',
                                capture: 'Лабораторная мельница ВЬЮГА',
                                id: '09'
                        }
                ]
        )
}
