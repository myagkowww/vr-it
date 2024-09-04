import React, {useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./contacts.css"
const Contacts = () => {
    return (
        <div className="contacts-block">
            <h2 className="block-title">КОНТАКТЫ</h2>
            <div className="contacts">
                <div className="left-part-contacts">
                    <h3 className="contacts-company-name">
                        <b>ООО </b><b style={{color: "#5CC3FD"}}>"ВЕБ РАЗРАБОТКА"</b>
                    </h3>
                    <p className="contact-point">Почта: <b style={{color: "#5CC3FD"}}>vr-it.info@yandex.ru</b></p>
                    <p className="contact-point">Телефон: <b style={{color: "#5CC3FD"}}>+7 (995) 668-35-84</b></p>
                    <p className="contact-point" onClick={() => {window.open('https://yandex.ru/maps/50/perm/house/shosse_kosmonavtov_111d/YU8YdAdmQUIPQFttfXV4cHtlZA==/?ll=56.207688%2C57.990848&z=17.04')}}>Адрес: <b style={{color: "#5CC3FD"}}>шоссе космонавтов, д. 111д, подъезд 3,
                        оф. 3</b></p>
                    <p className="contact-point vk-link" onClick={() => {window.open('https://vk.com/vr_it_ru')}}>Мы <b style={{color: "#5CC3FD"}}>Вконтакте</b></p>
                </div>
                <div className="right-part-contacts">
                    <YMaps >
                        <Map
                            defaultState={{ center: [57.991760, 56.206878], zoom: 16,  }}
                            style={{ width: '100%', height: '100%' }}
                            defaultOptions={{
                                suppressMapOpenBlock: true,
                                autoFitToViewport: 'always',
                                yandexMapDisablePoiInteractivity: true,
                            }}
                        >
                            <Placemark
                                defaultGeometry={[57.991760, 56.206878]}
                                
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>

    );
};
export default Contacts;