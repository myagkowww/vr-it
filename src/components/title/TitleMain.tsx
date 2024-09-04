import React from "react";
import "./title.css"
const TitleMain = () => {
    return(
        <div className="title">
            <h1 className="corp-name">
                <b style={{ color: "#5CC3FD" }}>В</b><b>Р</b>
            </h1>
            <div className="title-first-text">
                <p>НОВЫЙ ВЗГЛЯД НА</p>
                <p>ЦИФРОВОЙ МИР</p>
            </div>
            <div className="title-second-text">
                <p>Разработка российского ПО и Веб-сервисов, не зависящих от иностранных решений</p>
            </div>
            <div className="title-order">Оставить заявку</div>
        </div>
    )
}
export default TitleMain;