import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

//class defenition

// class PhotoWall extends Component {
//     render() {
//         return (<div className="photo-grid">    
//             {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//         </div>)
//     }
// }


//stateless fucntion defenition
function PhotoWall(props) {
    return (<div className="photo-grid">
        {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePost={props.onRemovePost} />)}
    </div>)
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePost: PropTypes.func.isRequired
}

export default PhotoWall