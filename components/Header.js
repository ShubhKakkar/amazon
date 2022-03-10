import React from 'react'
import Image from 'next/image'
import { MenuIcon,SearchIcon,ShoppingCartIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="bg-amazon_blue flex flex-grow py-2 items-center text-center justify-between">
        {/* Logo */}
        <div className="mt-2 md:w-auto">
          <Image
            src="https://links.papareact.com/f90"
            alt="logo"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex bg-yellow-400 rounded-md h-10 flex-1">
          <input type="text" name="" id="" className="p-2 h-full w-6 flex-1 rounded-l-md focus:outline-none" />
          <SearchIcon className="h-10 p-3 hover:bg-yellow-500 hover:rounded-r-md transition-all duration-300 ease"/>
        </div>
        {/* Right */}
        <div className="flex text-white space-x-2 md:space-x-4 px-4 items-center text-xs">
          <div>
            <p>Hello Shubham Kakkar</p>
            <p className="font-extrabold md:text-sm link">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link flex items-center relative">
            <span className="absolute top-0 right-0 md:right-10 text-center text-black font-bold h-4 w-4 bg-yellow-400 rounded-full">0</span>
            <ShoppingCartIcon className="h-10 p-1"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center"><MenuIcon className="h-6 mr-1" />All</p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon's Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food and Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
