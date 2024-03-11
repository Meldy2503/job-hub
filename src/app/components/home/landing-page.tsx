"use client";

import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { Button } from "../button";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box mx="auto" w="100%" h="100vh" overflow="hidden" position="relative">
      <Box
        w="50%"
        h="0"
        position={"absolute"}
        bottom={-1}
        right={"0"}
        borderBottom="50px solid white"
        borderLeft="50px solid transparent"
        zIndex={10}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="./../assets/images/bg-image.webp"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        <source src="/videos/bg-video1.webm" type="video/webm" />
        Your browser is not supported!
      </video>
      <Box
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        right="0"
        zIndex={5}
        className="bg"
      >
        <Flex
          maxWidth="1280px"
          color="brand.100"
          mx="auto"
          align="center"
          w="90%"
          h="100%"
        >
          <Flex direction="column" w={{ base: "100%", md: "80%", lg: "50%" }}>
            <Heading fontSize={isMobile ? "3rem" : "6rem"} fontWeight="600">
              A software embedded with features for
              <span
                style={{
                  color: "#FFAF2E",
                  fontSize: isMobile ? "3rem" : "6rem",
                }}
              >
                <Typewriter
                  options={{
                    strings: ["Employers", "Job Seekers", "Organisations"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </Heading>

            <Flex
              gap="2rem"
              fontWeight="thin"
              color="brand.300"
              mt="2rem"
              flexWrap="wrap"
            >
              <Text>RELIABLE</Text> |<Text>COMPREHENSIVE </Text> |
              <Text>EASY TO USE </Text>
            </Flex>
            <Button
              path="/jobs"
              btnText="View Jobs"
              isIcon
              boxShadow="none"
              mt={isMobile ? "2rem" : "4rem"}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;
