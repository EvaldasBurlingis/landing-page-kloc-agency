import React from "react"
import { Link } from "gatsby"

const Button = ({ variant, link, text }) => {
  let linkStyle

  switch (variant) {
    case "dark":
      linkStyle = "bg-gray-800 text-gray-100"
      break
    case "light":
      linkStyle = "bg-gray-200 text-csdark"
      break
    case "gradient":
      linkStyle = "bg-red-500 text-gray-100"
      break
    default:
      linkStyle = "bg-red-500 text-gray-100"
      break
  }

  return (
    <Link
      to={link}
      className={`${linkStyle} font-medium text-lg py-2 px-4 lg:text-xl lg:py-3 lg:px-8 rounded mr-2`}
    >
      {text}
    </Link>
  )
}

export default Button
