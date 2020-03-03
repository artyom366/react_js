import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'

import {BrowserRouter} from 'react-router-dom'

import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'

import './styles/stylesheet.css'

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

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>, document.getElementById('root'));
