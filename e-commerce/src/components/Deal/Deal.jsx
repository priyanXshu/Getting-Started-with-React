import './Deal.css'

const Deal = () => {
  return (
    <section id="deal">
        <div className="deal-container container">
            <div className="deal-left">
                <img src="./banner.png" alt="" />
            </div>
            <div className="deal-right">
                <h4>#Sale on Summer Collection 2023</h4>
                <h1>Up to 50% Off</h1>
                <button className="btn">Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default Deal