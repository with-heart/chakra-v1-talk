import {chakra} from '@chakra-ui/core'
import {CustomBox} from './03'

/**
 * `chakra` factory function
 */

/**
 * 1. Create base html elements with theme-aware style props using
 * `chakra.<element>`.
 */

const BaseHTMLElementsUsage = () => (
  <chakra.div color="red.500">
    <chakra.a href="#">Some link</chakra.a>
    <chakra.button onClick={() => console.log('Hello World!')}>
      Click me
    </chakra.button>
  </chakra.div>
)

/**
 * 2. Create html elements with base styles.
 */

const Thing = chakra('div', {
  baseStyle: {
    color: 'red.500',
  },
})

const HTMLElementsWithBaseStylesUsage = () => (
  // the color of "Hello" is red.500
  <Thing>Hello</Thing>
)

/**
 * 3. Wrap existing components with base styles.
 */

const Box = chakra(CustomBox, {
  baseStyle: {
    color: 'red.500',
  },
})

const WrappedComponentUsage = () => (
  // the color of the "This box is awesome :D" text is red.500
  <Box isAwesome />
)
