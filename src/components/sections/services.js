import React from "react"
import ServicesImage from "../svg/services"
import ServicesCard from "../cards/services"
import { Reveal, Animation, RevealMode } from "react-genie"
import { servicesContent } from "../../content/services"
import Wave from "../svg/wave"

const ServicesSection = () => (
  <section className="w-full pt-16 relative">
    <div className="absolute w-full hidden lg:block" style={{ top: "-8rem" }}>
      <Wave />
    </div>
    <div className="container mx-auto px-4">
      <Reveal animation={Animation.FadeInUp} mode={RevealMode.Clone}>
        <div>
          <h2 className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-center">
            How can we help you?
          </h2>
        </div>
      </Reveal>
      <div className="w-full flex flex-wrap flex-col lg:flex-row lg:pt-10">
        <div className="w-full flex items-center justify-center order-2 md:mb-8 lg:w-3/5 lg:order-1 hidden xl:inline-block">
          <Reveal animation={Animation.FadeInUp}>
            <ServicesImage />
          </Reveal>
        </div>
        {servicesContent.map(service => (
          <ServicesCard
            title={service.title}
            lead={service.lead}
            content={service.content}
            position={service.position}
          />
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection
