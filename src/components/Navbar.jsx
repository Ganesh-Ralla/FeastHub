import { Menu, Search, UserCircle } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = ({openModel,setOpenModel,setModel,openSearchBar,setOpenSearchBar,searchInput,setSearchInput,setSearchTaken,}) => {
  const [menu, setMenu] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const openMenu = () => {
    setMenu((prev) => !prev);
    setOpenSearchBar(false);
  };

  const openSearch = () => {
    setOpenSearchBar((prev) => !prev);
    setMenu(false);
  };

  useEffect(() => {
    if (openSearchBar) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [openSearchBar]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };


 const performSearch = () => {
    const query = searchInput.trim();

    if (!query) return;

    inputRef.current?.blur();

    setSearchInput(query);
    setSearchTaken(true);

    setOpenSearchBar(false);
    setMenu(false);

    navigate("/search");
};


  const openCart = () => {
    if (!isLoggedIn) {
      toast.warn("Login is required", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-10 w-full">
        <div className="bg-white p-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold md:text-3xl">
              <span>Feast</span>
              <span className="text-orange-500">Hub</span>
            </Link>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <Search className="cursor-pointer" onClick={openSearch} />
              <Menu className="cursor-pointer" onClick={openMenu}/>
            </div>

            {/* Desktop */}
            <div className="hidden items-center gap-4 md:flex">
              <form onSubmit={(e) => {
                  e.preventDefault();
                  performSearch();
                }}
                className="flex items-center rounded-full border border-gray-300 px-4 py-2">
                <input ref={inputRef} type="text" placeholder="Search" className="outline-none w-full" value={searchInput} onChange={handleSearch}/>
                <button type="submit" className="cursor-pointer flex items-center">
                  <Search color="gray" />
                </button>
              </form>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <button onClick={openCart} className="cursor-pointer">Cart</button>

              {isLoggedIn ? (
                <Link to="/profile"><UserCircle /></Link>
              ) : (
                <UserCircle className="cursor-pointer" onClick={() => {setOpenModel(true);setModel("user");}}/>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="flex flex-col gap-3 bg-blue-200 p-4">
            <Link to="/menu" onClick={() => setMenu(false)}>Menu</Link>
            <Link to="/about" onClick={() => setMenu(false)}>About</Link>

            <button onClick={openCart} className="cursor-pointer text-left">Cart</button>

            {isLoggedIn ? (
              <Link to="/profile" onClick={() => setMenu(false)}><UserCircle /> </Link>
            ) : (
              <UserCircle className="cursor-pointer" 
                onClick={() => {
                  setOpenModel(true);
                  setModel("user");
                  setMenu(false);
                }}/>
            )}
          </div>
        )}

        {/* Mobile Search */}
        {openSearchBar && (
          <div className="bg-orange-100 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                performSearch();
              }}
              className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2">
              <input ref={inputRef} type="text" placeholder="Search" className="w-full outline-none" value={searchInput} onChange={handleSearch}/>
              <button type="submit" className="cursor-pointer flex items-center"><Search color="gray" /></button>
            </form>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;