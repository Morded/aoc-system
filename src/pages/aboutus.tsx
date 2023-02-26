
import { type NextPage } from "next";
import AboutUslanding from "../components/AboutUsLanding";
import JoinUsCTA from "../components/JoinUsCTA";
import Layout from "../components/layout";
import OfficePhotos from "../components/OfficePhotos";
import OurGoal from "../components/OurGoal";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";
import WhoAreWe from "../components/WhoAreWe";
import WhyAreWe from "../components/WhyAreWe";

const Home: NextPage = () => {
  return (
    <Layout title="Rólunk">
      <AboutUslanding />
      <WhoAreWe />
      <Quote />
      <WhyAreWe />
      <OurGoal />
      <TrustedBy />
      <OfficePhotos />
      <Testimonials />
      <JoinUsCTA />
    </Layout>
  )
};

export default Home;
