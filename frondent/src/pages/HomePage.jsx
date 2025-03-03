import React, { useEffect } from 'react'
import { Container, SimpleGrid, Text, VStack , ProductCard } from '@chakra-ui/react';
import {Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
const HomePage = () => {

  const {getProduct, products} = useProductStore();

  useEffect(()=> {
    getProduct();
  },[getProduct]);

  console.log("products",products)
  return (
   <Container max="container.x1" py={12}>
    <VStack spacing={8}>
      <Text 
      fontSize={"30"}
      fontWeight={"bold"}
      bgGradient={"linear(to-r, cyan.400, blue.500)"}
      bgClip={"text"}
      textAlign={"center"}
      >
        Currente Product
      </Text>
      <SimpleGrid 
      column={{
        base: 1,
        nd:2,
        lg:3
      }}
      spacing={10}
      w={"full"}
      >
        {products.map((product)=>{
          <ProductCard key={product._id} product={product} />
        })}
      </SimpleGrid>
      <Text
      fontSize='xl' textAlign={"center"} fontWeight={'bold'} color={'gray.500'}>
        No Products Found{""}
        <Link to={'/create'}>
        <Text as='span' color={'blue.500'} _hover={{ textDecoration:"underline" }} >
          Create a Products
        </Text>
        </Link>
      </Text>
    </VStack>
   </Container>
  )
}

export default HomePage
