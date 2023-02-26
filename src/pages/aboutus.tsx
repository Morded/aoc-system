
import { type NextPage } from "next";
import AboutUslanding from "../components/AboutUsLanding";
import Layout from "../components/layout";
import OfficePhotos from "../components/OfficePhotos";
import OurGoal from "../components/OurGoal";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";
import TryDemoCTA from "../components/TryDemoCTA";
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
      <OfficePhotos />
      {/* <TrustedBy /> */}
      {/* <Testimonials /> */}
      {/* <TryDemoCTA /> */}
    </Layout>
  )
};

export default Home;
