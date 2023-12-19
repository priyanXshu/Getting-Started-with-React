import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("./Media/media1.svg"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits.",
      icon: require("./Media/media2.svg"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: require("./Media/media3.svg"),
    },
  ];
  const updateIndex = (newIndex) => {
    if(newIndex < 0){
        newIndex = items.length - 1;
    } else if(newIndex >= items.length){
        newIndex = 0
    }
    setActiveIndex(newIndex)
  }
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} items={item} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button onClick={() => {
            updateIndex(activeIndex - 1);
        }} className="button-arrow">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button onClick={() => {
                updateIndex(index)
              }} className="indicator-buttons">
                <span className={`material-symbols-outlined ${index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'}`}>
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button onClick={() => {
            updateIndex(activeIndex + 1);
        }} className="button-arrow">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
