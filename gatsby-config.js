module.exports = {
  siteMetadata: {
    title: `personal website of DUNCAN`,
  },
  plugins: [
	"gatsby-plugin-image",
	"gatsby-plugin-sharp",
	{
		resolve: "gatsby-source-filesystem",
		options: {
			name: `content`,
			path: `${__dirname}/content/`,
		},
	},

	"gatsby-plugin-mdx",
	"gatsby-transformer-sharp",
 ],
};
