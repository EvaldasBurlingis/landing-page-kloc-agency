import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import HeroImage from "../components/svg/hero"
import ServicesImage from "../components/svg/services"
import FitbitLogo from "../images/fitbit.png"
import AboveTheLineLogo from "../images/abovetheline.png"
import TheContractChairLogo from "../images/thecontractchair.png"
import ApdoLogo from "../images/apdologo.png"
import TravelNurseLogo from "../images/travelnurse.png"
import StewartsLogo from "../images/stewartslogo.jpg"
import Tilt from 'react-tilt'
import AccordionMenu from "../components/accordion"

const classes = {
  section: "w-full pt-16",
  title: "font-bold text-3xl md:text-5xl text-left text-csdark mb-6 lg:text-center lg:mb-10",
  services: {
    title: "font-semibold text-gray-800 text-xl mb-2",
    lead: "font-medium mb-6 text-base",
    content: "font-regular text-base",
    wrapper: "w-full text-csdark flex flex-col justify-center bg-white p-4 rounded shadow-md hover:shadow-xl md:mb-8 lg:bg-transparent lg:shadow-none lg:p-8 mb-4"
  },
}

const IndexPage = () => (
  <Layout>
    <section className="hero w-full bg-gradient-purple-blue">
      <div className="container mx-auto px-4 w-full h-full flex flex-col items-center justify-center relative  md:pt-20 lg:pt-0 lg:flex-row">
        <div className="w-full z-10 md:pt-0 md:w-4/5 md:mx-auto lg:w-3/5">
          <h1 className="text-4xl font-bold text-white leading-none mb-8 md:text-6xl md:mb-8">
            We are here to find solutions to your problems
          </h1>
          <p className="text-md tracking-wide text-gray-100 mb-6 md:text-lg md:mb-8">
            The KLOC development team have decades of experience building
            business applications for companies ranging from international
            publishers to mobile networks
          </p>
          <div>
            <Button variant="light" link="/" text="Learn more" />
            <Button variant="dark" link="/" text="Enquire" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center absolute top-0 left-0 z-0 opacity-25 pt-16 lg:w-2/5 lg:relative lg:opacity-100">
        <Tilt className="Tilt" options={{ max : 15, scale: 1, }} >
          <div className="Tilt-inner">
            <HeroImage />
          </div>
        </Tilt>
        </div>
      </div>
    </section>
    <section className={classes.section}>
      <div className="container mx-auto px-4">
        <h2 className={classes.title}>How can we help you?</h2>
        <div className="w-full flex flex-wrap flex-col lg:flex-row lg:pt-10">
          <div className="w-full flex items-center justify-center order-2 md:mb-8 lg:w-3/5 lg:order-1">
            <ServicesImage />
          </div>
          <div
            className={`${classes.services.wrapper}order-1 lg:w-2/5 lg:order-2 lg:pl-8`}
          >
            <h3 className={classes.services.title}>Web development</h3>
            <p className={classes.services.lead}>
              We specialise in developing bespoke and complex websites
            </p>
            <p className={classes.services.content}>
              We also provide builds on WordPress and Umbraco with the benefits
              of professional project management and dependable on-going support
            </p>
          </div>
          <div
            className={`${classes.services.wrapper} order-3 lg:w-1/3 lg:justify-start lg:mt-16`}
          >
            <h3 className={classes.services.title}>Ecommerce development</h3>
            <p className={classes.services.lead}>
              Our experience in eCommerce goes back over 20 years and we excel
              in building sites with unique workflows, rules engines and complex
              integrations
            </p>
            <p className={classes.services.content}>
              We design and build your business-critical eCommerce site with
              professional project management and follow up with excellent
              on-going support
            </p>
          </div>
          <div
            className={`${classes.services.wrapper} order-3 lg:w-1/3 lg:justify-start lg:mt-16`}
          >
            <h3 className={classes.services.title}>Membership solutions</h3>
            <p className={classes.services.lead}>
              A dedicated cloud-based solution for membership organisations and
              professional bodies
            </p>
            <p className={classes.services.content}>
              The solution is implemented as a WordPress plug-in so that owners
              can enjoy all of the rich content management features that
              WordPress offers. However, unlike many basic plug-ins, the
              features of the KLOC Membership Management System have been
              implemented to deliver rapid performance even with high-volume
              databases
            </p>
          </div>
          <div
            className={`${classes.services.wrapper} order-3 lg:w-1/3 lg:justify-start lg:mt-16`}
          >
            <h3 className={classes.services.title}>Mobile App development</h3>
            <p className={classes.services.lead}>
              We love the way a mobile app can empower your workforce. We build
              native apps that can be used to gather data in the field or
              communicate efficiently with your workforce.
            </p>
            <p className={classes.services.content}>
              To discuss your ideas for mobile app development please contact us
              for a no-obligation chat
            </p>
          </div>
        </div>
      </div>
    </section>
    <AccordionMenu/>
    <section className={classes.section}>
      <div className="container mx-auto px-4 pb-20">
        <h2 className={classes.title}>Some of our clients</h2>
        <div className="bg-white flex flex-wrap rounded shadow-lg">
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b">
            <img src={FitbitLogo} className="w-40 h-auto" alt="Fitbit logo"/>
          </div>
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b">
            <img src={AboveTheLineLogo} className="w-40 h-auto" alt="Above The Line logo"/>
          </div>
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-gray-200 border-b border-r md:border-r-0">
            <img src={TheContractChairLogo} className="w-40 h-auto" alt="The Contract Chair logo"/>
          </div>
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b md:border-b0">
            <img src={ApdoLogo} className="w-20 h-auto" alt="Apdo logo" />
          </div>
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200">
            <img src={TravelNurseLogo} className="w-32 h-auto" alt="Travel Nurse Logo"/>
          </div>
          <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center">
            <img src={StewartsLogo} className="w-40 h-auto" alt="Stewarts Logo"/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
