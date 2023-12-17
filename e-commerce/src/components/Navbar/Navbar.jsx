import { useState } from "react";
import "./Navbar.css";
import {
  RiSearchLine,
  RiUserFill,
  RiHeartFill,
  RiShoppingCartFill,
  RiMenu3Fill,
  RiCloseFill,
} from "react-icons/ri";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header>
      <nav>
        {/* For desktop */}
        <div className="tn-container container">
          <a href="" className="logo">
            Manga Kart
          </a>
          <div className="search-box">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search for Products"
            />
            <div className="search-icon">
              <RiSearchLine />
            </div>
          </div>
          <div className="tn-icons">
            <a href="">
              <RiUserFill />
            </a>
            <a className="fav-icon" href="">
              <RiHeartFill />
              <span className="count">0</span>
            </a>
            <a className="cart-icon" href="">
              <RiShoppingCartFill />
              <span className="count">0</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="bn-container container">
          <ul className="navlist">
            <li><a href="#home">home</a></li>
            <li><a href="#categories">categories</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
        {/* For mobile */}
        <div className="nm-nav">
          <div className="nm-container container">
            <a href="" className="logo">
              Manga Kart
            </a>
            <ul className="nav-menu" style={{transform: menuOpened && 'translate(0%)'}}>
              <li><a href="#home">home</a></li>
              <li><a href="#categories">categories</a></li>
              <li><a href="#shop">shop</a></li>
              <li><a href="#deal">deal</a></li>
              <li><a href="#testimonial">testimonial</a></li>
              <li><a href="#blog">blog</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
            <div className="menu-btn">
                {!menuOpened ?
                    <RiMenu3Fill size={30} onClick={()=> setMenuOpened(true)}/> : 
                    <RiCloseFill size={30} onClick={()=> setMenuOpened(false)}/>
                }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
