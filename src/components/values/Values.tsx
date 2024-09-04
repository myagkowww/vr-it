import React from "react";
import "./values.css"
const Values = () => {
    return(
        <div className="values-block">
            <h2 className="block-title">ЦЕННОСТИ КОМПАНИИ</h2>
            <div className="values">
                <div className="value">
                    <p className="value-number">/1</p>
                    <p className="value-name">ПОСТОЯННОЕ РАЗВИТИЕ И ОБУЧЕНИЕ</p>
                    <span></span>
                    <p className="value-text">Мы стремимся к постоянному росту и развитию наших сотрудников, поощряя их к обучению и самосовершенствованию.</p>
                </div>
                <div className="value">
                    <p className="value-number">/2</p>
                    <p className="value-name">ИННОВАЦИИ И ТВОРЧЕСТВО</p>
                    <span></span>
                    <p className="value-text">Мы ценим новые идеи и нестандартные подходы к решению задач, так как это помогает нам создавать лучшие продукты и услуги.</p>
                </div>
                <div className="value">
                    <p className="value-number">/3</p>
                    <p className="value-name">КОМАНДНАЯ РАБОТА</p>
                    <span></span>
                    <p className="value-text">Мы работаем вместе, чтобы достичь общих целей, и ценим сотрудничество и взаимопомощь.</p>
                </div>
                <div className="value">
                    <p className="value-number">/4</p>
                    <p className="value-name">УВАЖЕНИЕ К КЛИЕНТАМ</p>
                    <span></span>
                    <p className="value-text">Мы стремимся предоставлять качественные услуги и продукты, которые удовлетворяют потребности наших клиентов.</p>
                </div>
                <div className="value">
                    <p className="value-number">/5</p>
                    <p className="value-name">ОТКРЫТОСТЬ И ЧЕСТНОСТЬ</p>
                    <span></span>
                    <p className="value-text">Мы открыты для общения и готовы делиться своими знаниями и опытом в коллегами и партнерами.</p>
                </div>
                <div className="value">
                    <p className="value-number">/6</p>
                    <p className="value-name">ХОЧЕШЬ ПОПАСТЬ К НАМ В КОМАНДУ?</p>
                    <span></span>
                    <div className="value-order">Оставить заявку</div>
                </div>
            </div>

        </div>
    )
}
export default Values;