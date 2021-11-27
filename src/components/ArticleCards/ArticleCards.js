import React from 'react'
import classes from './ArticleCards.module.scss'
import Card from '../ArticleCard/ArticleCard'

const ArticleCards = (props) => {

    // console.log(props)
    const imgresource = props.imgresource
    const smiBase = props.smiBase
    const partially = props.partially
    const postsSlice = props.postsSlice
    const sequenceBase = smiBase.slice(- postsSlice)
    const direction = props.direction
    const cls = [classes.Cards, classes[direction]]
 return( partially ? itemsMap(sequenceBase, cls, direction, imgresource) : itemsMap(smiBase, cls, direction, imgresource))   
}
export default ArticleCards


const itemsMap =(smiBase, cls, direction, imgresource)=>{
   
return(


    <div className={cls.join(' ')}>
    {smiBase.map((item, index, partially)=>{
        return(
            <Card
                imgresource = {imgresource}
                partially = {partially}
                key = {index}
                smi_name = {item.smi_name}
                article_title = {item.article_title}
                smi_date = {item.smi_date}
                article_lead = {item.article_lead}
                article_cover = {item.article_cover}
                article_text = {item.article_text}
                smi_author = {item.smi_author}
                smi_original = {item.smi_original}
                id = {item.id}
                direction = {direction}
                
            />
        )
    })}
        
</div>

)



}