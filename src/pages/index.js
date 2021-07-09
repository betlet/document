import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Document" />
    <h1>Hello</h1>
    <p>Your new E-documents are available to you.</p>
    <p>Now you can view below.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> 
    <p>
      <Link to="https://www.google.com">Review | Print Document Here</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
