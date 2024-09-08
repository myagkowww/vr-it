import React from "react";
import TitleMain from "../components/title/TitleMain";
import Partners from "../components/partners/Partners";
import Services from "../components/services/Services";
import Values from "../components/values/Values";
import Cases from "../components/cases/Cases";
import Questions from "../components/questions/Questions";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import Vacancies from "../components/vacancies/Vacancies";
import Advantages from "../components/advantages/Advantages";
import Copyright from "../components/copyright/Copyright";
const MainPage = () => {
    return(
        <>
            <TitleMain/>
            <Partners/>
            <Services/>
            <Values/>
            <Cases/>
            <Vacancies/>
            <Advantages/>
            <Questions/>
            <Contacts/>
            <Footer/>
            <Copyright/>
        </>
        )
}
export default MainPage