import React from "react";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import {Box} from '@chakra-ui/react'
const Homepage = () => {
  return (
    <Box mb="200px">
      <Box2 />
      <Box3 />
      <Box4 />
      <Box2 />
    </Box>
  );
};

export default Homepage;
