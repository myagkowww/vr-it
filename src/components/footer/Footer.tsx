import "./footer.css"
import React from "react";
const Footer = () => {
    return(
        <div className="footer">
            <div className='footer-column'>
                <h2 className='column-title'>УСЛУГИ</h2>
                <p className='column-point'>Разработка ПО</p>
                <p className='column-point'>Разработка мобильных приложений</p>
                <p className='column-point'>Разработка веб-сервисов</p>
            </div>
            <div className='footer-column'>
                <h2 className='column-title'>ПРОДУКТЫ</h2>
                <p className='column-point'>Крипт.Клауд</p>
                <p className='column-point'>КП-генератор</p>
            </div>
            <div className='footer-column'>
                <h2 className='column-title'>КОНТАКТЫ</h2>
                <p className='column-point'>+7 (995) 668-35-84</p>
                <p className='column-point'>info@вр-ит.рф</p>
            </div>
            <div className='footer-column icons'>
                    <img src="/Pictures/tg-icon-50.svg" onClick={() =>{window.open('https://t.me/ooo_vebrazrabotka')}}/>
                    <img src="/Pictures/vk-icon-50.svg" onClick={() => {window.open('https://vk.com/vr_it_ru')}}/>
            </div>

        </div>
    )
}
export default Footer