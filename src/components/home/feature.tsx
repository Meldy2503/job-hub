import React from "react";
import Wrapper from "../wrapper";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import worker1 from "@/assets/images/worker.webp";
import worker2 from "@/assets/images/worker6.webp";
import worker3 from "@/assets/images/worker4.webp";
import overlay from "@/assets/images/bg-overlay.webp";
import Title from "../heading";
import Image from "next/image";

const Feature = () => {
  return (
    <Wrapper bg={"brand.250"} py={{ base: "10rem", md: "15rem" }}>
      <Flex justifyContent={"space-between"} w={"100%"}>
        <Box
          w="70%"
          h="0"
          position={"absolute"}
          top={-1}
          left={"15%"}
          borderTop="50px solid #F0F5FF"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
        />
        <Box
          w="70%"
          h="0"
          position={"absolute"}
          bottom={-1}
          left={"15%"}
          borderBottom="50px solid  white"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
        />
      </Flex>
      <Image
        src={overlay}
        alt="bbb"
        height={600}
        width={600}
        style={{ position: "absolute", bottom: "0rem", left: "0" }}
      />
      <Image
        src={overlay}
        alt="bbb"
        height={600}
        width={600}
        style={{ position: "absolute", bottom: "0rem", right: "0" }}
      />
      <Image
        src={overlay}
        alt="bbb"
        height={600}
        width={600}
        style={{ position: "absolute", top: "0rem", left: "0" }}
      />
      <Image
        src={overlay}
        alt="bbb"
        height={600}
        width={600}
        style={{ position: "absolute", top: "0rem", right: "0" }}
      />

      <Box color={"brand.100"}>
        <VStack w={{ base: "100%", xl: "80%" }} mx={"auto"}>
          <Title color="brand.100">
            A comprehensive platform with features designed to help you make
            wise spending decisions
          </Title>
          <Text textAlign={"center"} w={{ base: "100%", md: "75%", xl: '60%' }} color={"brand.300"}>
            Tailored Effectively to oversee every organization&apos;s spending
            culture and maintain a strong financial position
          </Text>
        </VStack>
        <HStack
          mx={"auto"}
          flexDirection={{ base: "column", lg: "row" }}
          mt={{ base: "5rem", md: "8rem" }}
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
              height="25rem"
              borderRadius={"1.4rem"}
              padding={{ base: "2rem", lg: "4.4rem" }}
              zIndex={10}
            >
              <Flex
                flexDirection={"column"}
                h={"100%"}
                justifyContent={"flex-end"}
              >
                <Box>
                  <Text mb={".5rem"} fontSize={"1.5rem"}>JOB HUB FOR EMPLOYEES</Text>
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
              height="25rem"
              borderRadius={"1.4rem"}
              padding={{ base: "2rem", lg: "4.4rem" }}
              zIndex={10}

            >
              <Flex
                flexDirection={"column"}
                h={"100%"}
                justifyContent={"flex-end"}
              >
                <Box>
                  <Text mb={".5rem"} fontSize={"1.5rem"}>JOB HUB FOR ORGANISATIONS</Text>
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
            height={{ base: "25rem", md: "52rem" }}
            borderRadius={"1.4rem"}
            padding={{ base: "2rem", lg: "5rem" }}
            zIndex={10}

          >
           
            <Flex
              flexDirection={"column"}
              h={"100%"}
              justifyContent={"flex-end"}
            >
              <Box>
                <Text mb={".5rem"} fontSize={"1.5rem"}>JOB HUB FOR EMPLOYERS</Text>
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
    </Wrapper>
  );
};

export default Feature;
