import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/sections/hero"
import ServicesSection from "../components/sections/services"
import OurClientsSection from "../components/sections/clients"
import AboutSection from "../components/sections/about"
import FeedbackSection from "../components/sections/feedback"
import EnquireCTASection from "../components/sections/enquire"
import { RevealGlobalStyles } from "react-genie"

const IndexPage = () => (
  <Layout>
    <RevealGlobalStyles />
    <HeroSection />
    <ServicesSection />
    <OurClientsSection />
    <AboutSection />
    <FeedbackSection />
    <EnquireCTASection />
  </Layout>
)

export default IndexPage
