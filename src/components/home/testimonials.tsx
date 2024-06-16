"use client";

import Title from "@/components/heading";
import Wrapper from "@/components/wrapper";
import { testimonialData } from "@/utils/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <Wrapper bg="brand.350">
      <Title>Trusted by the biggest players </Title>
      <Box mt={{ base: "0", md: "5rem" }}>
        <Slider {...settings}>
          {testimonialData.map((item, index) => {
            return (
              <Box
                pb="2rem"
                key={index}
                borderRadius={"2rem"}
                position={"relative"}
              >
                <style>
                  {`
                  .slick-dots li button:before {
                    font-size: 1rem;
                    color: #FFAF2E;
                  }
                  .slick-dots li.slick-active button:before {
                     color: #FFAF2E;
                    font-size: 2rem;

                  }
                
                `}
                </style>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  boxShadow={"2px 2px 5px 0px #C1BAF8B2"}
                  bg="brand.100"
                  direction={{ base: "column", md: "row" }}
                  p="2rem"
                  borderRadius="1.5rem"
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <Image
                      src={item.img}
                      alt="reviewers image"
                      height={800}
                      width={800}
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        width: "50rem",
                      }}
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <Flex gap="1rem" pt={{ base: "1rem", md: "0" }}>
                      <FaStar color="#FFAF2E" size={20} />
                      <FaStar color="#FFAF2E" size={20} />
                      <FaStar color="#FFAF2E" size={20} />
                      <FaStar color="#FFAF2E" size={20} />
                      <FaStar color="#FFAF2E" size={20} />
                    </Flex>
                    <Box pb="2rem" pt="1.5rem">
                      <Text lineHeight={"1.8"}>{item.text}</Text>
                    </Box>
                    <Box h='.25rem' w={{ base: "80%", sm: "60%" }} bg='brand.200'/>
                    <Box  pt="1.5rem" pb=".5rem">
                      <Text fontSize="1.6rem" fontWeight={"600"}>
                        {item.reviewer}
                      </Text>
                      <Text fontSize="1.5rem">{item.title}</Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Wrapper>
  );
};

export default Testimonials;
