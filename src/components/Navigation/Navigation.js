import React from 'react'
import {NavLink} from 'react-router-dom'
import MemuToggle from '../MemuToggle/MemuToggle'
import BackDrop from '../BackDrop/BackDrop'
import Container from '../Structure/Container/Container'
import classes from './Navigation.module.scss'








const navLinks = [
    {to:'/', pageName:'Услуги', title:'Услуги'},
    {to:'/about', pageName:'О компании', title:'О компании'},
    {to:'/equipment', pageName:'Оборудование', title:'Оборудование'},
    {to:'/clients', pageName:'Наши клиенты', title:'Наши клиенты'},
    {to:'/contacts', pageName:'Контакты', title:'Контакты'},
    ] 

    const activeStyle = {color: "#f05f2a"}



class Navigation extends React.Component{

    state = {
        // menu: true,
        menu: false,
        currentPage: ''
        
    }

    

    toggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
       this.setState({
           menu: false
        }) 
        
    }

    currentPageName = (event) => {
        this.setState({
            currentPage: event.currentTarget.title
            })
        // console.log(event.currentTarget.title)
        this.menuCloseHandler()
    }

    


    render(){
        const cls = [classes.open]

        if(!this.state.menu){
            cls.push(classes.Close)
        }

        return(
            <React.Fragment>
            <div className = {classes.Navigation}>
            <Container>
                    <div className = {classes.NavigationRow}>
                <div className = {cls.join(' ')}>
               <ul>
               <MemuToggle
                isOpen = {this.state.menu}
                onToggle = {this.toggleMenuHandler}
                currentPage = {this.state.currentPage}
               
               />
                   
                    {navLinks.map((link, index)=>{
                        
                        
                        return(
                        <li
                        
                        key = {index}>
                        <NavLink 
                        
                        to={link.to} 
                        title={link.title} 
                        activeStyle={activeStyle} 
                        exact = {true} 
                        // onClick = {this.menuCloseHandler}
                        onClick =  {this.currentPageName}
                        >
                            {link.pageName}
 
                        </NavLink>
                        </li>
                       )
                   })}
               </ul>
               </div> 
               </div>


               </Container> 
            </div>
            {this.state.menu ? 
            <BackDrop 
            onClose = {this.menuCloseHandler}
            /> : null}
            
            </React.Fragment>
         )
    }
}

export default Navigation