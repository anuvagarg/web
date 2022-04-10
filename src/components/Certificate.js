import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Stack,
    Link
  } from '@chakra-ui/react';
    
  export default function Certificate() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading 
                fontSize={'5xl'}
                py={10}
                color={'green.400'}
                fontWeight={'bold'}>
                Open Certification System
            </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          Open certification system enables administration to generate all kinds of certificates effectively in no time.
          Be it any event participation certificate or the certification for winners, we have made it possible to reduce your labour.
          </Text>
          <Text color={'gray.600'} fontSize={'xl'}>
          Download your certificate for the most recent event from the link below.
          </Text>
            <Stack spacing={6} direction={'row'}>
          <Button
            rounded={"full"}
            margin={'auto'}
            px={12}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
          >
            <Link href="./open-certificate/index.html">Download</Link>
          </Button></Stack>
        </Stack>
      </Box>
    );
  }