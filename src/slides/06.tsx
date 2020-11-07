import {
  Box,
  ButtonProps,
  chakra,
  ChakraProvider,
  extendTheme,
  Link,
  useStyleConfig,
} from '@chakra-ui/core'

/**
 * Theming API
 */

/**
 * 1. `extendTheme` function allows for easily overriding the default theme.
 */
const customTheme = extendTheme({
  colors: {
    awesomeColor: '#ff8686',
  },
})

const CustomThemeUsage = () => (
  <ChakraProvider theme={customTheme}>
    <Box color="awesomeColor">This uses the awesome color!</Box>
  </ChakraProvider>
)

/**
 * 2. Global styles can be customized using `theme.styles.global`.
 */
const globalStylesTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body` element
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a` element
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

const GlobalStylesThemeUsage = () => (
  <ChakraProvider theme={globalStylesTheme}>
    The background is gray.400 and the color of this text is white.
    <Link href="#">
      This link text is teal.500 and is underlined when hovered
    </Link>
  </ChakraProvider>
)

/**
 * 3. Component styles consist of **base** and **default** styles along with
 * **modifier** styles. Create new component styles using `theme.components`.
 *
 * # Modifier Styles:
 * - Size: for components that can have different sizes e.g. small, medium,
 * large
 * - Variant: for components that can have different visual styles e.g.
 * outline, solid, ghost
 * - Color scheme: for a given variant, a component can have different color
 * schemes
 * - Color mode: a component can change its visual styles based on color mode
 * (light or dark)
 */

const emptyComponentTheme = {
  // base styles of the component
  baseStyle: {},
  // default props === default modifiers (size, variant)
  defaultProps: {},
  // definitions for component sizes
  sizes: {},
  // definitions for component variants
  variants: {},
}

const buttonComponentTheme = {
  // all buttons have these base styles
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // buttons default to `md` size and `outline` variant
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      padding: '2rem',
    },
    md: {
      fontSize: 'md',
      padding: '3rem',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
    },
    solid: {
      bg: 'green.500',
      color: 'white',
    },
  },
}

const Button = (props: ButtonProps) => {
  // We'll separate the modifier props from the rest of the button's props
  const {size, variant, ...rest} = props

  // We use `useStyleConfig` to select the styles for the `Button` component
  // theme and pass it the component's modifier props
  const styles = useStyleConfig('Button', {size, variant})

  // render a `button` element, passing `styles` to `sx` to attach the generated
  // styles
  return <chakra.button sx={styles} {...rest} />
}

const themeWithCustomButton = extendTheme({
  components: {
    Button: buttonComponentTheme,
  },
})
