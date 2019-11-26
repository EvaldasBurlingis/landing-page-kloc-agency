import React from "react"
import { Link } from "gatsby"

const classes = {
  links: "text-csdark font-semibold mr-8 tracking-wide text-lg",
}

const Header = () => (
  <header className="bg-white py-8">
    <div className="container mx-auto px-4 w-full flex justify-center">
      <nav>
        {/* TABLET/DESKTOP MENU */}
        <div className="hidden md:block">
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
