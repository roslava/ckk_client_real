import React from 'react'
const articlesApi = 'http://127.0.0.1:8000/api/articles';


export default class ArticleBaseController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch(articlesApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { isLoaded, items, error } = this.state
        return (
            error ? <p> Ошибка загрузки данных {error.message}</p> :
                !isLoaded ? <div>Загрузка данных...</div> :
                    <div smiBase={items}>
                        {this.props.children}
                    </div>



        )
    }

}