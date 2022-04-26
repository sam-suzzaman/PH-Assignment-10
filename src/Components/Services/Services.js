import React from "react";
import "./services.css";
import serviceFakeData from "../../utilities/serviceFakeData";
import Service from "../Service/Service";

const Services = () => {
    return (
        <section className="service-container">
            <h2 className="sec-title">
                --- ser<span className="fancy-text">vices</span> ---
            </h2>
            <div className="services">
                {serviceFakeData.map((service) => {
                    return <Service key={service.id} service={service} />;
                })}
            </div>
        </section>
    );
};

export default Services;
