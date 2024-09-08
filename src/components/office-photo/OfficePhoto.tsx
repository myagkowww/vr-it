import React from "react";
import "./officephoto.css"
const OfficePhoto: React.FC = () => {
    const photos = [
        './Pictures/office-photo/img1.png',
        './Pictures/office-photo/img2.png',
        './Pictures/office-photo/img3.png',
        './Pictures/office-photo/img4.png',
        './Pictures/office-photo/img5.png',
        './Pictures/office-photo/img6.png',
        './Pictures/office-photo/img7.png',
        './Pictures/office-photo/img8.png',
    ]
    return(
        <div className='office-photo-block'>
            <h2 className='block-title'>ФОТО ОФИСА</h2>
            <div className='office-photos'>
                {photos.map((photo, index) => (
                    <img src={photo}/>
                ))}
            </div>
        </div>
    )
}
export default OfficePhoto