import React from "react";
import PageHero from "./PageHero";
import RequestQuote from "../components/RequestQuote";
import MapEmbed from "../components/MapEmbed";

const ContactPage = () => {
  return (
    <>
      <PageHero title="Contact Us" />
      <RequestQuote />
      <MapEmbed />
    </>
  );
};

export default ContactPage;
