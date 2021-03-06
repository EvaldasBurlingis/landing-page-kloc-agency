import React from "react"
import { Link } from "gatsby"
import KlocLogo from "../images/kloc.png"

const classes = {
  links: "text-csdark font-semibold mr-8 tracking-wide text-lg",
}

const Header = () => (
  <header className="bg-white py-2 lg:py-4">
    <div className="container mx-auto px-4 w-full flex items-center">
      <img src={KlocLogo} className="w-40 h-auto mr-auto" alt="Kloc logo" />
      <nav className="flex-1 mx-auto flex justify-center lg:justify-end">
        <div className="hidden lg:inline-block">
          <Link to="/" className={classes.links}>
            Services
          </Link>
          <Link to="/" className={classes.links}>
            Our work
          </Link>
          <Link to="/" className={classes.links}>
            About us
          </Link>
          <Link to="/" className={classes.links}>
            Partnerships
          </Link>
          <Link to="/" className={classes.links}>
            Careers
          </Link>
          <Link to="/" className={classes.links}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
