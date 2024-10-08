import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import team from "@/assets/images/team.webp";

const Feature = () => {
  return (
    <Grid
      bgImage={`url(${team.src})`}
      bgSize="cover"
      bgPosition="top center"
      bgRepeat="no-repeat"
      width="100%"
      height="70rem"
      padding={{ base: "2rem", lg: "4.4rem" }}
      placeItems={"center"}
    >
      <Box>
        <Text fontSize={"1.8rem"} textAlign={"center"} color={"white"} mb='1rem'>
          JOB HUB FOR EMPLOYEES
        </Text>
        <Text
          textAlign={"center"}
          maxW={"90rem"}
          fontSize={{ base: "3rem", md: '3.7rem', lg: "4.5rem" }}
          color={"white"}
        >
          Efficiently request for items, authorize, and manage purchases within
          an organization
        </Text>
      </Box>
    </Grid>
  );
};

export default Feature;
