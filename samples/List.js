import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
        <ol>
            {this.props.list.map((element, index) => <li key = {index}> {element} </li>)}
        </ol>
        )
    }
}

export default List