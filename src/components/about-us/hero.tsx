import aboutUsImage from "@/assets/images/about-us.webp";
import particles from "@/assets/images/particles.svg";
import { Button } from "@/components/button";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <Flex
      bg={"brand.600"}
      pt={{ base: "11rem", md: "10rem" }}
      pb={{ base: "0rem", md: "10rem" }}
      position={"relative"}
      h={{ base: "100%", md: "100%" }}
      overflow={"hidden"}
    >
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
        <Image src={particles} alt={"particles"} width={1500} height={800} />
      </Box>
      <Flex maxW={"1280px"} w={"95%"} mx={"auto"}>
        <Flex
          mx={"auto"}
          zIndex={10}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "3rem", md: "8rem" }}
        >
          <Box w={{ base: "100%", md: "50%" }} mt={{ base: "0", md: "5rem" }}>
            <Heading
              fontSize={{ base: "3.5rem", md: "4rem", lg: "5.5rem" }}
              color={"white"}
            >
              We’re a fast growing start-up with &nbsp;
              <span style={{ color: "#FFC052", marginLeft: "-1rem" }}>
                testimonials from customers
              </span>
            </Heading>
            <Divider my={"3rem"} bg={"brand.100"} w={"60%"} />
            <Text color={"white"}>
              The software typically enables users to create purchase
              requisitions, submit them for approval, track order status, and
              manage supplier relationships.{" "}
            </Text>
            <Button
              btnText="Join Us"
              path="/get-started"
              isIcon
              bg="brand.100"
              mt="3rem"
            />
          </Box>
          <Box w={{ base: "0%", md: "50%" }} />
          <Box
            w={{ base: "100%", md: "47%" }}
            py={"2rem"}
            px={"2rem"}
            bg={"brand.100"}
            position={{ base: "relative", md: "absolute" }}
            right="0"
            top={{ base: "0", md: "12rem" }}
          >
            <Image
              src={aboutUsImage}
              alt="about-us"
              width={1500}
              height={1500}
              quality={100}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
