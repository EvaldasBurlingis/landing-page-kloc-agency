import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import HeroSection from "../components/sections/hero"
import ServicesSection from "../components/sections/services"
import OurClientsSection from "../components/sections/clients"
import AboutSection from "../components/sections/about"
import FeedbackSection from "../components/sections/feedback"
import { RevealGlobalStyles } from "react-genie"

const classes = {
  section: "w-full pt-16",
  title:
    "font-bold text-3xl md:text-5xl text-csdark mb-6",
  services: {
    title: "font-semibold text-gray-800 text-xl mb-2",
    lead: "font-medium mb-6 text-base",
    content: "font-regular text-base",
    wrapper:
      "w-full text-csdark flex flex-col justify-center bg-white p-4 rounded shadow-md hover:shadow-xl md:mb-8 lg:bg-transparent lg:shadow-none lg:p-8 mb-4",
  },
}

const IndexPage = () => (
  <Layout>
    <RevealGlobalStyles />
    <HeroSection />
    <ServicesSection />
    <OurClientsSection/>
    <AboutSection />
    <FeedbackSection />
    <section className={`${classes.section} bg-white`}>
      <div className="container mx-auto px-4 pb-16 text-center">
        <h2 className={`${classes.title} mb-8`}>
          Let's talk about your project
        </h2>
        <Button variant="gradient" link="/" text="Enquire"></Button>
      </div>
    </section>
  </Layout>
)

export default IndexPage
