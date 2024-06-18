// 'use client'

// import React from "react";
// import Wrapper from "../wrapper";
// import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import Image from "next/image";
// import vector from "@/assets/images/vector.svg";
// import ring from "@/assets/images/ring.svg";
// import { Button } from "../button";

// const ContactForm = () => {
//   return (
//     <Wrapper>
//     <Flex
//       justifyContent={"space-between"}
//       w={"100%"}
//       alignItems={"center"}
//       direction={{ base: "column-reverse", md: "row" }}
//       gap={"5rem"}
//     >
//       <Box w={{ base: "100%", md: "55%" }}>
//         <Text fontSize="1.6rem">
//           Trusted by over a hundred organisation across the globe
//         </Text>
//         <Box pos={"relative"}>
//           <Box pos={"absolute"} top="-2.9rem" left={"-1rem"}>
//             <Image src={vector} alt={"vector"} width={40} height={40} />
//           </Box>
//           <Heading
//             fontWeight={500}
//             fontSize={{ base: "3rem", xl: "4rem" }}
//             mt={"4.8rem"}
//             mb={"4rem"}
//           >
//             Explore the best procurement platform with your organisation
//           </Heading>

//           <Button path="/jobs" btnText="Get started" isIcon />
//         </Box>
//       </Box>
//       <Flex w={{ base: "100%", md: "37%" }} justifyContent={"center"}>
//         <Image
//           src={ring}
//           alt={"ring"}
//           width={500}
//           height={500}
//           style={{
//             objectFit: "cover",
//             maxWidth: "100%",
//           }}
//         />
//       </Flex>
//     </Flex>
//   </Wrapper>  )
// }

// export default ContactForm

"use client";

// import { Button } from "@/app/utils/button";
// import { Heading, Title } from "@/app/utils/heading";
// import { InputElement } from "@/app/utils/input-element";
// import Text from "@/app/utils/text";
// import Wrapper from "@/app/utils/wrapper";
import MessageIcon from "@/assets/images/contact-img.svg";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Text,
  Textarea,
  useToast
} from "@chakra-ui/react";
import { send } from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import InputField from "../input-field";
import Wrapper from "../wrapper";

interface UserDetailsProps {
  name: any;
  email: any;
  phone: any;
  message: any;
  [key: string]: string;
}

interface Props {
  onClose?: () => void;
}

const ContactForm = ({ onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [userDetails, setUserDetails] = useState<UserDetailsProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!userDetails) {
      return;
    }

    const { name, email, message, phone } = userDetails;

    try {
      setLoading(true);
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_message: message,
      };

      await send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast({
        title: "Success",
        description:
          "Your message has been sent successfully. We would get back to you soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });

      setUserDetails({ name: "", email: "", message: "", phone: ", " });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops!!! Something went wrong, please try again",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });

      console.log("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
        columnGap="3rem"
        rowGap="5rem"
      >
        <Box w={{ base: "100%", md: "45%" }}>
          <Heading fontWeight="600" fontSize={{ base: "3rem", md: "3.5rem" }}>
            We provide every support you may need
          </Heading>
          <Text mt="2rem" mb={{ base: "3rem", md: "5rem" }}>
            Our support superheroes are a click away to help you get the most
            out of monday.com, so you can focus on working without limits.
          </Text>
          <Image
            src={MessageIcon}
            alt="message icon"
            width={500}
            height={500}
          />
        </Box>
        <Box w={{ base: "100%", md: "45%" }} textAlign={"center"}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={"20px"}>
              <InputField
                label="Full name"
                placeholder="Enter your name"
                name="name"
                onChange={handleInputChange}
                value={userDetails.name}
                borderRadius="1rem"
              />

              <InputField
                label="Email address"
                placeholder="Enter your email address"
                name="email"
                onChange={handleInputChange}
                value={userDetails.email}
                type="email"
                borderRadius="1rem"
              />

              <FormControl fontSize={"1.6rem"}>
                <FormLabel fontSize={"1.6rem"} fontWeight={"400"}>
                  Message
                </FormLabel>
                <Textarea
                  _placeholder={{ color: "brand.500" }}
                  isRequired={true}
                  placeholder="Enter your message"
                  value={userDetails.message}
                  fontSize={"1.6rem"}
                  onChange={handleInputChange}
                  borderRadius="1rem"
                  name="message"
                  height={"20rem"}
                  mb="1rem"
                  px="2rem"
                  border="1px solid rgba(0, 0, 0, 0.10)"
                />
              </FormControl>
            </Stack>
            <Box>
              <Button
                fontSize={"1.6rem"}
                px="2rem"
                py="2rem"
                bg="brand.200"
                mt="1.5rem"
                as={"button"}
                borderRadius="1rem"
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default ContactForm;
