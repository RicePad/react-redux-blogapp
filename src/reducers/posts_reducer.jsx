import _ from 'lodash';
import { FETCH_POST, FETCH_POSTID } from '../actions/index';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POSTID:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post
            // return newState
            
            return {...state, [action.payload.data.id]: action.payload.data}
       
        case FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');
        
        
        default:
            return state;
    }
    
}