<template>
  <!-- to reduce the size of the css-files the pattern used here, should be defined in the tailwind-config theme -->
  <div class="relative flex w-40 h-40 m-2 bg-green-500 sm:pb-0 sm:w-48 sm:h-48">
    <div class="w-full h-full bg-repeat text-primary-100 heropattern-bathroomfloor-blue-500">
      <div class="inline text-sm">heropattern-bathroomfloor-blue-500</div>
    </div>
  </div>
  <div class="relative flex w-40 h-40 m-2 bg-green-500 sm:pb-0 sm:w-48 sm:h-48">
    <div class="w-full h-full bg-repeat text-primary-100 heropattern-tictactoe-red-100">
      <div class="inline text-sm">heropattern-tictactoe-red-100</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "HeroPatterns"
})

// ! define used patterns in the tailwind-config theme
// available patterns:
// jigsaw, overcast, formalinvitation, topography, texture, jupiter, architect,
// cutout, hideout, graphpaper, yyy, squares, fallingtriangles, pianoman,
// piefactory, dominos, hexagons, charliebrown, autumn, temple,
// stampcollection, deathstar, churchonsunday, ilikefood, overlappinghexagons,
// fourpointstars, bamboo, bathroomfloor, corkscrew, happyintersection, kiwi,
// lips, lisbon, randomshapes, steelbeams, tinycheckers, xequals, anchorsaway,
// bevelcircle, brickwall, fancyrectangles, heavyrain, overlappingcircles,
// plus, roundedplusconnected, volcanolamp, wiggle, bubbles, cage, connections,
// current, diagonalstripes, flippeddiamonds, floatingcogs, glamorous,
// houndstooth, leaf, linesinmotion, moroccan, morphingdiamonds, rails, rain,
// skulls, squaresinsquares, stripes, tictactoe, zigzag, aztec, banknote,
// boxes, circlessquares, circuitboard, curtain, diagonallines, endlessclouds,
// eyes, floortile, groovy, intersectingcircles, melt, overlappingdiamonds,
// parkayfloor, pixeldots, polkadots, signal, slantedstars, wallpaper
</script>
<style lang="scss" scoped></style>
