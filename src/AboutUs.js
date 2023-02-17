import image from "./aboutus.jpg";

function AboutUs() {
    return (
        <div>
            <div className="App">
                <h2 className="navbar_list_item care">About us</h2>
            </div>

            <div className="about-container">
                <div className="about-foto">
                    <img className="imageCard about" src={image} alt="Team" width="600px"/>
                </div>
                <div className="about-text">
                    <p className="small">Our webshop started as the graduation product of three founders Daniel, Frederik and Maria. Botanica is here to make your relationship with plants easier. We are at your service every day to meet your needs.</p> 
                    <p className="small">Looking for an indoor plant? Or a terrarium? Take a look at our collection! Not looking for a plant, but interested in information? We are also happy to answer these needs.</p>
                    <p className="small">Taking care of indoor plants can be quite difficult. Just think of root rot, mourning flies or yellow leaves. We know all about it! Our website is full of tips, inspiration and useful facts about how to propagate an indoor plant. You can always email our customer service, we are happy to help you!</p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;