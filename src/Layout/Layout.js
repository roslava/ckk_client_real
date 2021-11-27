import React from 'react'
import Legal from '../components/Legal/Legal'
import Nav from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import classes from './Layout.module.scss'

class Layout extends React.Component{


    


    render(){
        

        return(
            
            <div className = {classes.Layout}>
              
                <main className = {classes.Main}>
                    
                    {this.props.children}
                   
                </main>
                <Nav />
                <Footer
                BaseSevices = {this.props.BaseSevices}
                logoWidth = '130'
                logoColorType = 'white'
                />
                <Legal>
                    Центр Контроля Качества &copy; 2021
                </Legal>   
                
            </div>
            
        )
    }
}

export default Layout