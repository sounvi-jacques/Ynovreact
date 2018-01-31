import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './compoments/Header';
import Home from './compoments/Home';
import NotFound from './compoments/NotFound';
import VideoPlayer from './compoments/VideoPlayer';
import { Link } from 'react-router-dom'


import LoginForm from './compoments/Connexion/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route,BrowserHistory,Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const routes = [
    { path: '/home',
      component: Home
    },
    { path: '/',
      component: LoginForm
      
    }
  ]


    ReactDOM.render(        
        <Provider store={store}>
            
            <Router>
            <LoginForm/>
              </Router>
        </Provider>,
        document.getElementById('root'));



ReactDOM.render(

  <Router>
    <div>
        
        <Route exact path = "/video" component ={VideoPlayer}/>
    </div>
  </Router>,document.getElementById('video'));
