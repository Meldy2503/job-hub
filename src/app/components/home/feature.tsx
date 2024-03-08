import React from "react";
import Wrapper from "../wrapper";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import worker1 from "@/app/assets/images/worker.webp";
import worker2 from "@/app/assets/images/worker6.webp";
import worker3 from "@/app/assets/images/worker4.webp";
import overlay from "@/app/assets/images/bg-overlay.svg";
import Title from "../heading";

const Feature = () => {
  return (
    <Wrapper bg={"brand.250"} py={{ base: "15rem", md: "20rem" }} my={"7rem"}>
      <Flex justifyContent={"space-between"} w={"100%"}>
        <Box
          w="70%"
          h="0"
          position={"absolute"}
          top={-1}
          left={"15%"}
          borderTop="50px solid white"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
        />
        <Box
          w="70%"
          h="0"
          position={"absolute"}
          bottom={-1}
          left={"15%"}
          borderBottom="50px solid white"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
        />
      </Flex>
      <Box
        color={"brand.100"}
        bgImage={`url(${overlay.src})`}
        bgSize="cover"
        bgPosition="right"
        bgRepeat="no-repeat"
        width="100%"
        borderRadius={"1.4rem"}
      >
        <Box>
          <VStack w={{ base: "100%", md: "90%" }} mx={"auto"}>
            <Title color="brand.100">
              A comprehensive platform with features designed to help you make
              wise spending decisions
            </Title>
            <Text textAlign={"center"}>
              Tailored Effectively to oversee every organization&apos;s spending
              culture and maintain a strong financial position
            </Text>
          </VStack>
          <HStack
            mx={"auto"}
            flexDirection={{ base: "column", lg: "row" }}
            mt={"8rem"}
            gap={"2rem"}
          >
            <Flex
              w={{ base: "100%", lg: "40%" }}
              flexDirection={{ base: "column", md: "row", lg: "column" }}
              gap={"2rem"}
            >
              <Box
                bgImage={`url(${worker2.src})`}
                bgSize="cover"
                bgPosition="right"
                bgRepeat="no-repeat"
                width="100%"
                height="30rem"
                borderRadius={"1.4rem"}
                padding={{ base: "2rem", lg: "4.4rem" }}
              >
                <Flex
                  flexDirection={"column"}
                  h={"100%"}
                  justifyContent={"flex-end"}
                >
                  <Box>
                    <Text mb={"1rem"}>JOB HUB FOR EMPLOYEES</Text>
                    <Heading fontSize={"2.6rem"} fontWeight={500}>
                      Enhances collaboration and transparency
                    </Heading>
                  </Box>
                </Flex>
              </Box>
              <Box
                bgImage={`url(${worker1.src})`}
                bgSize="cover"
                bgPosition="top"
                bgRepeat="no-repeat"
                width="100%"
                height="30rem"
                borderRadius={"1.4rem"}
                padding={{ base: "2rem", lg: "4.4rem" }}
              >
                <Flex
                  flexDirection={"column"}
                  h={"100%"}
                  justifyContent={"flex-end"}
                >
                  <Box>
                    <Text mb={"1rem"}>JOB HUB FOR ORGANISATIONS</Text>
                    <Heading fontSize={"2.6rem"} fontWeight={500}>
                      Enables wise-spending decisions
                    </Heading>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Box
              bgImage={`url(${worker3.src})`}
              bgSize="cover"
              bgPosition="right"
              bgRepeat="no-repeat"
              w={{ base: "100%", lg: "60%" }}
              height={{ base: "40rem", md: "62rem" }}
              borderRadius={"1.4rem"}
              padding={{ base: "2rem", lg: "5rem" }}
            >
              <Flex
                flexDirection={"column"}
                h={"100%"}
                justifyContent={"flex-end"}
              >
                <Box>
                  <Text mb={"1rem"}>JOB HUB FOR EMPLOYERS</Text>
                  <Heading
                    fontSize={{ base: "2.6rem", md: "4rem" }}
                    fontWeight={500}
                  >
                    Streamlines Employment Process
                  </Heading>
                </Box>
              </Flex>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Feature;
