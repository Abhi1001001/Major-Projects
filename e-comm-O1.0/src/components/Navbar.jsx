import React from "react";

// import svgr library ------->
import { ReactComponent as SearchIcon } from "../icons/search-icon.svg";
import { ReactComponent as CartIcon } from "../icons/cart-icon.svg";
import { ReactComponent as AccountIcon } from "../icons/account-icon.svg";
import { ReactComponent as MenuIcon } from "../icons/menu-icon.svg";

// import radix library------>
import { HoverCard, Link, Text } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <>
      <nav className="bg-yellow-400 ">
        <div className="flex items-center justify-between h-auto ">
          <a className="ml-5" href="#">
            <img className="h-20" src="./asets/images/logo.png" alt="" />
          </a>
          <div className="flex mx-5 space-x-2 md:space-x-3 w-[65vw] sm:w-auto justify-between items-center">
            <form action="" className="items-center flex">
              <input
                className="md:w-[50vw] w-[40vw] md:h-10 sm:h-8 h-7 rounded-s-2xl px-3"
                type="search"
              />
              <button
                className="bg-white md:h-10 sm:h-8 h-7 rounded-e-2xl"
                type="submit"
              >
                <SearchIcon className="fill-black sm:h-8 h-6 " />
              </button>
            </form>
            <button>
              <MenuIcon className=" fill-black sm:hidden block " />
            </button>
            <a className="sm:flex hidden" href="#">
              <CartIcon className="fill-black sm:h-8 h-6" />
              <span className="bg-red-600 md:h-6 sm:h-6 rounded-md px-1 md:relative sm:relative md:bottom-2 sm:bottom-2 md:right-4 sm:right-4">
                0
              </span>
            </a>
            <a className="hidden sm:block" href="#">
              <AccountIcon className="fill-black sm:h-8 h-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-around">
          {/* Home Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                Home
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-yellow-200 z-10"
              size="1"
              maxWidth="240px"
            >
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Shop Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                Shop
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Offers Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                Offers
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Categories Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                Categories
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Brands Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                Brands
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* New Arrivals Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                New Arrivals
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* About-us Section */}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link className="text-xs md:text-xl" href="#">
                About-us
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content className="bg-yellow-200 z-10 " size="1" maxWidth="240px">
              <Text as="div" size="1" trim="both">
                <ul>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
      </nav>
    </>
  );
}
