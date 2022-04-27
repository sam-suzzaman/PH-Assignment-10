import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import carouselFakeData from "./../../utilities/carouselFakeData";
import "./carouselCom.css";

const CarouselCom = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselFakeData.map((item) => {
                return (
                    <Carousel.Item key={item.id}>
                        <div className="carousel-img-container">
                            <div className="overlay"></div>
                            <img
                                className="carouselImage"
                                src={item.image}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>- {item.title} -</h3>
                            <p>{item.des}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default CarouselCom;
