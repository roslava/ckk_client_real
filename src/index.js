import 'react-app-polyfill/ie11';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './global_scss/Sizes.scss'
import './global_scss/Colors.scss'
import App from './App';
import{BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'





const application = (
  
  <BrowserRouter>
<ScrollToTop>
    <App/>
    </ScrollToTop>
  </BrowserRouter>
)



ReactDOM.render(
  <React.StrictMode>
    {application}
  </React.StrictMode>,
  document.getElementById('wrapper')
);

serviceWorker.unregister();
