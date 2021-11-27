import React from 'react'
import classes from './TextArea.module.scss'

//Проверка — есть ли в textarea ошибка или нет...
const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched
}

const TextArea = (props) => {
    const cls = [classes.TextArea]

    if (isInvalid(props)){
        cls.push(classes.invalid)
    }

    return(
        <div
        className={cls.join(' ')}
        >
            <textarea
            value = {props.value}
            onChange = {props.onChange}
            placeholder = {props.placeholder} 
            id = {props.id}
            name = {props.name}
            />

        {isInvalid(props)
        ? <span>{props.errorMessage || 'Введите верное значение'}</span>
        : null
        }
        </div>
    )
}

export default TextArea