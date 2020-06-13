import React, { Component } from 'react';

// Inline styling
const headerStyle = {
    textAlign: 'center', 
    padding: 20, 
    background: '#000', 
    color: '#fff', 
    textTransform: 'uppercase'
}

// functional component only if we don't have state
const Header = function(){
    return(
        <div style={headerStyle}>
          Phone Directory
        </div>
    );
};

//class component only when we have state to manage
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }


export default Header;