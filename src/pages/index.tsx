import { type NextPage } from "next";
import BusinessToBalance from "../components/BusinessToBalance";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Products from "../components/Products";
import ProductsHeader from "../components/ProductsHeader";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";
import TryDemoCTA from "../components/TryDemoCTA";

const Home: NextPage = () => {
  return (
    <Layout title="A sikeres vállalkozások platformja">
      <Hero />
      <BusinessToBalance />
      <TrustedBy />
      <Features />
      <ProductsHeader />
      <Products />
      <Testimonials />
      <TryDemoCTA />
    </Layout>
  )
};

export default Home;
