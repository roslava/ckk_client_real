import React from 'react'
import classes from './MemuToggle.module.scss'
import { FaBars, FaTimes } from 'react-icons/fa'




class MemuToggle extends React.Component{
    render(){



        return(
           <React.Fragment>
           <div className = {classes.MemuToggle}>
                 <div>
                 {this.props.isOpen ? 
                 <FaTimes
                 onClick={this.props.onToggle}
                 /> : 
                 <FaBars 
                 onClick={this.props.onToggle}
                 />}
                </div>
                <h3>
                {this.props.currentPage}
                </h3>
                                                 
            </div>

          
            </React.Fragment>  
         )
    }
}

export default MemuToggle