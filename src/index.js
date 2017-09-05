import React from 'react';
import ReactDom from 'react-dom';
import PostIndex from './components/PostIndex'
import PostsShow from './components/PostsShow'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';

import promise from 'redux-promise'


import { Router, Route, browserHistory } from 'react-router';

const store = applyMiddleware(promise)(createStore);


//  *** TEST APPLY MIDDLEWARE COMMENTING THIS SECTINO OUT.
// const store = createStore(reducers);


ReactDom.render(
  <Provider store={ store(reducers) }> 
    <Router path="/" history={browserHistory}>
        <Route path="/" component={PostIndex} />
        <Route path="/blog" component={PostsShow}/>
        <Route />
    </Router>
 </Provider>, document.querySelector('.container')
    );