import CallToAction from "@/components/home/callToAction";
import ContactUs from "@/components/home/contactus";
import GetHelp from "@/components/home/getHelp";
import Hero from "@/components/home/hero";
import LatestArticles from "@/components/home/latestArticles";
import ReadAllArticles from "@/components/home/readAllArticles";
import Support from "@/components/home/support";
import HowItWorks from "@/components/home/working";

const Home = () => {
  return (
    <div>
      <Hero/>
      <GetHelp/>
      <Support/>
      <ContactUs/>
      <ReadAllArticles/>
      <LatestArticles/>
      <HowItWorks/>
      <CallToAction/>
    </div>
  );
};

export default Home;
