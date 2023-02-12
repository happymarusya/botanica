import imageOne from "./contact-1.jpg";
import imageTwo from "./contact-2.jpg";
import imageThree from "./contact-3.jpg";
import imageFour from "./contact-4.jpg";

function Contact() {
    return (
        <div className="App">
            <div>
                <h2 className="navbar_list_item care">Contact us</h2>

                <h3>BOTANICA</h3>
                <br></br>
                <h3>Hilbersplein 126</h3>
                <br></br>
                <h3>1082 MM Amsterdam</h3>
                <br></br>
                <h3>botanica@gmail.com</h3>
            </div>

            <div className="contact-foto">
            <img className="imageCard contact" src={imageOne} alt="Team" width="300px" height="180px"/>
            <img className="imageCard contact" src={imageTwo} alt="Team" width="300px" height="180px"/>
            <img className="imageCard contact" src={imageFour} alt="Team" width="300px" height="180px"/>
            <img className="imageCard contact" src={imageThree} alt="Team" width="300px" height="180px"/>
            </div>
        </div>
    )
}
export default Contact;


