import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import Footer from "./Footer/Footer"

export interface ILayoutProps {
  location: {
    pathname: string
  }
  title: string
  children: React.ReactNode
}

const Layout = ({ location, title, children }: ILayoutProps) => {
  //@ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1
        className="main-heading"
        css={{
          fontSize: 32,
          lineHeight: 1.2,
        }}
      >
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
