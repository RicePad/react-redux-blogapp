import React from 'react';
import ReactDom from 'react-dom';
import PostIndex from './components/PostIndex'
import PostsShow from './components/PostsShow'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';


import { Router, Route, browserHistory } from 'react-router';

const store = createStore(reducers);


ReactDom.render(
  <Provider store={ store }> 
    <Router path="/" history={browserHistory}>
        <Route path="/index" component={PostIndex} />
        <Route path="/blog" component={PostsShow}/>
        <Route />
    </Router>
 </Provider>, document.querySelector('.container')
    );