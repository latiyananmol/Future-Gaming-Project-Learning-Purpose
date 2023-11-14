import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxWidth={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          w={'fit-content'}
          py={'2'}
          m={'auto'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(130deg)'}
          ></Image>
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","6"]} textAlign={"center"} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a
            recusandae ducimus maxime amet ipsam numquam, adipisci incidunt
            dolore ut ullam enim necessitatibus deserunt soluta architecto,
            voluptatibus dolor ipsa maiores. Rem, doloremque nulla quia ex
            placeat eos distinctio magni, corporis error quos nobis. Voluptatum
            autem temporibus maxime qui mollitia error iusto nam tempore facilis
            eum quo, nesciunt nihil, doloribus veniam! Sequi eveniet repellat
            commodi, asperiores in quod provident officia delectus facere quidem
            repudiandae dolorem saepe hic rerum consequatur, aspernatur unde
            veniam deleniti. Velit ipsam officia quos sunt doloribus culpa
            temporibus. Vero, unde excepturi ad ullam molestiae facilis minus,
            quos quisquam placeat temporibus mollitia perspiciatis sit
            necessitatibus iure libero. Nulla sit illum enim cum eos, deserunt
            nisi autem sequi veniam fuga? Minima, eligendi neque? Voluptates
            dignissimos sed repellendus numquam accusantium culpa fugit quaerat
            asperiores vitae possimus quam ut odio molestiae voluptas aliquam
            nisi in veniam, ducimus, at sunt officiis inventore? Repudiandae?
            Nisi labore vel nostrum rem itaque dolore, magnam sint quibusdam
            voluptas praesentium aut temporibus natus corrupti ea modi. Nesciunt
            non corrupti dolorum sapiente quibusdam nihil! Quos blanditiis
            expl
         
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'white'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Gaming is Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);
