import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import team from "@/app/assets/images/team.webp";

const Feature = () => {
  return (
    <Grid
      bgImage={`url(${team.src})`}
      bgSize="cover"
      bgPosition="80%"
      bgRepeat="no-repeat"
      width="100%"
      height="75rem"
      padding={{ base: "2rem", lg: "4.4rem" }}
      placeItems={"center"}
    >
      <Box>
        <Text fontSize={"1.8rem"} textAlign={"center"}>
          JOB HUB FOR EMPLOYEES
        </Text>
        <Text
          textAlign={"center"}
          maxW={"90rem"}
          fontSize={{ base: "3.5rem", md: "5rem" }}
        >
          efficiently request for items, authorize, and manage purchases within
          an organization
        </Text>
      </Box>
    </Grid>
  );
};

export default Feature;
