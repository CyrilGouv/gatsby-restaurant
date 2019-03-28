import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from '../components/Globals/PageHeader'
import Banner from '../components/Globals/Banner'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader page="contactPage">
      <Banner title="contact us" subtitle="let's get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
