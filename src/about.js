import { useNavigate } from "react-router-dom";
import image8 from './image/about_page_image.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function About() {
    const navigate = useNavigate();
    return (
        <>
           
            <div className="about1">
                <div className="about0">
                    <img src={image8} />
                </div>

                <div className="about2">
                    <h4>Hi, I’m Dena</h4>
                    <p className="para3">A mental health blogger. Passionate about sharing thoughts and information on everything that makes my days better.</p>
                    <p className="para4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​</p>
                    <p className="para4">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </p>

                </div>
            </div>
            <div className="foot1">
            <div className="foot2">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <p className="para5">Inner Pieces</p>
                <p className="para6">123-456-7890</p>
                <p className="para7">info@mysite.com</p>
                <p className="para8">© 2035 by Inner Pieces. Powered and secured by Wix</p>
            </div>
            <div className="join002">
                <div className="join12">
                    <h5>Contact </h5>
                    <p>Ask me anything</p>
                </div>
                <div className="form012">
                    <div>
                        <label htmlFor="name">First Name*</label>
                        <input type="text" id="name" name="name" placeholder="Enter yuor first name" />
                    </div>
                    <div>
                        <label htmlFor="name">Last Name*</label>
                        <input type="text" id="name" name="name" placeholder="Enter yuor last name" />
                    </div>
                </div>
                <div className="form022">
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" placeholder="Enter yuor email address" />
                    </div>
                </div>
                <div className="btn1211">
                    <button>Subscribe</button>
                </div>
            </div>
        </div >
        </>
    )
}
export default About;