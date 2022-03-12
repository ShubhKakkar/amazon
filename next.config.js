/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    GOOGLE_ID:'877750131639-0dkhgv80kc2ch93dpfmvf75mqs6lhau1.apps.googleusercontent.com',
    GOOGLE_SECRET:'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',
    NEXT_AUTH_URL:'localhost:3000/',
  },
  images:{
    domains:['links.papareact.com','fakestoreapi.com'],
  }
}
