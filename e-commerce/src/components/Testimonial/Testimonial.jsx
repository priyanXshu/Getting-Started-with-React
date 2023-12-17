import { RiDoubleQuotesL } from "react-icons/ri";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial">
        <div className="title">
          <h2>Testimonial</h2>
        </div>
        <div className="testimonial-container container">
            <div className="testimonial-card">
                <img src="/cstmr1.jpg" alt="" />
                <h4>Nina Williams</h4>
                <h5>CEO & Founder Ahan</h5>
                <div className="quotes">
                    <RiDoubleQuotesL />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, error?</p>
            </div>
            <div className="testimonial-card">
                <img src="/cstmr2.jpg" alt="" />
                <h4>Nina Williams</h4>
                <h5>CEO & Founder Ahan</h5>
                <div className="quotes">
                    <RiDoubleQuotesL />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, error?</p>
            </div>
        </div>
    </section>
  );
};

export default Testimonial;
