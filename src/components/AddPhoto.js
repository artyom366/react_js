import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPhoto extends Component {
    constructor() {
        super();
        this.haldleSubmit = this.haldleSubmit.bind(this);
    }

    haldleSubmit(event) {
        event.preventDefault();
        const link = event.target.link.value;
        const description = event.target.description.value;
        
        if (link && description) {
            this.props.onAddPost(link, description)
        }
    }

    render() {
        return <div className="form">
            <form onSubmit={this.haldleSubmit}>
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="Description" name="description"/>
                <button>Post</button>
            </form>
        </div>
    }
}

AddPhoto.propTypes = {
    onAddPost: PropTypes.func.isRequired
}

export default AddPhoto