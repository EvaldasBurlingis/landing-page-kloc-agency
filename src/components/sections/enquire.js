import React from "react"
import Button from "../button";

const EnquireCTASection = () => (
    <section className="bg-white py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-bold text-3xl md:text-5xl text-csdark mb-8">
                Let's talk about your project
        </h2>
            <Button variant="gradient" link="/" text="Enquire"></Button>
        </div>
    </section>
)

export default EnquireCTASection