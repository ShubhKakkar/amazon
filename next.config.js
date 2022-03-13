/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    GOOGLE_ID:'877750131639-0dkhgv80kc2ch93dpfmvf75mqs6lhau1.apps.googleusercontent.com',
    GOOGLE_SECRET:'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',
    NEXT_AUTH_URL:'localhost:3000/',
    JWT_SECRET:'GOCSPX-7nJ0ZH3zgn8',
    // Stripe keys
    PublishableKey: 'pk_test_51J6Z5BSJpc19jMQbrdjeUevJMNZxUt28MeEWu3lmaiFT0O5OFhtMIu6BsUx9E3Y2JhBT8VzGsi61tZBFOkeZOVaw00bNWX1GVt',
    SecretKey:'sk_test_51J6Z5BSJpc19jMQbZX6Ij11s24IpC2ff3tqzPVSYRV243gBgYclicuYhBFHvIGpzvwos022BrYurMkgWe3fNDcEd0053RPQzMz',
    HOST:'http://localhost:3000'
  },
  images:{
    domains:['links.papareact.com','fakestoreapi.com'],
  }
}
