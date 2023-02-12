import React from "react";
import video from './videoPlant.mp4'
 
function Video() {
    return (
        <div>
            <div className="main">
                <video autoplay muted loop height="400px">
                    <source src={video} type="video/mp4"/>
                </video>

                <div className="content">
                    <h1>Botanica</h1>
                    <h3 className="top">Find the most beautiful houseplants</h3>
                    <a className='top-button' href= "#down" >Shop now</a>
                </div>
            </div>

        </div>
    )
}
export default Video;
