const heropatterns = require("tailwindcss-hero-patterns/src/patterns")
const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  content: [
    // paths to all template files
    "./index.html",
    "./src/App.vue",
    // With some build tools, your CSS will rebuild
    // any time *any* file in `src` changes. // ! So make sure to use explicit directories.
    "./src/components/**/*.{html,vue,ts}",
    "./src/pages/**/*.{html,vue,ts}"
  ],
  darkMode: "class", // or false or 'default: media'
  theme: {
    heroPatterns: {
      // jigsaw, overcast, formalinvitation, topography, texture, jupiter, architect, cutout, hideout, graphpaper, yyy,
      // squares, fallingtriangles, pianoman, piefactory, dominos, hexagons, charliebrown, autumn, temple,
      // stampcollection, deathstar, churchonsunday, ilikefood, overlappinghexagons, fourpointstars, bamboo,
      // bathroomfloor, corkscrew, happyintersection, kiwi, lips, lisbon, randomshapes, steelbeams, tinycheckers,
      // xequals, anchorsaway, bevelcircle, brickwall, fancyrectangles, heavyrain, overlappingcircles, plus,
      // roundedplusconnected, volcanolamp, wiggle, bubbles, cage, connections, current, diagonalstripes,
      // flippeddiamonds, floatingcogs, glamorous, houndstooth, leaf, linesinmotion, moroccan, morphingdiamonds, rails,
      // rain, skulls, squaresinsquares, stripes, tictactoe, zigzag, aztec, banknote, boxes, circlessquares,
      // circuitboard, curtain, diagonallines, endlessclouds, eyes, floortile, groovy, intersectingcircles, melt,
      // overlappingdiamonds, parkayfloor, pixeldots, polkadots, signal, slantedstars, wallpaper
      // bathroomfloor: heropatterns.bathroomfloor,
      // tictactoe: heropatterns.tictactoe
      // aztec: heropatterns.aztec,
      eyes: heropatterns.eyes,
    },
    heroPatternsShades: ["100", "500"],
    heroPatternsColors: ["blue", "red"],

    screens: {
      mobile: "640px",
      laptop: "1024px",
      desktop: "1440px",
    },

    extend: {
      colors: {
        cyberred: "#861A22"
      },
      width: {
        "mobile": "640px",
        "laptop": "768px",
        "desktop": "1080px",
        "fourk": "1536px",
      },
      // height: {
      //   "mobile": "600px",
      //   "laptop": "600px",
      //   "desktop": "1080px",
      //   "fourk": "1440px",
      // },
    }
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-typography
    require("@tailwindcss/typography"),

    // https://github.com/tailwindlabs/tailwindcss-forms
    require("@tailwindcss/forms"),

    // https://github.com/svengau/tailwindcss-hero-patterns
    require("tailwindcss-hero-patterns"),

    // https://github.com/adoxography/tailwind-scrollbar
    require('tailwind-scrollbar'),
  ]
})
