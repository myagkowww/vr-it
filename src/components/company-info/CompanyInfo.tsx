import "./companyinfo.css"
const CompanyInfo = () => {
    return(
        <div className="about-company">
            <h2 className="block-title">О КОМПАНИИ</h2>
            <div className="mission">
                <div className="row-title">
                    <div className="our-and-row">
                        <p>НАША</p>
                        <span></span>
                    </div>
                    <p>МИССИЯ</p>
                </div>
                <div className="row-text">Обеспечить доступ к качественному, надежному и значимому программному обеспечению для граждан РФ. Мы стремимся к созданию продуктов, которые упрощают жизнь людей, делают ее более комфортной и безопасной.</div>
                <img src="/Pictures/about-company/img1.png"/>
            </div>
            <div className="purpose">
                <img src="/Pictures/about-company/img2.png"/>
                <div className="purpose-title-text">
                    <div className="purpose-title">
                        <p>НАША ЦЕЛЬ</p>
                        <span></span>
                    </div>
                    <div className="purpose-text">
                        Мы ставим перед собой цель стать лидерами в сфере разработки отечественного ПО, обеспечивая независимость нашей страны от иностранных
                        IT-решений.
                    </div>
                </div>
            </div>
            <div className="mind">
                <div className="row-title">
                    <div className="our-and-row">
                        <p>НАШЕ</p>
                        <span></span>
                    </div>
                    <p>МЫШЛЕНИЕ</p>
                </div>
                <div className="mind-text">
                    <p>Компания ВР — это не просто разработчик программного обеспечения, это образ мышления, который позволяет видеть перспективы в любой проблеме и экспериментировать с разными подходами. Мы уверены, что всё вокруг создано людьми, которые не умнее нас, и это мотивирует нас к постоянным инновациям и изобретениям.</p>
                    <p>Наша команда состоит из любознательных и уверенных в себе специалистов, которые готовы разбираться в сложных вопросах и находить нестандартные решения. Мы смотрим на мир с другой стороны и видим возможности там, где другие видят только проблемы.</p>
                </div>
            </div>
            <img className="morion-bg" src="/Pictures/about-company/img3.png"/>
            <div className="mind-text">
                <p>ВР помогает своим клиентам и партнёрам преодолевать трудности и достигать успеха, используя передовые технологии и инновационные подходы. Мы стремимся быть лидерами в своей отрасли и постоянно совершенствуем свои продукты и услуги, чтобы соответствовать потребностям рынка.</p>
                <p>ВР — это образ мышления!</p>
            </div>
        </div>
    )
}
export default CompanyInfo