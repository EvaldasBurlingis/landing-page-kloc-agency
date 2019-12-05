import React from "react"
import FitbitLogo from "../../images/fitbit.png"
import AboveTheLineLogo from "../../images/abovetheline.png"
import TheContractChairLogo from "../../images/thecontractchair.png"
import ApdoLogo from "../../images/apdologo.png"
import TravelNurseLogo from "../../images/travelnurse.png"
import StewartsLogo from "../../images/stewartslogo.jpg"

const clientLogos = [
  {
    image: FitbitLogo,
    alt: "Fitbit Logo",
    container: "border-r border-gray-200 border-b",
    imageClass: "w-40 h-auto"
  },
  {
    image: AboveTheLineLogo,
    alt: "Above The Line logo",
    container: "border-r border-gray-200 border-b",
    imageClass: "w-40 h-auto"
  },
  {
    image: TheContractChairLogo,
    alt: "The Contract Chair logo",
    container: "border-gray-200 border-b border-r md:border-r-0",
    imageClass: "w-40 h-auto"
  },
  {
    image: ApdoLogo,
    alt: "Apdo logo",
    container: "border-r border-gray-200 border-b md:border-b-0",
    imageClass: "w-20 h-auto"
  },
  {
    image: TravelNurseLogo,
    alt: "Travelnurse Logo",
    container: "border-r border-gray-200",
    imageClass: "w-32 h-auto"
  },
  {
    image: StewartsLogo,
    alt: "Stewarts Coaches Logo",
    container: "",
    imageClass: "w-40 h-auto"
  },
]

const classes = {
  image: {
    container: "w-1/2 md:w-1/3 h-32 flex justify-center items-center hover:shadow-xl"
  }
}

const ClientsCard = () => (
  <div className="bg-white flex flex-wrap rounded shadow-xl relative z-10">
    {clientLogos.map(clientLogo => (
      <div className={`${classes.image.container} ${clientLogo.container}`}>
        <img src={clientLogo.image} className={clientLogo.imageClass} alt={clientLogo.alt} />
      </div>
    ))}
  </div>
)

export default ClientsCard
