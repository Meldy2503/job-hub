import map from "@/app/assets/images/metrics.webp";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../heading";

const Metrics = () => {
  return (
    <Box
      bgImage={`url(${map.src})`}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      py={{ base: "7rem", md: "10rem" }}
    >
      <Box width="90%" maxW={"1280px"} m={"0 auto"}>
        <Flex
          w={"100%"}
          flexDir={"column"}
          alignItems={"center"}
          color={"brand.300"}
        >
          <Title color={"brand.100"}>Our Impacts in Metrics</Title>
          <Text
            textAlign={"center"}
            w={{ base: "100%", md: "75%", xl: "60%" }}
            mb={"2rem"}
          >
            Explore the art of living well with Dobble, where each product is a
            thoughtful choice that enriches your life and contributes to a more
            sustainable world.
          </Text>
        </Flex>

        <Box mt={{ base: "2rem", sm: "5rem" }}>
          <Flex
            h={{ base: "inherit", sm: "18rem" }}
            w={"100%"}
            alignItems={"center"}
            color={"brand.100"}
            fontSize={"1.4rem"}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "4rem", sm: "0" }}
          >
            <Flex
              w={"33%"}
              h={"100%"}
              justifyContent={"center"}
              align={"center"}
              direction={"column"}
              gap=".5rem"
            >
              <Heading
                fontWeight={"400"}
                fontSize={{ base: "4rem", md: "5rem" }}
              >
                +2800
              </Heading>
              <Text color="#A7FFB5">Jobs Posted</Text>{" "}
            </Flex>
            <Flex
              // borderX={"1px solid #bab8b8"}
              borderX={{ base: "none", sm: "1px solid #ffffff" }}
              w={"33%"}
              h={"100%"}
              justifyContent={"center"}
              direction={"column"}
              align={"center"}
              gap=".5rem"
            >
              <Heading
                fontWeight={"400"}
                fontSize={{ base: "4rem", md: "5rem" }}
              >
                {" "}
                +100
              </Heading>
              <Text
                color="#FFB2DC
"
              >
                Organisations
              </Text>{" "}
            </Flex>
            <Flex
              w={"33%"}
              h={"100%"}
              justifyContent={"center"}
              align={"center"}
              direction={"column"}
              gap=".5rem"
            >
              <Heading
                fontWeight={"400"}
                fontSize={{ base: "4rem", md: "5rem" }}
              >
                {" "}
                +50
              </Heading>
              <Text
                color="#9CCEFF
"
              >
                Vendors
              </Text>{" "}
            </Flex>
          </Flex>
          <Flex
            borderTop={{ base: "none", sm: "1px solid #ffffff" }}
            h={{ base: "inherit", sm: "18rem" }}
            alignItems={"center"}
            justifyContent={"space-around"}
            color={"brand.100"}
            fontSize={"1.4rem"}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "4rem", sm: "0" }}
            mt={{ base: "4rem", sm: "0" }}
          >
            <Flex
              w={"50%"}
              h={"100%"}
              justifyContent={"center"}
              borderRight={{ base: "none", sm: "1px solid #ffffff" }}
              align={"center"}
              direction={"column"}
              gap=".5rem"
            >
              <Heading
                fontWeight={"400"}
                fontSize={{ base: "4rem", md: "5rem" }}
              >
                {" "}
                +150,000
              </Heading>
              <Text
                color="#FF8E79
"
              >
                Employees
              </Text>{" "}
            </Flex>
            <Flex
              w={"50%"}
              h={"100%"}
              justifyContent={"center"}
              align={"center"}
              direction={"column"}
              gap=".5rem"
            >
              <Heading
                fontWeight={"400"}
                fontSize={{ base: "4rem", md: "5rem" }}
              >
                {" "}
                $1b
              </Heading>
              <Text
                color="#FBCC57
"
              >
                Company Value
              </Text>{" "}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Metrics;
