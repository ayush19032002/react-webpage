import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import image1 from './image/84770f_231a1c5c6e1d48e5a425809e93319bdc~mv2.jpg'
import image2 from './image/f5af78_81b23a68d5ac4cb699ddd6f7fbd93035~mv2_d_3000_2246_s_2.jpg'
import image3 from './image/f5af78_8a0c0c7ad0524e8c9db0ea850035c1cb~mv2_d_3000_2246_s_2.jpg'
import image4 from './image/f5af78_9340967f266a43d1a4be9b8628a4cf31~mv2_d_3000_2246_s_2.jpg'
import image5 from './image/f5af78_50b8941e194a4321b9f7eced71c79c19~mv2_d_3000_2246_s_2.jpg'
import image6 from './image/f5af78_5f1baf13e0f947e3a8edca6dfeb0113f~mv2_d_3000_2246_s_2.jpg'
import image7 from './image/f5af78_66f56f7fe357489697c8235685e52036~mv2_d_3000_2246_s_2.jpg'
import image8 from './image/about_HP_image.jpg'
import image9 from './image/Screenshot (4).png'
import image10 from './image/Screenshot (7).png'
import image11 from './image/Screenshot (8).png'
import image12 from './image/Screenshot (9).png'
import image13 from './image/Screenshot (10).png'
import image14 from './image/Screenshot (11).png'
import image15 from './image/Screenshot (12).png'
import image16 from './image/Screenshot (13).png'
import image17 from './image/Screenshot (14).png'
import image18 from './image/Screenshot (15).png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function App() {
  const navigate = useNavigate();
  return (
    <div className="App">

      <div className="ab1">
        <div className="ab2">
          <img src={image1} />
        </div>
        <div className="ab3">
          <h2>My Thoughts</h2>
          <img src={image2} />
          <p className="para0">Detoxing my social media feed</p>
          <p className="para1">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
          <button className="btn0">All Posts</button>
        </div>
      </div>
      <div className="container p-4">
        <h3 style={{ textAlign: 'center' }}>Recents Posts</h3>
        <div className="recent2">
          <div className="rent01">
            <img src={image3} />
          </div>
          <div className="rent02">
            <p className="para2">May 1, 2023 - 2 min</p>
            <p className="text10">The one thing I would tell to my 16 year old self</p>
            <p className="text11">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <p className="text12">0 Comments</p>
          </div>
        </div>
        <div className="recent2">
          <div className="rent01">
            <img src={image4} />
          </div>
          <div className="rent02">
            <p className="para2">May 1, 2023 - 2 min</p>
            <p className="text10">Can’t stop scrolling through your friends’ feed?</p>
            <p className="text11">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <p className="text12">0 Comments</p>
          </div>
        </div>
        <div className="recent2">
          <div className="rent01">
            <img src={image5} />
          </div>
          <div className="rent02">
            <p className="para2">May 1, 2023 - 2 min</p>
            <p className="text10">How I stopped being afraid of being weak</p>
            <p className="text11">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <p className="text12">0 Comments</p>
          </div>
        </div>
        <div className="recent2">
          <div className="rent01">
            <img src={image6} />
          </div>
          <div className="rent02">
            <p className="para2">May 1, 2023 - 2 min</p>
            <p className="text10">5 great side effects of running with music</p>
            <p className="text11">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <p className="text12">0 Comments</p>
          </div>
        </div>
        <div className="recent2">
          <div className="rent01">
            <img src={image7} />
          </div>
          <div className="rent02">
            <p className="para2">May 1, 2023 - 2 min</p>
            <p className="text10">5 things that would make you sleep better</p>
            <p className="text11">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <p className="text12">0 Comments</p>
          </div>
        </div>
      </div>
      <div className="content0">
        <div className="content1">
          <p className="text1">” I always get to where I’m going by walking away from where I have been.”</p>
          <p className="text2">― Winnie the Pooh, A.A. Milne</p>
        </div>
        <div className="content2"></div>
      </div>
      <div className="about1">
        <div className="about0">
          <img src={image8} />
        </div>

        <div className="about2">
          <h4 >Hi, I’m Dena</h4>
          <p className="para3">A mental health blogger. Passionate about sharing thoughts and information on everything that makes my days better.</p>
          <p className="para4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="always1">
        <div className="always2">
          <h5>Always Makes Me Smile</h5>
        </div>
        <div className="img23">
          <img src={image9} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
        </div>
        <div className="img23">
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
          <img src={image17} />
          <img src={image18} />
        </div>
      </div>
      <div className="join">
        <div className="join1">
          <h5>Join the Conversations</h5>
          <p>Get the content you need, just when you need it</p>
        </div>
        <div className="form01">
          <div>
            <label htmlFor="name">First Name*</label>
            <input type="text" id="name" name="name" placeholder="Enter yuor first name" />
          </div>
          <div>
            <label htmlFor="name">Last Name*</label>
            <input type="text" id="name" name="name" placeholder="Enter yuor last name" />
          </div>
        </div>
        <div className="form02">
          <div>
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Enter yuor email address" />
          </div>
        </div>
        <div className="btn12">
          <button>Subscribe</button>
        </div>
      </div>
      <div className="foot1" id='hello'>
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
      </div>
    </div>
  );
}

export default App;
