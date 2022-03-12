import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import {useDispatch} from "react-redux"
import {removeFromBasket} from "../app/slices/basketSlice"

const CheckOutProduct = (props) => {
  const dispatch = useDispatch()
  const { id, title, price, rating, description, category, image, hasPrime } =
    props.item
//   const addItemToBasket = () => {
//     dispatch(addToBasket)
//   }
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="check-out-product grid grid-cols-1 md:grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        objectFit="contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="mt-3 lg:mt-0">{title}</p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-400" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <p>&#36;{price}</p>
        {hasPrime ? (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="prime-logo"
            />
            <p className="text-xs text-gray-500">Free Next-day delivery</p>
          </div>
        ) : null}
      </div>
      <div className="mx-auto lg:my-auto">
        {/* <button className="button mt-auto" >
          Add to Basket
        </button> */}
        <button className="button mt-auto" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckOutProduct
