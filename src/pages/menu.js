import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from '../components/Globals/PageHeader'
import Banner from '../components/Globals/Banner'


const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader page="menuPage">
      <Banner title="Menu" subtitle="let's dig in" />
    </PageHeader>
  </Layout>
)

export default MenuPage
