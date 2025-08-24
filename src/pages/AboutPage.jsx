import React from "react";
import PageHero from "./PageHero";
import AboutPreview from "../components/AboutPreview.jsx";
import WorkProcessPreview from "../components/WorkingProcess.jsx";
import TeamSection from "../components/TeamSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactPreview from "../components/ContactPreview.jsx";

const AboutPage = () => {
  return (
    <>
      <PageHero title="About Us" extraClass="pt-28 md:pt-32" />
      <AboutPreview />
      <WorkProcessPreview />
      <TeamSection />
      <Testimonials />
    </>
  );
};

export default AboutPage;
