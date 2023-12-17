import './Footer.css'
import { RiMailFill, RiMapPinFill, RiPhoneFill } from 'react-icons/ri'
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title">Promo</div>
          <img src="/footer.jpg" alt="" />
          <h4>New Fashion Trends in 2023</h4>
          <p>Promo from Sep 21 2023</p>
        </div>
        <div className="footer-box">
          <div className="footer-title">Quick Links</div>
          <div className="footer-row">
            <div className="col">
              <li><a href="">Sell Online</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Categories</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Latest Trends</a></li>
            </div>
            <div className="col">
              <li><a href="">Brands</a></li>
              <li><a href="">Return</a></li>
              <li><a href="">privacy policy</a></li>
              <li><a href="">deals</a></li>
              <li><a href="">trends</a></li>
            </div>
            <div className="col">
              <li><a href="">Best sales</a></li>
              <li><a href="">new products</a></li>
              <li><a href="">contact</a></li>
              <li><a href="">Terms Service</a></li>
              <li><a href="">Latest Trends</a></li>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <h5 className="footer-title">Contact Us</h5>
          <p><span><RiMapPinFill />1737 McDonald Rd NY</span></p>
          <p><span><RiPhoneFill />123456789</span></p>
          <p><span><RiMailFill />info@website.com</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer