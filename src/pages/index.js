import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/firstPage/HomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <HomePage />
    </div>
  </Layout>
)

export default IndexPage
