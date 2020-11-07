import {chakra} from '@chakra-ui/core'

/**
 * Theme-aware `sx` prop. Allows you to style your elements inline, using
 * values from your theme.
 */

const Usage = () => (
  <chakra.div
    sx={{
      backgroundColor: 'red.900',
      color: 'red.50',
    }}
  />
)
