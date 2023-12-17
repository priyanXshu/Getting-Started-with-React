import CountUp from 'react-countup'
import './Hero.css'
import { jacketsData } from '../../constants'
import jacket1 from '/jacket1.png'
import JacketCard from '../../comps/JacketCard'
import { useState } from 'react'

const Hero = () => {
  const [jacketImg, setjacketImg] = useState(jacket1)
  return (
    <section id='hero'>
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Finding Your Perfect Items</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <button className="btn">Shop Now</button>
          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={1400} end={1500} duration={4}/>
                <p>+</p>
              </span>
              <span>Brands</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={350} end={500} duration={4}/>
                <p>+</p>
              </span>
              <span>Outlets</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={98700} end={99000} duration={4}/>
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={jacketImg} alt="" />
          <div className="hero-right-container">
            {
              jacketsData.map((jacket, i) => (
                <div key={i}>
                  <JacketCard 
                    imgURL={jacket}
                    changeJacketImage={(jacket) => setjacketImg(jacket)}
                    jacketImg={jacketImg}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero