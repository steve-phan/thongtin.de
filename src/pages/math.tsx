import React from "react"

import Layout from "../components/layout"
import { MathGenerator } from "../components/MathGenerator/MathGenerator"
import Seo from "../components/seo"

const Math = () => {
  return (
    <Layout
      location={{
        pathname: "/math",
      }}
      title="Kids Math Generator"
    >
      <h1 style={{ textAlign: "center" }}>Kids Math Generator</h1>
      <MathGenerator />
    </Layout>
  )
}

export default Math

export const Head = () => <Seo title="Kids Math Generator" />
