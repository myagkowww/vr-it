import React, {useEffect, useState} from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const [isServicesModalVisible, setServicesModalVisible] = useState(false);
    const [isProductsModalVisible, setProductsModalVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuProd, setMenuProd] = useState(false);
    const [menuServ, setMenuServ] = useState(false);
    const handleToggleServicesModal = () => {
        setServicesModalVisible(!isServicesModalVisible);
        if (isProductsModalVisible) {
            setProductsModalVisible(false);
        }
    };
    const handleToggleProductsModal = () => {
        setProductsModalVisible(!isProductsModalVisible);
        if (isServicesModalVisible) {
            setServicesModalVisible(false);
        }
    };
    const handleToggleServMenu = () => {
        setMenuServ(!menuServ);
        if (menuServ){
            setMenuServ(false);
        }
    }
    const handleToggleProdMenu = () => {
        setMenuProd(!menuProd);
        if (menuProd){
            setMenuProd(false);
        }
    }
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const scrollToQuestions = () => {
        const questionsBlock = document.getElementById('questions');
        if (questionsBlock) {
            const elementPosition = questionsBlock.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);
    return (
        <>
            <div className="header">
                <div className="left-part-header">
                    <div className="logo-mini" onClick={() => { navigate('/') }}>
                        <b style={{ color: "#5CC3FD" }}>В</b><b>Р</b>
                    </div>
                    <div className="header-link" onClick={() => { navigate('/about') }}>О КОМПАНИИ</div>
                    <div
                        className="header-link"
                        onClick={handleToggleServicesModal}
                    >
                        УСЛУГИ
                        <div className={`header-arrow ${isServicesModalVisible ? 'rotated' : ''}`} id='services-arrow'></div>
                        {isServicesModalVisible && (
                            <div className="services-modal active">
                                <p>Разработка ПО</p>
                                <p>Разработка веб сервисов</p>
                                <p>Разработка мобильных приложений</p>
                            </div>
                        )}
                    </div>
                    <div
                        className="header-link"
                        onClick={handleToggleProductsModal}
                    >
                        ПРОДУКТЫ
                        <div className={`header-arrow ${isProductsModalVisible ? 'rotated' : ''}`} id='services-arrow'></div>
                        {isProductsModalVisible && (
                            <div className="services-modal active">
                                <p>Крипт.Клауд</p>
                                <p>КП-генератор</p>
                            </div>
                        )}
                    </div>
                    <div className="header-link">КЕЙСЫ</div>
                    <div className="header-link">КОНТАКТЫ</div>
                </div>
                <div className="open-icon" onClick={handleToggleMenu}></div>
            </div>

            <div className={`open-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className='menu'>
                    <div className='head-menu'>
                        <div className="logo-mini" onClick={() => { navigate('/')
                            handleToggleMenu()}}
                        >
                            <b style={{ color: "#5CC3FD" }}>В</b><b>Р</b>
                        </div>
                        <div className='icon-and-button'>
                            <button className='order-btn-menu' onClick={scrollToQuestions}>Оставить заявку</button>
                            <div className="close-icon" onClick={handleToggleMenu}></div>
                        </div>
                    </div>
                    <div className='body-menu'>
                        <div className='menu-left'>
                            <div className="menu-item" onClick={handleToggleServMenu}>
                                УСЛУГИ
                                <div className={`header-arrow ${menuServ ? 'rotated' : ''}`} id='services-arrow'></div>
                            </div>
                            {menuServ && (
                                <div className='serv-list'>
                                    <li>- Разработка ПО</li>
                                    <li>- Разработка веб-сервисом</li>
                                    <li>- Разработка мобильных приложений</li>
                                </div>
                            )}
                            <div className="menu-item" onClick={handleToggleProdMenu}>
                                ПРОДУКТЫ
                                <div className={`header-arrow ${menuProd ? 'rotated' : ''}`} id='services-arrow'></div>

                            </div>
                            {menuProd && (
                                <div className='prod-list'>
                                    <li>- Крипт.Клауд</li>
                                    <li>- КП-генератор</li>
                                </div>
                            )}
                        </div>
                        <div className='menu-right'>
                            <div className="menu-item">О КОМПАНИИ</div>
                            <div className="menu-item">КЕЙСЫ</div>
                            <div className="menu-item">КОНТАКТЫ</div>
                            <div className="menu-number">+7 (995) 668-35-84</div>
                            <div className="social-links">
                                <img src="/Pictures/tg-icon-50.svg" onClick={() =>{window.open('https://t.me/ooo_vebrazrabotka')}}/>
                                <img src="/Pictures/vk-icon-50.svg" onClick={() => {window.open('https://vk.com/vr_it_ru')}}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};
export default Header;