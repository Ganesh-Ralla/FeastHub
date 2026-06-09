import Auth from "../components/Auth";
import TechStack from "../components/TechStack";
import AboutUs from "../components/AboutUs";
import Aboutintro from "../components/Aboutintro";
import Overview from "../components/Overview";
import { AnimatePresence } from "motion/react"

const About = ({ openAuth, setOpenAuth }) => {
  return (
    <>
      <div className="mt-16 p-4 md:px-8 lg:px-12">
        <Aboutintro />
        <Overview />
        <TechStack />
        <AboutUs />
      </div>

      <AnimatePresence>
        {openAuth && <Auth setOpenAuth={setOpenAuth}/>}
      </AnimatePresence>
    </>
  );
};

export default About;