import React from 'react'
import JumbotronComponent from '../Components/JumbotronComponent'
import FooterPartial from '../Partials/FooterPartial'
import NavbarPartial from '../Partials/NavbarPartial'
import AboutSection from '../Sections/AboutSection'
import AchievementSection from '../Sections/AchievementSection'
import AddressSections from '../Sections/AddressSection'
// import AllSkillSection from '../Sections/AllSkillSection'
import ContactSection from '../Sections/ContactSection'
// import MainSkillSection from '../Sections/MainSkillSection'
import PortofolioSection from '../Sections/PortofolioSection'

function HomePage(prop) {

    const hrStyle = {
        background: '#242526'
    }

    return(
        <>
            <section className="mb-5">
                <NavbarPartial />
            </section>
            <section className="mb-5">
                <JumbotronComponent />
            </section>
            <section className="mb-5" id="about">
                <AboutSection />
            </section>
            <hr style={hrStyle} />
            <section className="mb-5" id="portofolio">
                <PortofolioSection />
            </section>
            <hr style={hrStyle} />
            <section className="mb-5" id="achievement">
                <AchievementSection />
            </section>
            <hr style={hrStyle} />
            {/* <section className="mb-5">
                <MainSkillSection />
            </section>
            <hr style={hrStyle} /> */}
            {/* <section className="mb-5" id="skill">
                <AllSkillSection />
            </section> */}
            <hr style={hrStyle} />
            <section className="mb-5" id="address">
                <AddressSections />
            </section>
            <hr style={hrStyle} />
            <section className="mb-5" id="contact">
                <ContactSection />
            </section>
            <section className="mt-5">
                <FooterPartial />
            </section>
        </>
    )
}

export default HomePage