export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      selectorBlackList: [],
      minPixelValue: 1, 
    },
  },
}
