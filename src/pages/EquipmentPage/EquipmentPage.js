import React, {useState} from 'react'
import classes from './EquipmentPage.module.scss'
import Aside from '../../components/Aside/Aside'
import AsideName from '../../components/AsideName/AsideName'
import SerificateView from '../../components/SerificateView/SerificateView'

// три структурных компонента для макета с сайдбаром
import MainWrapper from '../../components/LayoutSideBarPlusMain/MainWrapper/MainWrapper'
import ContentWrapper from '../../components/LayoutSideBarPlusMain/ContentWrapper/ContentWrapper'
import SideBarWrapper from '../../components/LayoutSideBarPlusMain/SideBarWrapper/SideBarWrapper'

import EquipmentBlock from '../../components/EquiomentInEquipmentPage/EquipmentBlock'
// import equipmentBase from '../../base_fake/equipment/equipment.json'
import Container from '../../components/Structure/Container/Container'
import H1 from '../../components/H1/H1'
import Lead from '../../components/Lead/Lead'
import ContactForm from '../../components/ContactForm/ContactForm'
import FeedbackArea from '../../components/FeedbackArea/FeedbackArea' 

import ModalPhoto from '../../components/ModalPhoto/ModalPhoto'


const EquipmentPage = (props) =>{
    const imgresource = props.imgresource
     // const divDisplay = useState('none')
    // Это блок логики для отображения модального окна с увеличенным сертификатом
    const[divDisplay, setdivDisplay] = useState(false)
    const DivDisplayChanger = () =>  divDisplay === false ? setdivDisplay(true): setdivDisplay(false)

    // const[bodyScroll, setBodyScroll] = useState(true)
    // const BodyScrollChanger = () => bodyScroll === true ? setBodyScroll(false): setBodyScroll(true)
    
    divDisplay ? document.body.style.overflow = 'hidden' : document.body.style.overflow= 'unset' 
    
        return (
            <React.Fragment>
                <Container>
                    <div className={classes.EquipmentPage}>
                        <MainWrapper>
                               <ContentWrapper>
                                  <H1 titleType='Main'>Оборудование</H1>
                                
                                <Lead leadType='Main'>
                                    {"  В работе используется самое современное оборудование импортного и отечественного производства, позволяющее измерять:"}
                                </Lead>

<ul className={classes.ul}>
   <li className={classes.li}>Белок в кормовых ингредиентах, фураже, кормах для домашних животных, зерновых и масличных культурах, мясе, молоке, молочных продуктах, пивных ингредиентах. </li>
   <li className={classes.li}>Клетчатку в кормовых ингредиентах, фураже, кормах для домашних животных, зерновых и масличных культурах. </li>
   <li className={classes.li}>Жир в зерновых и масличных культурах, кормах для животных, фураже, кормовых ингредиентах, мясе, рыбных и молочных продуктах.</li>
   <li className={classes.li}>Концентрацию лекарственных, биологически активных веществ и их метаболитов в биологических объектах, в продуктах питания, алкогольных и безалкогольных напитках, сельскохозяйственной продукции в соответствии с аттестованными методиками измерений.</li>
   <li className={classes.li}>Кислотное и перекисное число жира, фосфорсодержащие и азотистые вещества.</li>
   <li className={classes.li}>Действующие вещества в пестицидах, азот, водорастворимые фосфаты, калий, нерастворимый осадок, рассыпчатость, гранулометрический состав.</li>
   <li className={classes.li}>Плотность, октановое/цетановое число, содержание серы в нефтепродуктах, фракционный состав, температуру вспышки, низкотемпературные показатели дизельного топлива.</li>
 </ul>
                               






                                <EquipmentBlock
                                    // equipmentBase={equipmentBase}
                                    imgresource={imgresource}
                                />
                            </ContentWrapper>
                            {/* <div className={classes.sticky}> */}
                            <SideBarWrapper>
                            
                                
                                <Aside>
                                
                                    <AsideName
                                        asideName='Сертификаты'
                                        asideNameType='asideNameTypeBlue'
                                    />
                                    
                                    {/* DivDisplayChanger={DivDisplayChanger} Так передаю функция ДЛЯ ОТКРЫТИЯ модального окна с увеличенным сертиффикатом в компонент SerificateView  */}
                                    <SerificateView DivDisplayChanger={DivDisplayChanger} />

                                   
                                </Aside>
                               
                            </SideBarWrapper>
                            {/* </div> */}
                        </MainWrapper>
                    </div>
                </Container>


                {/* import FeedbackArea from '../../components/FeedbackArea/FeedbackArea' */}
                <FeedbackArea imgresource={imgresource} bgImg='regular_img/BgChemistry4.jpg' >
                    <ContactForm titleType='FeedbackWhite' />
                </FeedbackArea>

              
                {!divDisplay? null :
                <ModalPhoto DivDisplayChanger={DivDisplayChanger} />}

                {/* DivDisplayChanger={DivDisplayChanger} Так передаю функция ДЛЯ ЗАКРЫТИЯ закрытия модального окна с увеличенным сертиффикатом в компонент ModalPhoto  */}
               
                    

            </React.Fragment>



        )
    
}

export default EquipmentPage