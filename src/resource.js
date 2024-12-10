import { useNavigate } from "react-router-dom";
import './resource.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Resource() {
    const navigate = useNavigate();
    return (
        <>
          
            <div className="res1">
                <div className="res2">
                    <p className="res02">Free Mental Health Resources & Information</p>
                    <p className="res03">When Asking a Friend Is Just Not Enough</p>
                    <p className="res04">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                </div>
                <div className="res5">
                    <h1>Websites</h1>
                    <ul>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                    </ul>
                    <h1>Organizations</h1>
                    <ul>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                    </ul>
                    <h1>Books</h1>
                    <ul>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                        <li>I’m an item. ​Click here to edit me.</li>
                    </ul>
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
export default Resource;