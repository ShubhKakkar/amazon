const stripe = require('stripe')(process.env.SecretKey)
import absoluteUrl from 'next-absolute-url'

const handler = async (req, res) => {
  const { origin } = await absoluteUrl(req)
  const { items, email } = req.body
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'inr',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }))
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1KcXtCSJpc19jMQbRLaEsxWS'],
    shipping_address_collection: {
      allowed_countries: ['IN'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${origin}/success`,
    cancel_url: `${origin}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  })
  res.status(200).json({ id: session.id })
}

export default handler
