import React, { Component } from 'react';
import './Header.css'

// Inline styling
// const headerStyle = { textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' }

// functional component only if we don't have state
const Header = function(props){
    return(
        <div className="header">
          {props.heading}
        </div>
    );
};

//class component only when we have state to manage
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }


export default Header;