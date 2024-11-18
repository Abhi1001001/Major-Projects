import { useState } from "react";

// import icons from svgr library ------->
import SearchIcon from "../icons/search-icon.svg?react";
import CartIcon from "../icons/cart-icon.svg?react";
import AccountIcon from "../icons/account-icon.svg?react";
import MenuIcon from "../icons/menu-icon.svg?react";

// import nextui components library------>
import { Badge, Button } from "@nextui-org/react";

// import react router dom hooks ------->
import { Link, useNavigate } from "react-router-dom";

// import react redux hooks --------->
import { useDispatch } from "react-redux";

// import internal components -------->
import { searchProductsAction } from "../redux/Actions/ProductAction";

export default function Navbar() {
  // define state for storing search value of products ---------->
  const [searchProductsValue, setSearchProductsValue] = useState();

  // getting value from local storage and conveting in object from string -------->
  let auth = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // dispatch search product action for fetching data from database ------->
  const searchProducts = () => {
    dispatch(searchProductsAction(searchProductsValue));
    navigate("/search-products");
  };

  return (
    <>
      <nav className="bg-yellow-400 max-w-screen-2xl m-auto sticky top-0 z-50">
        <div className="flex items-center justify-between h-auto w-full px-4">
          <Link to="/">
            <img
              className="md:max-h-20 max-h-14 "
              src="./src/assets/images/logo.png"
              alt="loading..."
            />
          </Link>
          <form
            action=""
            className=" flex bg-white w-1/2 rounded-xl md:h-10 h-8 items-center"
          >
            <SearchIcon className="fill-black sm:h-8 h-6 " />
            <input
              className="outline-none w-full px-1 rounded-xl"
              type="search"
              onKeyUp={searchProducts}
              onChange={(e) => setSearchProductsValue(e.target.value)}
            />
          </form>
          <button>
            <MenuIcon className=" fill-black sm:hidden block " />
          </button>
          <div className="space-x-2 md:space-x-3 w-[65vw] sm:w-auto justify-between pt-3 hidden sm:flex">
            <Link className="" to="/cart">
              <Badge content="0" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant=""
                >
                  <CartIcon className="sm:h-8 h-6" />
                </Button>
              </Badge>
            </Link>
            {auth ? (
              <Link to="/admin" className="text-sm flex flex-col items-center">
                <AccountIcon className="fill-black sm:h-8 h-6" />
                {auth.name}
              </Link>
            ) : (
              <Link to="/signup" className="text-sm">
                <AccountIcon className="fill-black sm:h-8 h-6" />
                Log-in
              </Link>
            )}
          </div>
        </div>

        <div className="flex justify-around pb-1">

          {/* Home tab */}
          <Link className="text-xs md:text-xl" to="/">
            Home
          </Link>

          {/* Shop tab */}
          <Link className="text-xs md:text-xl" to="/shop">
            Shop
          </Link>

          {/* Offers tab */}
          <Link className="text-xs md:text-xl" to="/offers">
            Offers
          </Link>

          {/* Categories tab */}
          <Link className="text-xs md:text-xl" to="/categories">
            Categories
          </Link>

          {/* Brands tab */}
          <Link className="text-xs md:text-xl" to="/brand">
            Brands
          </Link>

          {/* New Arrivals tab */}
          <Link className="text-xs md:text-xl" to="/new-arrivals">
            New Arrivals
          </Link>

          {/* About-us tab */}
          <Link className="text-xs md:text-xl" to="/about-us">
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
}
