import React from 'react'
import Product from './Product'

const ProductFeed = (props) => {
  const data = props.data
  console.log(data)
  return (
    <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.slice(0, 4).map((product) => {
        return <Product key={product.id} product={product} />
      })}
      <img
        src="https://links.papareact.com/dyz"
        alt=""
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {data.slice(4, 5).map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
      {data.slice(5, data.length).map((product) => {
          return <Product key={product.id} product={product} />
        })}
    </div>
  )
}

export default ProductFeed
