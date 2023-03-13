import React from "react"

import Layout from "../components/layout"
import { MathGenerator } from "../components/MathGenerator/MathGenerator"

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
