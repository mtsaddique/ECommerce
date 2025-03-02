import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartcontextApi } from "../context/CartContext";
import { LoginAll } from "../context/LoginContext";

function Header() {
    const [menuopen, setMenuOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { productQuantity } = useContext(CartcontextApi)
    const {setLoginCheck , loginVisible, setLoginVisible} = useContext(LoginAll)
    const handleChange = () => {
        setMenuOpen(!menuopen);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin" && password === "123456") {
            alert("Login success");
            setLoginCheck(true);
            setLoginVisible(false);
        } else {
            alert("Login failed");
        }
        setMenuOpen(false);
    };

    return (
        <>
            <div className="main-nav">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span style={{ color: "rgba(255, 0, 0, 0.877)" }}>E</span>-
                        <span style={{ color: "rgb(12, 164, 252)" }}>Commerce</span>
                    </div>
                    <div className="searchBar">
                        <input type="search" className="searchbarData" placeholder=" Search Any Product" />
                    </div>
                    <div className="nav-link">
                        <ul className={menuopen ? "show" : ""}>
                            <li className="menuItem">
                                <Link to="" className="nav-home nav-same" onClick={() => setMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="product" className="nav-about nav-same" onClick={() => setMenuOpen(false)}>
                                    Product
                                </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="user" className="nav-about nav-same" onClick={() => setMenuOpen(false)}>
                                    User
                                </Link>
                            </li>
                            <li className="menuItem">
                                <button className="nav-contact nav-same" onClick={() => setLoginVisible(true)}>
                                    Login
                                </button>
                            </li>
                            <li className="menuItem">
                                <Link to="addtocart" className="nav-contact nav-same" onClick={() => setMenuOpen(false)}>
                                    <i class="fas fa-shopping-cart">
                                        <sup style={{ fontSize: "12px", color: "white", marginLeft: "0.3rem" }}>{productQuantity}</sup>
                                    </i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    
                    <div className={menuopen ? "responsiveLogo active" : "responsiveLogo"} onClick={handleChange}>
                        <div className="topline"></div>
                        <div className="secline"></div>
                        <div className="thirdline"></div>
                    </div>
                </div>
            </div >

            {loginVisible && (
                <div className="inner_login">
                    <div className="main_login">
                        <button className="close-btn" onClick={() => setLoginVisible(false)}>✖</button>
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
                            <input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" required />
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <input type="submit" value="Login" />
                        </form>
                        <p className="bottom-text">
                            Don't have an account? <a href="#">Sign up</a>
                        </p>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default Header;
