import React from 'react'
import classes from './Input.module.scss'

//Проверка — есть ли в input ошибка или нет...
const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched
}

const Input = (props) => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    
    if (isInvalid(props)){
        cls.push(classes.invalid)
    }


    return(
        <div className={cls.join(' ')}>
            <input
            type = {inputType}
            value = {props.value}
            onChange = {props.onChange}
            placeholder = {props.placeholder} 
            id = {props.id}
            name = {props.name}
            />

<div className={classes.error}>
{
    isInvalid(props) && props.value.length > 0
        ? 
        <div>
            <div
            style={{
                height:'7px',
                width:'7px',
                backgroundColor: '#a15f62',
                display:'inline-block',
                borderRadius:'50%'
            
            }}
            ></div>
            {props.errorMessage}
            
            </div>
        : null
}
</div>


    
        </div>
    )
}

export default Input