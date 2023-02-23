import React from "react"
import Disclaimer from "../components/Disclainmer/Disclaimer"
import Layout from "../components/layout"

const Legal = () => {
  return (
    <Layout
      location={{
        pathname: "/legal",
      }}
      title="Legal Notice, Terms and Privacy Policy"
    >
      <Disclaimer />
    </Layout>
  )
}

export default Legal
