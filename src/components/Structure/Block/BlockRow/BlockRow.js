import React from 'react'
import {NavLink} from 'react-router-dom'
import BlockColumn from './BlockColumn/BlockColumn'
import classes from './BlockRow.module.scss'
import BlockItem from './BlockColumn/BlockItem/BlockItem'
import BlockImgHolder from './BlockColumn/BlockItem/BlockImgHolder/BlockImgHolder'
import LinkButtonSmall from '../../../LinkButtonSmall/LinkButtonSmall'
import H1 from '../../../H1/H1'
import Lead from '../../../Lead/Lead'


class BlockRow extends React.Component{
    render(){
        const imgresource = this.props.imgresource
        const   BaseSevices = this.props.BaseSevices
        const   styleCover = () => {
                    return(
                        {
                            opacity:'1',
                                ':hover':{
                                    opacity:'0',
                                    transition: 'opacity .3s ease-in-out',
                                }})
        }
        const   to = (item, index) => {
                    return  (
                                {
                                    pathname: item.id,
                                    index: index,
                                    title: item.title,
                                    lead: item.lead,
                                    img: item.img[0],
                                    text: item.text,
                                    text_2: item.text_2,
                                    undertitle_2: item.undertitle_2,
                                    imgresource: imgresource
                                })}
 
        return(
                    <div className = {classes.BlockRow}>
                        {BaseSevices.map((item, index) => {
                            return(
                                <BlockColumn
                                    numberOfColumns={this.props.numberOfColumns} 
                                    key={index}>
                                        <BlockItem numberOfColumns={this.props.numberOfColumns} >
                                             
                                             {/* div с высотой 100%, заключающий в себе все содержимое 
                                             карточки услуги кроме нижней кнопки 'Подробнее',
                                             которую он прижимает к низу...
                                             Для последнего и нужен */}
                                             <div style={{height:'100%'}}>
                                
                                                {/* Картинка-обложка услуги является еще и ссылкой — завернута в NavLink */}
                                                <NavLink to = {to(item, index)}>
                                                    <BlockImgHolder
                                                        numberOfColumns = {this.props.numberOfColumns}
                                                        bgImg = {imgresource+item.cover[1]}
                                                        >
                                                            {<img
                                                                src={imgresource+item.cover[0]}
                                                                alt={item.title}
                                                                key = {index+'imgCover'}
                                                                style = {styleCover()}
                                                            />}
                                                    </BlockImgHolder>
                                                </NavLink>  

                            {/* div объединяет в заголовочную группу иконку и заголовок карточки услуги */}
                            <div style={{display:'flex', alignItems:'flex-start'}}>
                                <div
                                    // Иконка реализована как фоновое изображение блока 47x47
                                    style={{
                                        minWidth:'47px',
                                        height:'47px',
                                        overflow:'hidden',
                                        backgroundImage:'url('+imgresource+item.icon+')',
                                        backgroundRepeat:'no-repeat'
                                        }}>
                                </div>

                        
                            {/* Заголовок */}
                            <H1 titleType='ServisesPreview'>{item.title.join('\u00AD')}</H1>
                            </div>

                            {/* Лид */}    
                            <Lead leadType = 'servicesPrev'>
                                {item.lead}
                            </Lead>
                            </div>

                            {/* div задает компоненту 
                            кнопки ширину и выравнивание по центру 
                            относительно карточки услуги */}
                            <div style = {{
                                    width:'99px',
                                    minWidth:'99px',
                                    alignSelf:"center",
                                    justifySelf:"end",
                                    }}>
                            
                                <NavLink
                                    style={{color:'rgba(24, 165, 153, 0)'}}
                                    className={classes.link}
                                    to = {to(item, index)}
                                >
                                    {/* LinkButtonSmall — кнопка 'Подробнее' — внизу карточки услуги */}
                                    <LinkButtonSmall>{item.linkName}</LinkButtonSmall>
                                </NavLink>
                            </div>
                        </BlockItem>
                </BlockColumn>
                )
            })}
        </div>
        )
    }
}

export default BlockRow