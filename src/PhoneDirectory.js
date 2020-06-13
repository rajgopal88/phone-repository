import React, {Component} from 'react';
import AddSubscribers from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

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
        console.log(this.state);
    };

    render(){
        return(
            // <AddSubscribers addSubscriberHandler={this.addSubscriber}/>
            <ShowSubscribers subscriberList = {this.state.subscriberList}/>
        )
    }
}

export default PhoneDirectory;