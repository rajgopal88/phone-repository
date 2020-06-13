import React, { Component } from 'react';

// functional component only if we don't have state
const Header = function(){
    return(
        <div className="header">
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