import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} width={'full'} px={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]} >
    Get Ready For Biggest Surprise
          </Heading>

          <HStack borderBottom={'2px solid white '} py={'2'}>
            <Input
              focusBorderColor="none"
              placeholder="Enter Email Here.."
              border={'none'}
              borderRadius={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://youtube.com/anmollatiyan" target='blank'>Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://instagram.com/anmollatiyan" target='blank'>Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://github.com/latiyananmol" target='blank'>GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
