import Auth from "../components/Auth"


const About = ({openAuth,setOpenAuth}) => {
  return (
    <>
    <div className=" mt-16 p-4 md:px-8 lg:px-12">
      About
      {openAuth && <Auth setOpenAuth={setOpenAuth} />}
    </div>
    </>
  )
}

export default About