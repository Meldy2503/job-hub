import React from "react";
import { Button } from "@/components/button";
import { Box, Divider, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import staff4 from "@/assets/images/staff4.webp";
import staff3 from "@/assets/images/staff3.webp";
import staff2 from "@/assets/images/staff2.webp";
import staff1 from "@/assets/images/staff1.webp";

const Hero = () => {
  return (
    <Flex bg={"brand.400"} pt={"8rem"}>
      <Flex alignItems={"center"} pl={"5%"} mx={"auto"}>
        <Box bg={"brand.400"} w={"50%"} pr={"8rem"}>
          <Heading fontSize={{ base: "4rem", md: "5rem", lg: "7rem" }}>
            We’re a fast growing start-up with testimonials from customers
          </Heading>
          <Divider my={"3rem"} bg={"brand.100"} w={"60%"} />
          <Text>
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
        <Box w={"50%"} py={"2rem"} pl={"2rem"} bg={"brand.100"}>
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
          <Box mt={"2rem"}>
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
  );
};

export default Hero;
