import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="">
                <video className="video-container" autoPlay={true} loop muted height={700}>
                    <source type="video/mp4" src="https://demos.artbees.net/jupiter/wp-content/uploads/2017/11/header-builder-slide.mp4" />
                </video>
                <div class="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                </div>
                <div className="">
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        )
    }
}

export default Home;