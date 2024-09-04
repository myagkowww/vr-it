import React from "react";
import "./partners.css"
const Partners: React.FC = () =>  {
    const logos = [
        '/Pictures/partners-logo/moto-crm.png',
        '/Pictures/partners-logo/RA.png',
        '/Pictures/partners-logo/medlain.png',
        '/Pictures/partners-logo/gradient.png',
        '/Pictures/partners-logo/air.png',
        '/Pictures/partners-logo/perm-krai.png',
        '/Pictures/partners-logo/pgniu.png',
        '/Pictures/partners-logo/pbi.png',
        '/Pictures/partners-logo/cdp.png',
        '/Pictures/partners-logo/fotonika.png',
        '/Pictures/partners-logo/big-razvedka.png',
        '/Pictures/partners-logo/inf-razv.png',
        '/Pictures/partners-logo/perm-politeh.png',
        '/Pictures/partners-logo/morion.png',
        '/Pictures/partners-logo/ujin.png',
        '/Pictures/partners-logo/promobot.png'
    ];
    return(
        <div className="partners">
            <h2 className="block-title">ПАРТНЕРЫ</h2>
            <div className="partners-logos">
                {logos.map((logo, index) => (
                    <img className="logo" src={logo} />
                ))}
            </div>
        </div>
    )
}
export default Partners