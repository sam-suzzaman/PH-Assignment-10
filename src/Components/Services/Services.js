import React from "react";
import "./services.css";
import serviceFakeData from "../../utilities/serviceFakeData";
import Service from "../Service/Service";
import FancyTitle from "../FancyTitle/FancyTitle";

const Services = () => {
    return (
        <section className="service-container">
            <FancyTitle firstPart={"serv"} secondPart={"ices"} />
            <div className="services">
                {serviceFakeData.map((service) => {
                    return <Service key={service.id} service={service} />;
                })}
            </div>
        </section>
    );
};

export default Services;
