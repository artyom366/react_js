import React, { Component } from 'react';
import Header from './Header';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };

        this.removePost = this.removePost.bind(this);
        this.addPost = this.addPost.bind(this);
        console.log('constructor')
    }

    render() {
        console.log('render')
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Header text={'Photowall'} />
                        <PhotoWall posts={this.state.posts} onRemovePost={this.removePost} />
                    </div>
                )}/>

                <Route path="/addPhoto" render={({history}) => (
                    <div>
                        <Header text={'Photowall'} />
                        <AddPhoto onAddPost={(imageLink, description) => {
                            this.addPost(imageLink, description)
                            history.push('/')
                            console.log('done')
                        }}/>
                    </div>
                )}/>
            </div>
        )
    }

    componentDidMount() {
        const data = getPostsData();
        this.setState({
            posts: data
        })
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
        console.log(this.state)
    }

    removePost(post) {
        this.setState((state, props) => ({
            posts: this.state.posts.filter(p => p.id !== post.id)
        }));
    }

    addPost(imageLink, description) {
        this.setState((state) => {
            state.posts.push({
                id: Number(new Date()),
                description: description,
                imageLink: imageLink
            })
        })

    }
}

function getPostsData() {
    return [{
        id: Number(new Date()),
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: Number(new Date()),
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
    }, {
        id: Number(new Date()),
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}

export default Main