import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Header = () => {
  const { data: session } = useSession()
  const items = useSelector((state) => state.basket.items)
  return (
    <header>
      {/* Top Nav */}
      <div className="flex flex-grow items-center justify-between bg-amazon_blue py-2 text-center">
        {/* Logo */}
        <div className="mt-2 md:w-auto">
          <Link href="/">
            <Image
              src="https://links.papareact.com/f90"
              alt="logo"
              height={40}
              width={150}
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="hidden h-10 flex-1 rounded-md bg-yellow-400 sm:flex">
          <input
            type="text"
            name=""
            id=""
            className="h-full w-6 flex-1 rounded-l-md p-2 focus:outline-none"
          />
          <SearchIcon className="ease h-10 p-3 transition-all duration-300 hover:rounded-r-md hover:bg-yellow-500" />
        </div>
        {/* Right */}
        <div className="flex items-center space-x-2 px-4 text-xs text-white md:space-x-4">
          <div onClick={signIn}>
            <p>{session ? `Hello ${session.user.name}` : 'Log In'}</p>
            <p className="link font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Link href="/checkout">
            <div className="link relative flex items-center">
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10 p-1" />
              <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
                Basket
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light p-2 pl-6 text-sm text-white">
        <p className="link flex items-center">
          <MenuIcon className="mr-1 h-6" />
          All
        </p>
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
