import React from "react";
import { Button } from "@/components/button";
import { Box, Divider, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import staff4 from "@/assets/images/staff4.webp";
import staff3 from "@/assets/images/staff3.webp";
import staff2 from "@/assets/images/staff2.webp";
import staff1 from "@/assets/images/staff1.webp";
import particles from "@/assets/images/particles.svg";

const Hero = () => {
  return (
    <Flex bg={"brand.400"} pt={"12rem"} position={"relative"}>
      <Box
        position={"absolute"}
        mx={"auto"}
        zIndex={5}
        opacity={0.1}
        bottom={0}
        top={0}
        left={0}
        right={0}
        scale={1.5}
      >
        <Image
          src={particles}
          alt={"team"}
          width={1500}
          height={1500}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1.2rem",
          }}
        />
      </Box>
      <Flex maxW={"1280px"} w={"95%"} mx={"auto"}>
        <Flex
          alignItems={"center"}
          mx={"auto"}
          zIndex={10}
          flexDirection={{ base: "column", md: "row" }}
          gap={"8rem"}
        >
          <Box w={{ base: "90%", md: "50%" }}>
            <Heading
              fontSize={{ base: "4rem", md: "4rem", lg: "6rem" }}
              color={"white"}
            >
              We’re a fast growing start-up with
              <Text color={"#FFC052"}>testimonials from customers</Text>
            </Heading>
            <Divider my={"3rem"} bg={"brand.100"} w={"60%"} />
            <Text color={"white"}>
              The software typically enables users to create purchase
              requisitions, submit them for approval, track order status, and
              manage supplier relationships.{" "}
            </Text>
            <Button
              btnText="Request for a Demo"
              path="/get-started"
              isIcon
              bg="brand.100"
              mt="3rem"
            />
          </Box>
          <Box
            w={{ base: "75%", md: "50%" }}
            py={"2rem"}
            pl={"2rem"}
            pr={"2rem"}
            bg={"brand.100"}
            // rounded={"1.2rem"}
          >
            <Flex>
              <Box>
                <Box>
                  <Image
                    src={staff1}
                    alt="about-us"
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Spacer h={"2rem"} />
                <Box>
                  <Image
                    src={staff2}
                    alt="about-us"
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box ml={"2rem"}>
                <Image
                  src={staff3}
                  alt="about-us"
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Flex>
            <Box mt={"2rem"} mb={"-2rem"}>
              <Image
                src={staff4}
                alt="about-us"
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
