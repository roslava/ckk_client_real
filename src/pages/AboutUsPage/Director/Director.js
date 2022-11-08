import React from 'react'
import classes from './Director.module.scss'
import Portret from './assets/Shahtinstaya_001.jpg'
const Director = () =>{
    return(
<div className = {classes.Director}>
    
        <div className = {classes.Holder}>
            <div className = {classes.Portret}><img src={Portret} alt="Наталья Шаханская"/></div>
            <div className = {classes.Item}>
            <div className = {classes.Title}>Наталья Шаханская,<br/>директор ЦКК:</div>
            — !Именно качество и безопасность продукта сегодня являются ключевым критерием роста АПК. Получить продукцию, удовлетворяющую требованиям ГОСТ, возможно только обеспечив непрерывный процесс контроля качества на всех этапах производственного цикла с подтверждением исследований в специализированных лабораториях или центрах сертификации. Лабораторный контроль всего процесса — это то, что позволяет сельскохозяйственным компаниям гарантировать качество конечного продукта.
            </div>
        </div>
</div>
    )
}
export default Director