import { Container, Heading, VStack, Input ,Button,Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack 
        alignItems={'stretch'}
         spacing={'8'} m={'auto'} w={["full","96"]} my={'16'}>
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
            <Input
            placeholder={'Enter  The Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
           <Button variant={"link"} alignSelf={"flex-end"} >
           <Link to={"/forgetpassword"} >forget password?</Link>


           </Button>
          <Button  colorScheme={"purple"} type={"submit"} >LogIn</Button>
          <Text textAlign={"right"} >New User?  </Text>
          <Button variant={"link"} colorScheme='purple' >
           <Link to={"/signup"} >Sign Up</Link>
           </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
