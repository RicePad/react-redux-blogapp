/* global id */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addReminder,  deleteReminder } from '../actions';
import moment from 'moment';



class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          text: '',
          dueDate: ''
            
        };
        
    }
    
    addReminder(){
        // console.log("this", this);
       console.log('this.state.dueDate', this.state.dueDate);
       this.props.addReminder(this.state.text, this.state.dueDate);
    }
    
    deleteReminder(id){
        // console.log('deleting application', id);
        // console.log('this.props', this.props);
        this.props.deleteReminder(id);
        
    }
    
    
    renderReminders(){
        const { reminders } = this.props;
        console.log('reminders', reminders);
        
        return(
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        
                        return(
                             <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div> { reminder.text }</div>
                                    <div><em>{moment( new Date(reminder.dueDate)).fromNow()}</em></div>
                                    

                                </div>
                                <div className="list-item delete-button"
                                     onClick={() => this.deleteReminder(reminder.id)}

                                >
                                    &#x2715; 
                                </div>
                            </li>
                        
                        
                        );
                        
                    })
                    
                    
                    
                    
                }
            
            
            </ul>
            
            
            )
        
        
        
    }
    
    render(){
        // console.log('this.props', this.props);
        
        return(
                <div className="App">
                    <div className="title">
                       My Daily Reminder Pro
                    </div>
                    <div className="form-inline reminder-form">
                        <div className="form-group">
                            <input 
                                className="form-control"
                                placeholder="I have to..."
                                onChange = {(event) => { this.setState({text: event.target.value})}}
                                onKeyPress = {event => {
                                    if (event.key === 'Enter'){
                                      this.addReminder();
                                    }
                                  }}
                            
                            />
                            <input 
                                className="form-control"
                                type="datetime-local"
                                onChange={(event) => {this.setState({dueDate: event.target.value})}}
                                
                            />
                        
                        </div>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => this.addReminder()}
                        > Add Reminder</button>
                    </div>
                    
                    { this.renderReminders() }
                </div>

            );
        
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(addReminder, dispatch);  
    
}


function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);