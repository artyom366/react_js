import React from 'react';

//class defenition


// class Header extends Component {
//     render() {
//     return <h1> {this.props.text} </h1>
//     }
// }

//stateless fucntion defenition
function Header(props) {
    return <h1> {props.text} </h1>
}


export default Header