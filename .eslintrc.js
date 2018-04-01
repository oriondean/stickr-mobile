module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb", "prettier"],
  env: {
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": "off"
  }
};
