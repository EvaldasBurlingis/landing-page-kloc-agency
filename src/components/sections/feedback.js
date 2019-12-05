import React from "react"
import ChatBoxSvg from "../svg/chatbox"
import FeedbackCarousel from "../feedbackCarousel"
import Wave from "../svg/wave";

const FeedbackSection = () => (
  <section className="w-full pt-16 relative -mt-4">
    <div className="absolute w-full hidden lg:block" style={{top: "-6rem"}}>
      <Wave />
    </div>
    <div className="container mx-auto px-4 pb-16 lg:pb-32">
      <h2 className="font-bold text-3xl md:text-5xl text-csdark mb-6 text-center">
        Happy Clients
      </h2>
      <div>
        <div className="absolute z-0 right-0 top-0 -mt-20 mr-24 chat-box-svg">
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
        <div className="bg-white rounded-lg lg:rounded py-12 px-4 md:px-8 lg:py-12 lg:px-12 w-full lg:w-2/3 mx-auto lg:mt-16 z-10 relative text-center shadow-blue-lg">
          <FeedbackCarousel />
        </div>
      </div>
    </div>
  </section>
)

export default FeedbackSection