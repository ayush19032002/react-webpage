import { useNavigate } from "react-router-dom";
import './blog.css';
import image19 from './image/f5af78_8a0c0c7ad0524e8c9db0ea850035c1cb~mv2_d_3000_2246_s_2.jpg'
import image20 from './image/Screenshot (16).png'
import image22 from './image/f5af78_50b8941e194a4321b9f7eced71c79c19~mv2_d_3000_2246_s_2.jpg'
import image23 from './image/f5af78_5f1baf13e0f947e3a8edca6dfeb0113f~mv2_d_3000_2246_s_2.jpg'
import image24 from './image/f5af78_66f56f7fe357489697c8235685e52036~mv2_d_3000_2246_s_2.jpg'
import image25 from './image/f5af78_81b23a68d5ac4cb699ddd6f7fbd93035~mv2_d_3000_2246_s_2.jpg'
import image26 from './image/f5af78_5b1f988af8c04bffac3e77c783bc3f8e~mv2_d_3000_2246_s_2.jpg'
import image27 from './image/f5af78_2d2f28217cef4579b6235a7acf0eba71~mv2_d_3000_2246_s_2.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { BsThreeDotsVertical } from "react-icons/bs";
import image21 from './image/Screenshot (14).png'
import { CiHeart } from "react-icons/ci";



function Blog() {
    const navigate = useNavigate();
    return (
        <>
          
            <div className="blog1">
                <div className="blog2">
                    <h1>Blog</h1>
                    <p>All Posts</p>
                </div>
                <div className="blog3">
                    <button className="btn09">Log in / Sign up</button>
                </div>
            </div>
            <div className="blog4">
                <div className="blog5">
                    <img src={image19} style={{width:390 , height:358}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>The one thing I would tell to my 16 year old self</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
                <div className="blog5">
                    <img src={image21} style={{height:358 , width:390}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>Can’t stop scrolling through your friends’ feed?</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog4">
                <div className="blog5">
                    <img src={image22} style={{width:390 , height:358}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>How I stopped being afraid of being weak</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
                <div className="blog5">
                    <img src={image23} style={{height:358 , width:390}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>5 great side effects of running with music</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog4">
                <div className="blog5">
                    <img src={image24} style={{width:390 , height:358}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>5 things that would make you sleep better</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
                <div className="blog5">
                    <img src={image25} style={{height:358 , width:390}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>Detoxing my social media feed</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog4">
                <div className="blog5">
                    <img src={image26} style={{width:390 , height:358}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>Anxiety attack at workplace: do's and don’ts</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
                </div>
                <div className="blog5">
                    <img src={image27} style={{height:358 , width:390}} />
                    <div className="blog6">
                        <div className="dot08">
                            <img src={image20} />
                            <p className="text20">Admin</p>
                            <p className="text201">May 1 , 2023  - 2 min</p>
                            <div className="dot0">
                                <p className="dot" style={{marginLeft:80}}>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                        <div className="text123">
                            <p>10 signs you must be a people pleaser</p>
                            <p className="text124">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        </div>
                        <div className="main1">
                            <p>0 view</p>
                            <p className="main01">3 <CiHeart /></p>
                        </div>
                    </div>
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
      </div>
        </>
    )
}
export default Blog;