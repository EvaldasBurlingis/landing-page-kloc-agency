import React from "react"
import ServicesImage from "../svg/services"
import ServicesCard from "../cards/services"
import AccordionMenu from "../accordion"
import { Reveal, Animation, AnimatedTitle} from "react-genie"
import { servicesContent } from "../../content/services"

const ServicesSection = () => (
  <section className="w-full pt-16">
    <div className="container mx-auto px-4">
      <AnimatedTitle className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-left lg:text-center">
        How can we help you?
      </AnimatedTitle>
      <div className="w-full flex flex-wrap flex-col lg:flex-row lg:pt-10">
        <div className="w-full flex items-center justify-center order-2 md:mb-8 lg:w-3/5 lg:order-1 hidden xl:inline-block">
          <Reveal animation={Animation.FadeInUp}>
            <ServicesImage />
          </Reveal>
        </div>
        <ServicesCard
          title={servicesContent.web.title}
          lead={servicesContent.web.lead}
          content={servicesContent.web.content}
          position={
            "order-1 lg:w-1/2 xl:w-2/5 lg:justify-start xl:order-2 xl:pl-8"
          }
        />
        <ServicesCard
          title={servicesContent.ecommerce.title}
          lead={servicesContent.ecommerce.lead}
          content={servicesContent.ecommerce.content}
          position={"order-3 lg:w-1/2 xl:w-1/3 lg:justify-start xl:mt-16"}
        />
        <ServicesCard
          title={servicesContent.membership.title}
          lead={servicesContent.membership.lead}
          content={servicesContent.membership.content}
          position={"order-3 lg:w-1/2 xl:w-1/3 lg:justify-start xl:mt-16"}
        />
        <ServicesCard
          title={servicesContent.mobile.title}
          lead={servicesContent.mobile.lead}
          content={servicesContent.mobile.content}
          position={"order-3 lg:w-1/2  xl:w-1/3 lg:justify-start xl:mt-16"}
        />
      </div>
    </div>
    {/* TODO: FIX ACCORDION */}
    <div className="hidden">
      <AccordionMenu />
    </div>
  </section>
)

export default ServicesSection