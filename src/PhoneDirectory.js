import React, {Component} from 'react';
import AddSubscribers from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: "Sneha",
                    phone: "123456"
                },
                {
                    id: 2,
                    name: "Raj",
                    phone: "7891011"
                } 
            ]
        }
    }

    addSubscriber = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
    };

    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function(subscriber, index){
            if(subscriber.id === subscriberId){
                subscriberIndex = index;
            }
        }, this);
        let newSubscriber = subscriberList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({subscriberList: newSubscriber});
    };

    render(){
        return(
            <Router>
                <div className="main-container">
                    <Route exact path='/' render = { (props) => <ShowSubscribers {...props} subscriberList = {this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} /> } />
                    <Route exact path='/addSubscriber' render = { ({history}, props) => <AddSubscribers history = {history} {...props} addSubscriberHandler={this.addSubscriber} /> } />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;