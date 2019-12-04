import React from "react"
import ChatBoxSvg from "../svg/chatbox"
import { Reveal, Animation } from "react-genie"

const classes = {
  services: {
    title: "font-semibold text-gray-800 text-xl mb-2",
    lead: "font-medium mb-6 text-base",
    content: "font-regular text-base",
    wrapper:
      "w-full text-csdark flex flex-col justify-center bg-white p-4 rounded shadow-md hover:shadow-xl md:mb-8 lg:bg-transparent lg:shadow-none lg:p-8 mb-4",
  },
}

const FeedbackSection = () => (
  <section className={`w-full pt-16 relative -mt-4`}>
    <div className="container mx-auto px-4 pb-16 lg:pb-32">
      <h2
        className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-left lg:text-center"
      >
        Happy Clients
      </h2>
      <div>
        <div className="absolute z-0 right-0 top-0 -mt-16 mr-24 chat-box-svg">
          <ChatBoxSvg />
        </div>
        <span
          className="h-32 w-32 square-purple absolute z-0 hidden lg:inline-block"
          style={{ right: "25%", top: "25%" }}
        />
        <span
          className="h-20 w-20 square-purple absolute z-0 hidden lg:inline-block"
          style={{ right: "22%", top: "65%" }}
        />
        <span
          className="h-20 w-20 square-blue absolute z-0 hidden lg:inline-block"
          style={{ right: "40%", top: "85%" }}
        />
        <span
          className="h-32 w-32 square-blue absolute z-0 hidden lg:inline-block"
          style={{ left: "26%", top: "70%" }}
        />
        {/* customer review card*/}
        <div className="bg-white rounded-lg lg:rounded py-6 px-4 md:px-8 lg:py-8 lg:px-12 w-full lg:w-2/3 mx-auto lg:mt-16 z-10 relative text-center shadow-blue-lg">
          <Reveal animation={Animation.FadeIn}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-csblack mb-2">
              Lucy Sheehan
            </h2>
            <p
              className="text-gray-600 text-regular mb-4 lg:mb-6"
              style={{ fontSize: "14px" }}
            >
              Marketing Director
            </p>
            <p className="text-sm md:text-base text-csblack mb-6 lg:leading-relaxed text-left lg:text-center">
              We selected KLOC to build and run our Sport Relief Challenge
              website for their ability to handle the significant technical
              uncertainties of this project, while giving us the confidence that
              everything would be ready in time for Sport Relief 2016. We were
              not disappointed – KLOC Delivered, the project was a success and
              we continue to use KLOC to build integrated sites for the
              challenges that we run!
            </p>
            <p className="text-lg text-csblue font-semibold">
              Fitbit International
            </p>
          </Reveal>
        </div>
        {/* customer review card ends */}
      </div>
    </div>
  </section>
)

export default FeedbackSection