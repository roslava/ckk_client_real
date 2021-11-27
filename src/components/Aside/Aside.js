import React from 'react'
import classes from './Aside.module.scss'




class Aside extends React.Component{
    render(){
        return(
            <div className={classes.Aside}>
 
                    {this.props.children}
 
            </div>
            
        )
    }
}


export default Aside




// class Aside extends React.Component{
//     render(){
//         const items = this.props.items
//         const cls = [classes.Aside, classes.Certificate, classes[this.props.type]]
//             return(
//                 <aside>
//                     <div className={classes.AsideContainer}>
//                         <AsideName
//                             asideName = {this.props.asideName}
//                             asideNameType = {this.props.asideNameType}
//                         />

//                         {/* тут по средством asideThemChecker идет вывод содержимого aside */}
//                         {asideThemChecker(this.props.asideThem, items, cls)}
//                     </div>
//                 </aside>
//             )
//     }
// }













    


    

