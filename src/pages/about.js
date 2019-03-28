import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from '../components/Globals/PageHeader'
import Banner from '../components/Globals/Banner'

const AboutPage = () => (
  <Layout className="about">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader page="aboutPage">
      <Banner title="About us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
