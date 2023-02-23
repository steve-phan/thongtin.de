import { Link } from "gatsby"
import React from "react"

import * as footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div>{`© ${new Date().getFullYear()} Steve Phan`}</div>
      <div className={footerStyles.links}>
        <div>
          <a
            href="mailto:vietappeu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
        <div>
          <Link to="/legal">Privacy & Terms</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
