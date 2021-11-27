import React from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import classes from './SmiArticleDetail.module.scss'
import Container from '../Structure/Container/Container'
import H1 from '../H1/H1'
import Lead from '../Lead/Lead'
import { FiCalendar } from "react-icons/fi"
import { FaAngleDoubleLeft } from 'react-icons/fa'


class  SmiArticleDetail extends React.Component {

    render(){
        // const article.imgresource = this.props.imgresource
            return(

            <SmiArticleRender article={this.props.location}/>
            ) 
    }
}

const  SmiArticleRender  = (props) => {
    console.log(props)
    const imgresource = props.article.imgresource


    if (!props.article.article_title) return <Redirect to="/about/" />
    return(
        
        <Container>
        <div className={classes.block}>


        <NavLink
            to='/smi' 
            title='Другие статьи' 
            exact = {true} 
            style={{
                textDecoration: 'none',
                color:'#575757',
                fontSize:'14px',
                fontWeight:'600'
            }}
            
        > <div
        style = {{
            marginTop:'30px',
            opacity:'1',
            paddingBottom:'6px',
            borderBottom:'1px solid #928f8f',
            ':hover':{
                opacity:'.8', 
                transition: 'opacity .3s ease-in-out',
            }
        }}>
           <span
           style={{marginTop:'-4px',
                   marginRight:'2px' 
        }}
           >
            <FaAngleDoubleLeft
            size='11'
            />
            </span>

            Другие статьи</div>
        </NavLink>
           



        <div className={classes.smiName}>{props.article.smi_name}</div>
        

        <div style={{
            display:'flex',
            
            height:'19px',
            
            alignItems:'center'
            

            }}>
        <FiCalendar
        color='#777a82'
        size='14'
        /> <p style={{margin:'0px', fontSize:'13px', marginTop:'1px', marginLeft:'3px'}}>{props.article.smi_date}</p>
        </div>
        
                
        {/* {props.location.additionalText1 ? <h5
        className={classes.additionalText1}
        dangerouslySetInnerHTML = {{__html:props.location.additionalText1}}
        >
        
        </h5> : null} */}



        
            
            <H1 titleType = 'Main' >{props.article.article_title}</H1>



            <Lead leadType = 'Main'>{props.article.article_lead}</Lead>
            
            <div className={classes.imgContainer}>
            <img
          
            src={imgresource+props.article.article_cover}
            alt=""/>
            </div>
            <p className={classes.text} dangerouslySetInnerHTML = {{__html:props.article.article_text}}></p>
            
        


            <p className={classes.author}>Автор: {props.article.smi_author}</p>
            <a className={classes.original} href={props.article.smi_original}>Ссылка на первоисточник</a>
            
            {/* <div style={{width:'220px'}}> */}
            {/* <ReversLink
            name = 'Другие статьи'
            history = {props.article.history}
            pathTo = '/smi/'
            /> */}
           
            {/* </div> */}

            <NavLink
            to='/smi' 
            title='Другие статьи' 
            exact = {true} 
            style={{
                textDecoration: 'none',
                color:'#575757',
                fontSize:'14px',
                fontWeight:'600'
            }}
            
        > <div
        style = {{
            marginTop:'30px',
            marginBottom:'30px',
            opacity:'1',
            paddingTop:'6px',
            borderTop:'1px solid #928f8f',
            ':hover':{
                opacity:'.8', 
                transition: 'opacity .3s ease-in-out',
            }
        }}>
           <span
           style={{marginTop:'-4px',
                   marginRight:'2px' 
        }}
           >
            <FaAngleDoubleLeft
            size='11'
            />
            </span>

            Другие статьи</div>
        </NavLink>


    </div>
   </Container>
    )
}

export default withRouter(SmiArticleDetail)