module.exports = {
  siteMetadata: {
    title: "Gatsby Custom Cursor",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300`, `Roboto\:300,900`],
        display: "swap",
      },
    },
  ],
};
