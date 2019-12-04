import React from "react"
import ClientsCard from "../cards/clients"
import { Reveal, Animation, RevealMode } from "react-genie"

const OurClientsSection = () => (
  <section className="w-full pt-16">
    <div className="container mx-auto px-4 pb-32 -mt-10">
      <Reveal animation={Animation.FadeInUp} mode={RevealMode.Clone}>
        <div>
          <h2 className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-left lg:text-center">
            Some of our clients
          </h2>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp}>
        <ClientsCard />
      </Reveal>
    </div>
  </section>
)

export default OurClientsSection