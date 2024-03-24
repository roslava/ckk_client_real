import React from 'react'
import classes from './Figures.module.scss'
import Container from '../Structure/Container/Container'




const figure_1 = () => {
    return(
        <React.Fragment>
         <p className={classes.Number}>156</p>
         <p className={classes.UnderNumber}>единиц<br />измерительного<br />оборудования.</p>
         </React.Fragment>
    )
}

const figure_2 = () => {
    return(
        <React.Fragment>
        <p className={classes.Number}>18</p>
         <p className={classes.UnderNumber}>единиц испытательного оборудования.</p>
         </React.Fragment>
    )
}

const figure_3 = () => {
    return(
        <React.Fragment>
        <p className={classes.Number}>60</p>
         <p className={classes.UnderNumber}>единиц вспомогательного оборудования.</p>
         </React.Fragment>
         
    )
}


const Figures = (props) => {
    const imgresource = props.imgresource
    return(
        <div
        style={{
            backgroundImage: `url(${imgresource}img/regular_img/BgField_colored.jpg)`,
              }}
        className = {classes.Figures}>
        <Container>
        
           
           
                <div className = {classes.Holder} >
               
                <div className = {classes.Item}>{figure_1()}</div>
                <div className = {classes.Item}>{figure_2()}</div>
                <div className = {classes.Item}>{figure_3()}</div>
                </div>
                </Container>    
           
          
        </div>
        
    )
}

export default Figures