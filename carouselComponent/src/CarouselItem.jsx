import React from 'react'

function CarouselItem ({items}) {
  return (
    <div className='carousel-item'>
        <img src={items.icon} className="carousel-img" />
        <div className="carousel-item-text">
            {items.description}
        </div>
    </div>
  )
}

export default CarouselItem