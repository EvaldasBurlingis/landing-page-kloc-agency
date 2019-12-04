import React from "react"
import Carousel from "nuka-carousel"
import TestimonialCard from "./cards/testimonial"
import { CustomerFeedbackData } from "../content/customerFeedback"

const FeedbackCarousel = () => (
  <Carousel
    autoplay={true}
    withoutControls={false}
    autoplayInterval={2500}
    pauseOnHover={true}
    wrapAround={true}
  >
    {CustomerFeedbackData.map(testimonial => (
      <TestimonialCard
        key={testimonial.name + testimonial.position}
        name={testimonial.name}
        position={testimonial.position}
        testimonial={testimonial.review}
        company={testimonial.company}
      />
    ))}
  </Carousel>
)

export default FeedbackCarousel
