import React from "react";
import "./service.css";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import LearningButton from "../LearningButton/LearningButton";

const Service = (props) => {
    const { image, title, des, price } = props.service;
    return (
        <div className="service-card">
            <div className="img-container">
                <img src={image} alt="serviceImage" />
            </div>
            <div className="service-card-body">
                <h4 className="card-title">{title}</h4>
                <ul className="card-list">
                    {des.map((list) => {
                        return (
                            <li>
                                <BadgeCheckIcon className="list-icon" />
                                {list}
                            </li>
                        );
                    })}
                </ul>
                <div className="course-price">
                    <h4>মূল্য-{price}</h4>
                </div>
            </div>
            <div className="service-card-footer">
                <LearningButton btnName="checkout" />
            </div>
        </div>
    );
};

export default Service;
