import Auth from "../components/Auth";
import TechStack from "../components/TechStack";
import AboutUs from "../components/AboutUs";
import Aboutintro from "../components/Aboutintro";
import Overview from "../components/Overview";

const About = ({ openAuth, setOpenAuth }) => {
  return (
    <>
      <div className="mt-16 p-4 md:px-8 lg:px-12">
        <Aboutintro />
        <Overview />
        <TechStack />
        <AboutUs />
      </div>

      {openAuth && <Auth setOpenAuth={setOpenAuth} />}
    </>
  );
};

export default About;