import React from "react"
import { Reveal, Animation, RevealMode } from "react-genie"

const ServicesCard = ({ title, lead, content, position }) => (
  <div
    className={`w-full text-csdark flex flex-col justify-center bg-white p-4 rounded shadow-md hover:shadow-xl md:mb-8 lg:bg-transparent lg:shadow-none lg:p-8 mb-4 font-regular text-base ${position}`}
  >
    <Reveal animation={Animation.FadeInUp} mode={RevealMode.Clone}>
      <div>
        <h3 className="font-semibold text-gray-800 text-xl mb-2">{title}</h3>
        <p className="font-medium mb-6">{lead}</p>
        <p>{content}</p>
      </div>
    </Reveal>
  </div>
)

export default ServicesCard
