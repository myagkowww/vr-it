
import {useEffect} from "react";
import TitleAbout from "../components/title/TitleAbout";
import Values from "../components/values/Values";
import CompanyInfo from "../components/company-info/CompanyInfo";
import Expertise from "../components/expertise/Expertise";
import Cases from "../components/cases/Cases";
import Partners from "../components/partners/Partners";
import OfficePhoto from "../components/office-photo/OfficePhoto";
import WeAreResidents from "../components/we-are-residents/WeAreResidents";
import Services from "../components/services/Services";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import Copyright from "../components/copyright/Copyright";
const AboutCompany = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return(
        <>
            <TitleAbout/>
            <Values/>
            <CompanyInfo/>
            <Expertise/>
            <Cases/>
            <Partners/>
            <OfficePhoto/>
            <WeAreResidents/>
            <Services/>
            <Contacts/>
            <Footer/>
            <Copyright/>
        </>
    )
}
export default AboutCompany;