import React from 'react'
import { Link } from "gatsby"

const Button = ({ variant, link, text }) => {
    let linkStyle;

    switch(variant) {
        case "dark":
            linkStyle = "bg-gray-800 text-gray-100 font-semibold text-xl py-3 px-8 rounded mr-2";
            break;
        case "light":
            linkStyle = "bg-gray-200 text-csdark font-semibold text-xl py-3 px-8 rounded mr-2";
            break;
        case "gradient":
            linkStyle = "bg-red-500 text-gray-100";
            break;
        default:
            linkStyle = "bg-red-500 text-gray-100";
            break;
    }


    return (
        <Link to={link} className={linkStyle}>{text}</Link>
    )
}

export default Button