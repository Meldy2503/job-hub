"use client";

import authImage from "@/assets/images/login-img3.webp";
import logoYellow from "@/assets/images/logo-yellow.svg";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Logo from "../logo";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const AuthWrapper = ({ children, title }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 960px)");
  return (
      <HStack align={"stretch"}>
        <Stack
          flex={0.8}
          textAlign="center"
          backgroundImage={`url(${authImage.src})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
           h="100vh"
          position={"sticky"}
          top="0px"
          display={{ base: "none", lg: "flex" }}
        >
          <Center
            bgGradient="linear(to-l, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
            h="100%"
            color="white"
            flexDir="column"
          >
            <Box mt="30rem" textAlign={"center"} mx="auto">
              <Heading
                fontSize={isMobile ? "3rem" : "4rem"}
                fontWeight="300"
                textAlign={"center"}
                color="brand.100"
              >
                <span>One step closer to finding</span>
                <Flex gap="1rem" align={"center"} justify={"center"}>
                  <span>the right</span>

                  <span
                    style={{
                      color: "#FFAF2E",
                      fontWeight: "700",
                      fontSize: isMobile ? "3rem" : "4rem",
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: ["EMPLOYER", "TALENT"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </Flex>
              </Heading>
              <Box mx="auto" w={{ base: "90%", xl: "70%" }} mt="2rem">
                <Text color="brand.100" textAlign={"center"}>
                  We connect the best Talents to the right Employers, the best
                  Employers to the right Talents{" "}
                </Text>
              </Box>
            </Box>
          </Center>
        </Stack>
        <Center mx="auto" flex={1}>
          <Flex
            alignSelf={"center"}
            justify={"center"}
            direction={"column"}
            w={"90%"}
             maxW={"500px"}
            h="100vh"
          >
            <Flex
              justify="center"
              align="center"
              direction="column"
              top={{ base: "3rem", lg: "2rem" }}
              bg="brand.100"
              position="sticky"
              w="100%"
              zIndex={"100"}
              mb='1rem'
              mt={isMobile ? "2rem" : "1.5rem"}
            >
              <Logo src={logoYellow} color={"brand.400"} width={60} />
              <Heading
                textAlign="center"
                variant="h5"
                fontWeight="700"
                my="2rem"
              >
                {title}
              </Heading>
            </Flex>
            <HStack>
              <Center mx="auto" flex={1}>
                {children}
              </Center>
            </HStack>
          </Flex>
        </Center>
      </HStack>
  );
};

export default AuthWrapper;
