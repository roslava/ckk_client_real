import React from 'react'
import Radium from 'radium'
import {Redirect} from 'react-router-dom'
import classes from './ServiceDetail.module.scss'
import Container from '../../components/Structure/Container/Container'
import H1 from '../H1/H1'
import Lead from '../Lead/Lead'



import ReversLink from '../../components/ReversLink/ReversLink'
// const imgresource = "http://127.0.0.1:8000/storage/"

class ServiceDetail extends React.Component {
    render(){
       console.log(this.props)
        return ServiceDetailRender(this.props)
    }
 }

export default Radium (ServiceDetail)

const style = {
    paddingLeft: '6px',
    color: 'black',
    background: 'rgba(183, 224, 250, 0)',
        ':hover':{
            background: 'rgba(183, 224, 250, .4)',
            transition: 'background .3s ease-in-out',
            borderRadius: '4px'  
    }
}

// Среди стандартного описания услуг 
// появилась одна услуга с нестандартным 
// описанием — в конце добавился абзац с подзаголовком.
// Реализация: тернарным оператором выясняем,
// есть ли в описании услуг дополнительные подзаголовок и абзац,
// если есть возвращаем функции ifUndertitle_2True и ifText_2True,
// если нет, то возвращаем null

const ifUndertitle_2True = (props) => {
    return(
        <p
        style={{fontSize:'21px',
        fontWeight:'600',
        textTransform:'uppercase',
        marginBottom:'0px',
        marginTop:'0px'}}>
            {props}
        </p>
    )
}

const ifText_2True = (props) => {
    return(
        props.map((item, index) =>{
            return(
                <ul className={classes.item} key={index+'ul2'}>
                    <li style = {style} key={index+'text2'}>
                        <div className={classes.itemText}>
                            {item}
                        </div>
                    </li>
                </ul>
            )
        })
    )
}


const ServiceDetailRender = (props) => {
    if (!props.location.title) return <Redirect to="/" />
        return(
          <div className = {classes.ServiceDetail}>
               <Container>
                    <div className = {classes.ServiceDetailBlock}>
                        <H1 titleType = 'Main'>{props.location.title}</H1>
                        <Lead leadType = 'Main'>{props.location.lead}</Lead>
                       
                        
                        <div className = {classes.textWrapper}>






                        {props.location.text.map((item, index) => {
                            return(
                              <ul key={index} className={classes.item} >
                                    <li style = {style} key={index}>
                                        <div
                                        className={classes.itemText}
                                        dangerouslySetInnerHTML = {{__html:item}}
                                        >
                                        </div>
                                    </li>
                            </ul> 
                            
                            )
                        }) }
                        </div>

                        
                        {/* Тут начинается блок с иллюстрациями */}
                        <div className = {classes.horizontalImgsHolder}>          
                                            
                            <div className = {classes.imgSmall} >
                            <img src={props.location.imgresource+props.location.img[0]} alt={props.location.title}/>
                            </div>                                  
                        
                            <div className = {classes.imgSmall} >
                            <img src={props.location.imgresource+props.location.img[1]} alt={props.location.title}/>
                            </div>

                            <div className = {classes.imgSmall} >
                            <img src={props.location.imgresource+props.location.img[2]} alt={props.location.title}/>
                            </div>

                            <div className = {classes.imgSmall} >
                            <img src={props.location.imgresource+props.location.img[3]} alt={props.location.title}/>
                            </div>
                                        
                        </div>  

                        {/* Дополнительные услуги  */}
                        {props.location.text_2 ?
                            <div className = {classes.textWrapper}>
                                {ifUndertitle_2True(props.location.undertitle_2)}
                                {ifText_2True(props.location.text_2)}
                            </div>:null
                        } 

                    </div>
                        <div style={{width:'150px', marginBottom:'20px',marginTop:'20px'}}>
                            <ReversLink
                            name = 'Все услуги'
                            history = {props.history}
                            pathTo = '/'

                            />
                        </div>
                  
                        
                  
                    

                        </Container>
           </div>
        )
        }


