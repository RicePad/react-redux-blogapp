import React from 'react';
import ReactDom from 'react-dom';
import PostIndex from './components/PostIndex'
import PostNew from './components/PostNew'
import PostShow from './components/PostShow'

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
        <Route path="/post/:id" component={PostShow}/>

        <Route path="/post/new" component={PostNew}/>
        <Route />
    </Router>
 </Provider>, document.querySelector('.container')
    );