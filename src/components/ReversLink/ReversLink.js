import React from 'react'
import classes from './ReversLink.module.scss'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import Radium from 'radium'



const ReversLink = (props) => {


  const goToPage = () => {
    return(
     
      // console.log(props.history)
      props.history.push({
        pathname: props.pathTo
      })
      
    )
  }

  
    return(
        <div
        style = {{
          background:'#a6bedb',
          boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.0)',
            ':hover':{
              background:'#f05f2a',
              transition: 'background .22s ease-in',
              boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.26)'
            }
        }} 
        onClick = {goToPage}
        className = {classes.Block}>
         
          <div>
            <span>
              <FaAngleDoubleLeft
               size='13'
              />
            </span>
            {props.name}
           </div>
        </div>
        
        
    )
}

export default Radium (ReversLink)



// Подробнее
// о програмной навигации
// https://www.udemy.com/course/react-2020-complete-guide/learn/lecture/17342152#overview