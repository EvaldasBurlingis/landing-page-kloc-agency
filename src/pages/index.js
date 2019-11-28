import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import HeroImage from "../components/svg/hero"
import ServicesImage from "../components/svg/services"
import Tilt from 'react-tilt'
import AccordionMenu from "../components/accordion"
import ClientsCard from "../components/cards/clients"
import TechnologiesImage from "../components/svg/technologies"

const classes = {
  section: "w-full pt-16",
  title: "font-bold text-3xl md:text-5xl text-left text-csdark mb-6 lg:text-center",
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
      <div className="hidden">
        <AccordionMenu/>
      </div>
    </section>
    <section className={classes.section}>
      <div className="container mx-auto px-4 pb-32 -mt-10">
        <h2 className={classes.title}>Some of our clients</h2>
        <ClientsCard />
      </div>
    </section>
    <section className="bg-white w-full -mt-64 pt-40 pb-32 lg:pt-64">
      <div className="container mx-auto flex flex-col px-4">
        <div className="w-full lg:w-1/2">
          <h2 className={`${classes.title}`}>About us</h2>
          <p className="font-medium mb-4">KLOC, is a vibrant software development company creating bespoke solutions, in the heart of Southern England</p>
          <p className="mb-4">We specialise in transforming business know-how into elegant software solutions, which help future-proof your business with systems 
            it needs to thrive, and functionality your customers demand. With over 30 years’ experience in development, we have a proven track 
            record of creating high-quality, cost-effective solutions and maintenance backed by expert support. We are the ideal and safe choice 
            for businesses looking for bespoke, solution development.</p>
          <p className="font-medium mb-8">If you need a dependable partner that will go the extra mile to make sure you get the solution you need, please contact us to find 
            out more about what makes us a better choice for your next project.</p>
          <p className="font-medium md:mb-8">Some of technologies we work with:</p>
          <div className="flex w-11/12">
            <TechnologiesImage />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
