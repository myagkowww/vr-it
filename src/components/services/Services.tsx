import React from "react";
import services from "../../mock/services";
import "./services.css"
const Services = () => {
    return(
        <div className="service-block">
            <h2 className="block-title">УСЛУГИ</h2>
            <div className="services">
                {services.map(service => (
                    <div className="service">
                        <p className="card-logo-corp"><b style={{ color: "#5CC3FD" }}>В</b><b>Р</b></p>
                        <p className="service-name">{service?.name}</p>
                        <div className="card-order">Оставить заявку</div>
                        <p className="hashtag">#ВЕБРАЗРАБОТКА</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Services;