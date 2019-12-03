import React from "react"
import FitbitLogo from "../../images/fitbit.png"
import AboveTheLineLogo from "../../images/abovetheline.png"
import TheContractChairLogo from "../../images/thecontractchair.png"
import ApdoLogo from "../../images/apdologo.png"
import TravelNurseLogo from "../../images/travelnurse.png"
import StewartsLogo from "../../images/stewartslogo.jpg"

const ClientsCard = () => (
  <div className="bg-white flex flex-wrap rounded shadow-xl relative z-10">
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b hover:shadow-xl">
      <img src={FitbitLogo} className="w-40 h-auto" alt="Fitbit logo" />
    </div>
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b hover:shadow-xl">
      <img
        src={AboveTheLineLogo}
        className="w-40 h-auto"
        alt="Above The Line logo"
      />
    </div>
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-gray-200 border-b border-r md:border-r-0 hover:shadow-xl">
      <img
        src={TheContractChairLogo}
        className="w-40 h-auto"
        alt="The Contract Chair logo"
      />
    </div>
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 border-b md:border-b-0 hover:shadow-xl">
      <img src={ApdoLogo} className="w-20 h-auto" alt="Apdo logo" />
    </div>
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center border-r border-gray-200 hover:shadow-xl">
      <img
        src={TravelNurseLogo}
        className="w-32 h-auto"
        alt="Travel Nurse Logo"
      />
    </div>
    <div className="w-1/2 md:w-1/3 h-32 flex justify-center items-center hover:shadow-xl">
      <img src={StewartsLogo} className="w-40 h-auto" alt="Stewarts Logo" />
    </div>
  </div>
)

export default ClientsCard
