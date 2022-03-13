import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckOutProduct from '../components/CheckOutProduct'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.PublishableKey)

const checkout = () => {
  const { data: session } = useSession()
  const items = useSelector((state) => state.basket.items)
  const totalValue = items.reduce((total, product) => {
    return total + product.price
  }, 0)
  const createCheckOutSession = async () => {
    const stripe = await stripePromise
    const data = {
      items: items,
      email: session.user.email,
    }
    // Call the backend to create a checkout session
    const checkoutSession = await fetch('/api/create-checkout-session', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
    const response = await checkoutSession.json()
    // Redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: response.id,
    })
    if (result.error) {
      alert(result.error.message)
    }
  }
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto min-h-[80vh] max-w-7xl lg:flex">
        <div className="md:basis-3/4">
          <Image
            src="https://links.papareact.com/ikj"
            alt="amazon-ad"
            height={250}
            width={1050}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="border-b pb-4 text-3xl">
              {!items.length == 0
                ? 'Shopping Basket'
                : 'Your Amazon Basket is empty'}
            </h1>
            {items.map((product, i) => {
              return <CheckOutProduct item={product} key={i} />
            })}
          </div>
        </div>
        {/* Right */}
        <div className="md:basis-1/4">
          <div className="flex basis-full flex-col bg-white p-10 shadow-md">
            {items.length > 0 ? (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items):{' '}
                  <span className="font-bold">&#8377; {totalValue}</span>
                </h2>
                <button
                  disabled={!session}
                  role="link"
                  onClick={createCheckOutSession}
                  className={`btn button mt-2 cursor-pointer ${
                    !session
                      ? 'cursor-not-allowed border-gray-200 from-gray-300  to-gray-500 text-gray-300'
                      : ''
                  }`}
                >
                  {!session ? 'Sign in to Checkout' : 'Proceed to Checkout'}
                </button>
              </>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout
