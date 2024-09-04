
import {useEffect} from "react";
import TitleAbout from "../components/title/TitleAbout";
import Values from "../components/values/Values";
import CompanyInfo from "../components/company-info/CompanyInfo";
const AboutCompany = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return(
        <>
            <TitleAbout/>
            <Values/>
            <CompanyInfo/>

        </>
    )
}
export default AboutCompany;