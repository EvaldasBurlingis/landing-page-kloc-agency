import React from "react"

import TechnologiesImage from "../svg/technologies"
import GradientBlob from "../svg/blob-gradient"
import AboutImage from "../../images/about-section-image.jpg"
import { Reveal, Animation, RevealMode } from "react-genie"

const AboutSection = () => (
  <section className="bg-white w-full -mt-64 pt-40 lg:pb-56 lg:pt-64">
    <div className="container mx-auto flex flex-col px-4 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <Reveal animation={Animation.FadeInUp}>
          <div className="font-medium">
            <h2 className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-center">
              About us
            </h2>

            <p className="mb-4">
              KLOC is a vibrant software development company creating bespoke
              solutions in the heart of Southern England
            </p>
            <p className="mb-4">
              We specialise in transforming business know-how into elegant
              software solutions, which help future-proof your business with
              systems it needs to thrive, and functionality your customers
              demand. With over 30 years’ experience in development, we have a
              proven track record of creating high-quality, cost-effective
              solutions and maintenance backed by expert support. We are the
              ideal and safe choice for businesses looking for bespoke, solution
              development.
            </p>
            <p className="mb-8">
              If you need a dependable partner that will go the extra mile to
              make sure you get the solution you need, please contact us to find
              out more about what makes us a better choice for your next
              project.
            </p>
            <p className="md:mb-8">
              Some of technologies we work with:
            </p>
          </div>
        </Reveal>
        <Reveal animation={Animation.FadeInUp}>
          <div className="flex w-11/12 z-10 relative">
            <TechnologiesImage />
          </div>
        </Reveal>
      </div>
      <div className="w-full lg:w-1/2 relative mt-10 lg:pl-20">
          <div>
            <span className="w-1/3 -mt-16 hidden lg:inline-block absolute z-0">
              <GradientBlob />
            </span>
            <img
              src={AboutImage}
              alt="Woman working on a computer"
              className="w-full absolute top-0 hidden lg:inline-block rounded-lg shadow-xl"
            />
          </div>
      </div>
    </div>
  </section>
)

export default AboutSection
