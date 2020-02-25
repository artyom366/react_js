import React from 'react';
import PropTypes from 'prop-types';

//class defenition

// class Photo extends Component {
//     render() {
//         const post = this.props.post

//         return (
//         <figure className="figure">
//             <img className="photo" src={post.imageLink} alt={post.description}/>
//             <figcaption><p> {post.description} </p></figcaption>
//             <div className="button-container">
//                 <button className="remove-button">Remove</button>
//             </div>
//         </figure>
//         )
//     }
// }

//stateless fucntion defenition
function Photo(props) {
    const post = props.post

    return (
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p> {post.description} </p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick = {() => {
                    props.onRemovePost(post)
                }}>Remove</button>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePost: PropTypes.func.isRequired
}

export default Photo