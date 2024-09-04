import "./footer.css"
import React from "react";
const Footer = () => {
    return(
        <div className="footer">
            <div className='footer-column'>
                <h2 className='column-title'>УСЛУГИ</h2>
                <p className=''></p>
            </div>
            <div className='footer-column'>
                <h2 className='column-title'>ПРОДУКТЫ</h2>
            </div>
            <div className='footer-column'>
                <h2 className='column-title'>КОНТАКТЫ</h2>
            </div>
            <div className='footer-column icons'>
                    <img src="/Pictures/tg-icon-50.svg" onClick={() =>{window.open('https://t.me/ooo_vebrazrabotka')}}/>
                    <img src="/Pictures/vk-icon-50.svg" onClick={() => {window.open('https://vk.com/vr_it_ru')}}/>
            </div>

        </div>
    )
}
export default Footer