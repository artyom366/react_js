import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom'
import './styles/stylesheet.css';

//const list = ['one', 'two', 'three', 'two'];

// const listElement = React.createElement('ol', null, 
//     list.map((item, index) => React.createElement('li', {key: index}, item))
// );

// const listElement = 
//     <div>
//         <h1>List</h1>
//         <ol> 
//             {list.map((element, index) => <li key = {index}> {element} </li>) }
//         </ol>
//     </div>
        
// class List extends Component {
//     render() {
//         return(
//             <ol> 
//                 {list.map((element, index) => <li key = {index}> {element} </li>) }
//             </ol>  
//         )
//     }
// }

// class Header extends Component {
//     render() {
//         return (<h1>List</h1>)
//     }
// }

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
