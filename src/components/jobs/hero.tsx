"use client";

import {
  Box,
  Flex,
  FormControl,
  Grid,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { SubmitButton } from "../button";
import { InputField } from "../input-field";

const Hero = () => {
  const [data, setData] = useState({
    jobTitle: "",
    location: "",
  });
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <Flex
        bg={"brand.400"}
        width="100%"
        align={"center"}
        justify={"center"}
        pt={"9rem"}
        color="white"
        textAlign={"center"}
        flexDirection={"column"}
        px="1rem"
      >
      <Text
            fontSize={{ base: "3.5rem", lg: "4.5rem" }}
            fontWeight={"600"}
            w={{ base: "100%", sm: '80%', xl: "50%" }}
            lineHeight={"1.3"}
            mt={"3.5rem "}
            mb={"2rem "}
          >
            Explore and discover the right job for you!
          </Text>
        <Box className="glass" w={"full"} py={"4rem"} my={"4rem"}>
          <FormControl onSubmit={handleSubmit}>
            <Grid
              maxWidth={"128rem"}
              mx={"auto"}
              gap={{base: "1rem", md: '2rem', xl: "4rem"}}
              templateColumns={{base: "1fr", md:"1fr 1fr 200px"}}
              alignItems={"center"}
              w={"95%"}

            >
              <InputField
                name="jobTitle"
                placeholder="Job Title"
                onChange={handleChange}
                icon={HiOutlineSearch}
                focusBorderColor="transparent"
                border="none"
              />
              <InputField
                name="location"
                placeholder="Location"
                onChange={handleChange}
                icon={MdOutlineLocationOn}
                focusBorderColor="transparent"
                border="none"
              />
              <SubmitButton btnText="Find Job" w="full" py="2.35rem" mt="0" />
            </Grid>
          </FormControl>
        </Box>

      </Flex>
    </>
  );
};

export default Hero;
