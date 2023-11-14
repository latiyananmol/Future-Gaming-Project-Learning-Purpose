import { Container, Heading, VStack, Input ,Button,Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
      <VStack 
      alignItems={'stretch'}
       spacing={'8'} m={'auto'} w={["full","96"]} my={'16'}>
        <Heading m={"auto"}>VIDEO HUB</Heading>
        <Avatar alignSelf={"center"} boxSize={"32"}/>
        <Input
          placeholder={'Name'}
          type={'text'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Email'}
          type={'email'}
          required
          focusBorderColor={'purple.500'}
        />
       
         {/* <Button variant={"link"} alignSelf={"flex-end"} >
         <Link to={"/forgetpassword"} >forget password?</Link>


         </Button> */}
        <Button  colorScheme={"purple"} type={"submit"} >SignUp</Button>
        <Text colorScheme={"purple"}  textAlign={"right"} >Already Signed Up? <Link to={"/login"} >Login</Link> </Text>
      
        
     
      </VStack>
    </form>
  </Container>
  )
}

export default SignUp;