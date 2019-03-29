import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/Home/Header";
import Banner from '../components/Globals/Banner'
import BannerBtn from '../components/Globals/BannerBtn'
import QuickInfo from '../components/Home/QuickInfo'
import Gallery from '../components/Home/Gallery'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, Ca">
        <BannerBtn text="menu" />
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
