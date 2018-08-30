---
title: 'Tutorial Notes'
date: '2018-08-30'
---

- pages: files that equate to actual pages on application.
- put images in src folder so webpack can take care of doing things to it. Don't put in public.
- `yarn add styled-components gatsby-plugin-styled-components`
  - added in styled components. plugin is needed to prevent styles from being applied on page load, instead bakes it into main static file
- `export const query` - run this on page for magic stuff. will automatically run query on component
- Will typically want to name all graphql queries.. `query SiteMeta {`
- cannot do graphql queries in components folder, only layouts and pages.. unless you pass it in as a prop
- `yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp` - lets you add in images
- Can do a lot of crazy things with imageSharp. can make images grayscale or have them compiled to a specific size
- Research Gatsby plugin remark to learn more about handling md files

Deploying

- `gatsby build` - builds out site
- `gatsby serve` - runs server and builds public folder contents
- gh-pages: `"deploy": "gatsby build --prefix-paths && gh-pages -d public"`
