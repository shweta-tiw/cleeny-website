import React from "react";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import WorkingProcess from "../components/WorkingProcess";
import PortfolioPreview from "../components/PortfolioPreview";
import PricingPlan from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import BrandSection from "../components/BrandSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WorkingProcess />
      <PortfolioPreview />
      <PricingPlan />
      <Testimonials />
      <BlogPreview />
      <BrandSection />
    </>
  );
};

export default Home;
