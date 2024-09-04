import React from "react";
import "./cases.css"
import cases from "../../mock/cases";
import {useNavigate} from "react-router-dom";
const Cases = () => {
    const navigate = useNavigate()
    return(
        <div className="cases-block">
            <h2 className="block-title">КЕЙСЫ</h2>
            <div className="cases">
                {cases.map(caseItem => (
                    <div className="case-link">
                        <div className="case">
                            <p className='vr-in-case'><b style={{color: '#3FB1F2'}}>В</b>Р</p>
                            <p className='case-title'>{caseItem.title}</p>
                            <p className='hashtag-case'>#ВЕБРАЗРАБОТКА</p>
                        </div>
                        <div className='link-and-description'>
                            <div className='link-nda'>
                                <div className='link'>
                                    <div className='link-and-button' onClick={() => {navigate(`${caseItem.link}`)}}>
                                        <p className='link-name'>{caseItem.shortName}</p>
                                        <div className='link-btn' >→</div>
                                    </div>
                                </div>
                                {caseItem.ps && (
                                    <p className="case-ps">{caseItem.ps}</p>
                                )}
                            </div>
                            <p className='description'>{caseItem.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cases;