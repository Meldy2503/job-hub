"use client";

import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import hermes from "@/app/assets/images/hermes.svg";
import starks from "@/app/assets/images/starks.svg";
import sparkles from "@/app/assets/images/sparkles.svg";
import elohq from "@/app/assets/images/elohq.svg";
import starplug from "@/app/assets/images/starplug.svg";
import sblend from "@/app/assets/images/sblend.svg";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Title from "../heading";

const OurClients = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Wrapper>
      <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
        <Title>Client’s from around the world</Title>
        <Text textAlign={"center"} maxW={"757px"} mb={"5rem"}>
          The software typically enables users to create purchase requisitions,
          submit them for approval, track order status, and manage supplier
          relationships.
        </Text>
      </Flex>

      <Box>
        <Flex
          borderBottom={{ base: "none", sm: "1px solid #0000004c" }}
          h={{ base: "inherit", sm: "13rem" }}
          alignItems={"center"}
          justifyContent={"space-around"}
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "4rem", sm: "0" }}
        >
          <Flex
            w={"50%"}
            h={"100%"}
            justifyContent={"center"}
            borderRight={{ base: "none", sm: "1px solid #0000004c" }}
          >
            <Image
              src={elohq}
              alt={"elohq"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex w={"50%"} h={"100%"} justifyContent={"center"}>
            <Image
              src={starplug}
              alt={"starplug"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
        </Flex>

        <Flex
          h={{ base: "inherit", sm: "13rem" }}
          w={"100%"}
          alignItems={"center"}
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "4rem", sm: "0" }}
          mt={{ base: "4rem", sm: "0" }}
        >
          <Flex
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={sblend}
              alt={"sblend"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex
            borderX={{ base: "none", sm: "1px solid #0000004c" }}
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={sparkles}
              alt={"sparkles"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={hermes}
              alt={"hermes"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default OurClients;


// import styled from "styled-components";

// export const Container = styled.section`
//   margin: 0 auto;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
// `;

// export const BackgroundVideoContainer = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;

//   video {
//     min-width: 100%;
//     min-height: 100%;
//     position: fixed;
//     right: 0;
//     left: 0;
//     bottom: 0;
//   }
// `;

// export const TextContainer = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   width: 100vw;
//   height: 100%;
//   position: fixed;
//   right: 0;
//   left: 0;
//   bottom: 0;
// `;

// export const Text = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: #f1f1f1;
//   text-align: center;
//   width: 60%;
//   letter-spacing: 0.5rem;

//   @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
//     width: 75%;
//   }

//   h3 {
//     margin-bottom: 3rem;
//     font-family: "Metal", cursive;
//     font-size: 2.5rem;
//     line-height: 1.4;

//     @media (max-width: 600px) {
//       font-size: 1.8rem;
//       margin-bottom: 2rem;
//     }
//   }

//   h6 {
//     margin: 3rem 0;
//     font-size: 2rem;

//     @media (max-width: 600px) {
//       font-size: 1.6rem;
//       margin: 2rem 0;
//     }
//     @media (max-width: 400px) {
//       font-size: 1.4rem;
//     }
//   }
// `;
// export const Header = styled.div`
//   border: 4px solid #fff;
//   margin: 0 auto;

//   h1 {
//     font-size: 4rem;
//     font-weight: bolder;
//     padding: 2rem 0;
//     line-height: 1.4;

//     @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
//       font-size: 3.5rem;
//     }

//     @media (max-width: 600px) {
//       font-size: 2.5rem;
//     }
//     @media (max-width: 400px) {
//       font-size: 2rem;
//     }
//   }

//   .subHeader {
//     @media (max-width: 600px) {
//       display: block;
//     }
//   }

//   .yellow {
//     color: #e48f04;
//   }
// `;
