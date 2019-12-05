import React from "react"
import Button from "../button"
import HeroImage from "../svg/hero"
import Tilt from "react-tilt"
import { Reveal, Animation } from "react-genie"

const HeroSection = () => (
    <section className="hero w-full bg-gradient-purple-blue">
    <div className="container mx-auto px-4 w-full h-full flex flex-col items-center justify-center relative  md:pt-20 lg:pt-0 lg:flex-row">
      <div className="w-full z-10 md:pt-0 md:w-4/5 md:mx-auto lg:w-3/5">
        <Reveal animation={Animation.SlideInLeft}>
          <h1 className="text-4xl font-bold text-white leading-none mb-8 md:text-6xl md:mb-8">
            We are here to find solutions to your problems
          </h1>
          <p className="text-md tracking-wide text-gray-100 mb-6 md:text-lg md:mb-8">
            The KLOC development team has decades of experience building
            business applications for companies ranging from international
            publishers to mobile networks
          </p>
          <div>
            <Button variant="light" link="/" text="Learn more" />
            <Button variant="dark" link="/" text="Enquire" />
          </div>
        </Reveal>
      </div>
      <div className="w-full flex justify-center items-center absolute top-0 left-0 z-0 opacity-25 pt-16 lg:w-2/5 lg:relative lg:opacity-100">
        <Tilt className="Tilt" options={{ max: 15, scale: 1 }}>
          <div className="Tilt-inner relative">
            <Reveal animation={Animation.SlideInRight}>
              <span className="orbit-box">
                <span className="planet"></span>
              </span>
              <span className="orbit-box-big">
                <span className="planet-big"></span>
              </span>
              <HeroImage />
            </Reveal>
          </div>
        </Tilt>
      </div>
    </div>
  </section>
)

export default HeroSection
