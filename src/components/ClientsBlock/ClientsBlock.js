import React from 'react'
import classes from './ClientsBlock.module.scss'
import H1 from '../H1/H1'

const ClientsBlock = (props) => {
    const ClientsBase = props.ClientsBase
    return(
        <React.Fragment>
        <div className={classes.ClientsBlock}>
            {ClientsBase.map((item, index) => {
                return(
                    <div key = {index}
                    className={classes.ClientsBlockItem}>

                {item.isImg ?   <div className={classes.ClientsImgHolder}>
                            <img src={item.img} alt={item.name}/>
                            </div> : <div className={classes.ClientsImgHolder_empty}></div> }




                            <div className={classes.ClientsTextHolder} >
                                <H1 titleType='Clients'>{item.title}</H1>
                                <p> {item.text} </p>
                                <div className={classes.ClientsBlockSignature}> {item.signature} </div>
                                <div className={classes.ClientsBlockSignature}> {item.position} </div>
                                <div className={classes.ClientsBlockLocation}>{item.location}</div>
                            </div>
                    </div>
                )})}
        </div>
        </React.Fragment>
    )
}

export default ClientsBlock