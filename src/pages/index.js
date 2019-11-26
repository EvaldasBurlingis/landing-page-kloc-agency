import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import HeroImage from "../components/svg/hero"

const IndexPage = () => (
  <Layout>
    <section className="hero w-full bg-gradient-purple-blue">
      <div className="container mx-auto px-4 w-full h-full flex items-center">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-white leading-none mb-6">We are here to find solutions to your problems</h1>
          <p className="text-lg text-gray-200 mb-6">The KLOC development team have decades of experience building business applications for companies ranging 
            from international publishers to mobile networks</p>
          <div>
            <Button variant="light" link="/" text="Learn more"/>
            <Button variant="dark" link="/" text="Enquire"/>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <HeroImage />
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
