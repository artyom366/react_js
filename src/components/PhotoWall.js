import React from 'react';
import Photo from './Photo';

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

export default PhotoWall