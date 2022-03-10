import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'

const Product = (props) => {
  const product = props.product
  const [rating] = useState(Math.floor(Math.random() * 5) + 1)
  const [hasPrime] = useState(Math.random() > 0.5)
  return (
    <div className="relative z-30 m-5 flex flex-col bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image src={product.image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 font-semibold">{product.title}</h4>
      {/* <StarIcon className="h-5"/> */}
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-400" />
          ))}
      </div>
        <p className="my-2 text-xs line-clamp-2">{product.description}</p>
        <p className="font-bold">&#36; {product.price}</p>
        <div className="flex items-center space-x-2">
          {hasPrime ? (
            <img
              src="https://links.papareact.com/fdw"
              alt="prime-logo"
              className="w-12"
            />
          ) : null}
          <p className="text-xs text-gray-500">
            {hasPrime ? 'FREE Next-day Delivery' : null}
          </p>
        </div>
        <button className="button mt-auto">Add to Basket</button>
      </div>
  )
}

export default Product
