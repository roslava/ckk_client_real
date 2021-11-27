import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout/Layout'
// import { YMInitializer } from 'react-yandex-metrika';
import Preloader from './components/Preloader/Preloader'

// Тут получаем всю информацию об услугах
import BaseSevices from './base_fake/services/services.json'


import HomePage from './pages/HomePage/HomePage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import EquipmentPage from './pages/EquipmentPage/EquipmentPage'
import OurClientsPage from './pages/OurClientsPage/OurClientsPage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import ServiceDetail from './components/ServiceDetail/ServiceDetail'
import SmiArticleDetail from './components/SmiArticleDetail/SmiArticleDetail'
import Smi from './pages/Smi/Smi'
import Send from './pages/Send/Send'

//основная версия на лаборатория-цкк.рф
const articlesApi = 'http://www.cf13541.tmweb.ru/api/articles';
const imgresource = "http://www.cf13541.tmweb.ru/storage/";

//резервная копия на artnen
// const articlesApi = 'http://www.ch44195.tmweb.ru/api/articles';
// const imgresource = "http://www.ch44195.tmweb.ru/storage/";

//локальная версия c запущенным api на локальном сервере (MAMP)
// const articlesApi = 'http://127.0.0.1:8000/api/articles';
// const imgresource = "http://127.0.0.1:8000/storage/";



export default class App extends React.Component {
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

      
      error ? <p> Ошибка загрузки данных</p> :
       !isLoaded ? <div> <Preloader /> </div>   :
 <React.Fragment>
  
          <Layout BaseSevices={BaseSevices}>
          {/* <YMInitializer accounts={[75443098]} options={{webvisor: true}} /> */}
             <Header
              bgImg='bgImg_02'
              logoColorType='orange'
              bgColor='185c90'
            />
             <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <HomePage {...props} BaseSevices={BaseSevices} imgresource={imgresource} />
                )}
              />
               <Route path="/smi/:id" exact component={SmiArticleDetail}/>
                 <Route
               exact
                path="/about"
                render={props => (
                  <AboutUsPage {...props} smiBase={items} imgresource={imgresource} />
                 )}
              />  
               {/* <Route path="/about" component={AboutUsPage} /> */}
               {/* {console.log(items)} */}
    
              <Route
                exact
                path="/smi"
                render={props => (
                  <Smi {...props} smiBase={items} imgresource={imgresource} />
                )}
              />

              <Route
                path="/contacts"
                render={props => (
                  <ContactsPage {...props} imgresource={imgresource} />
                )}
              />

              <Route
                path="/equipment"
                render={props => (
                  <EquipmentPage {...props} imgresource={imgresource} />
                )}
              />

              <Route
                path="/clients"
                render={props => (
                  <OurClientsPage {...props} imgresource={imgresource} />
                )}
              />

              <Route path="/send" component={Send} />

              <Route exact path="/:id" component={ServiceDetail} />
              <Route component={PageNotFound} />
             </Switch>
           </Layout>
          
        </React.Fragment>
        
    )
  }
}













