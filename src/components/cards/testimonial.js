import React from 'react'

const TestimonialCard = ({ name, position, testimonial, company }) => (
  <div className="">
    <h2 className="text-3xl lg:text-4xl font-semibold text-csblack mb-2">
      {name}
    </h2>
    <p
      className="text-gray-600 text-regular mb-4 lg:mb-6"
      style={{ fontSize: "14px" }}
    >
      {position}
    </p>
    <p className="text-sm md:text-base text-csblack mb-6 lg:leading-relaxed text-left lg:text-center">
     {testimonial}
    </p>
    <p className="text-lg text-csblue font-semibold mb-2">{company}</p>
  </div>
)

export default TestimonialCard