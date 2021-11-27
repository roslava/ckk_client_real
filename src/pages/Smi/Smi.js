import React from 'react'
import classes from './Smi.module.scss'
import Container from '../../components/Structure/Container/Container'
import H1 from '../../components/H1/H1'
import ArticleCards from '../../components/ArticleCards/ArticleCards'

const Smi = (props) => {
    const imgresource = props.imgresource
    const smiBase = props.smiBase
    return (
        <div className={classes.Smi}>
            <Container>
                <H1 titleType='Main'>СМИ О Центре Контороля Качества</H1>
            </Container>
            <Container padding='Padding_0'>
                <ArticleCards
                    smiBase={smiBase}
                    imgresource={imgresource}
                    partially={false}
                    direction='row'
                />
            </Container>
        </div>
    )
}
export default Smi