import React from "react"
import { Link } from "gatsby"

const Button = ({ variant, link, text }) => {
  let linkStyle

  switch (variant) {
    case "dark":
      linkStyle = "bg-gray-800 text-gray-100 py-2 px-4 lg:text-xl lg:py-3 lg:px-12 mr-2"
      break
    case "light":
      linkStyle = "bg-gray-200 text-csdark py-2 px-4 lg:text-xl lg:py-3 lg:px-12 mr-2 "
      break
    case "gradient":
      linkStyle = "bg-gradient-blue text-gray-100 w-64 px-16 py-3 text-xl"
      break
    default:
      linkStyle = "bg-red-500 text-gray-100 py-2 px-4 lg:text-xl lg:py-3 lg:px-12 mr-2"
      break
  }

  return (
    <Link
      to={link}
      className={`${linkStyle} font-medium text-lg rounded`}
    >
      {text}
    </Link>
  )
}

export default Button
