import {Box, ChakraProvider} from '@chakra-ui/core'

export default function Home() {
  return (
    <ChakraProvider>
      <Box>Some really great text</Box>
    </ChakraProvider>
  )
}
