import Auth from "../components/Auth"


const Home = ({openAuth,setOpenAuth}) => {
  return (
    <>
    <div className=" mt-16 p-4 md:px-8 lg:px-12">
      Home
      {openAuth && <Auth setOpenAuth={setOpenAuth}/>}
    </div>
    </>
  )
}

export default Home