import Auth from "../components/Auth";
import TechStack from "../components/TechStack";
import AboutUs from "../components/AboutUs";
import Aboutintro from "../components/Aboutintro";
import Overview from "../components/Overview";
import { AnimatePresence } from "motion/react"

const About = ({ openModel, setOpenModel }) => {
  return (
    <>
      <Aboutintro />
      <div className=" p-4 md:px-8 lg:px-12">

        <Overview />
        <TechStack />
        <AboutUs />
      </div>

      <AnimatePresence>
        {openModel && <Auth setOpenModel={setOpenModel} />}
      </AnimatePresence>
    </>
  );
};

export default About;