import './App.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <nav class="navbar navbar-expand-xl navbar-dark bg-gray-400 " style={{marginLeft:"10%"}}>
                <a class="navbar-brand" href="#">
                    <div className="header">
                        <h1>Inner Pieces</h1>
                        <p>Thoughts on Lifestyle & Mental Health</p>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#colNav">
                    <span class="navbar-toggler-icon" style={{ color: "white", backgroundColor: "black" }}></span>
                </button>
                <div class="collapse navbar-collapse " id="colNav">
                    <div className="headyu" style={{ marginLeft: "10%", display: "flex", justifyContent: "space-evenly" }}>
                        <ul class="navbar-nav text-white gap-4">
                            <div className="head1">
                                <li class="nav-item">
                                    <button onClick={() => navigate("/home")} className="a01">Home</button>
                                </li>
                                <li class="nav-item">
                                    <button onClick={() => navigate("/blog")}>Blog</button>
                                </li>
                                <li class="nav-item">
                                    <button onClick={() => navigate("/about")}>About</button>
                                </li>
                                <li class="nav-item">
                                    <button onClick={() => navigate("/resource")}>Resource</button>
                                </li>
                                <li class="nav-item" style={{marginTop:"2%"}}>
                                    <a href='#hello' >contact</a>
                                    <button onClick={() => navigate("/contact")}></button>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav >




        </>
    );
}

export default Header;
