import {Box, BoxProps, Link, Modal} from '@chakra-ui/core'

/**
 * TypeScript Rewrite
 *
 * Chakra has been rewritten from the ground-up using TypeScript.
 */

/**
 * 1. Components are fully typed. They provide autocompletion and type errors.
 */
const BoxUsage = () => <Box />

const LinkUsage = () => <Link />

const ModalUsage = () => <Modal />

/**
 * 2. All component props types are exported, allowing you to easily remix them
 * with your own custom types.
 */
interface CustomBoxProps extends BoxProps {
  /** Whether this box is awesome. */
  isAwesome?: boolean
}

export const CustomBox = ({isAwesome, ...props}: CustomBoxProps) => (
  <Box {...props}>
    {isAwesome ? 'This box is awesome :D' : 'This box is not awesome D:'}
  </Box>
)

const CustomBoxUsage = () => (
  <>
    {/* This box is awesome :D */}
    <CustomBox isAwesome color="green.500" bg="gray.100" />

    {/* This box is not awesome D: */}
    <CustomBox color="red.500" />
  </>
)

/**
 * 3. The `as` prop allows you to render a component as another component while
 * inheriting the new component's types.
 */
const AsUsage = () => <Link as={CustomBox} href="#" isAwesome />
