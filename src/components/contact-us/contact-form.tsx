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
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { send } from "@emailjs/browser";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import TextareaAutoSize from "react-textarea-autosize";
import Wrapper from "../wrapper";
import InputField from "../input-field";
import Image from "next/image";
import MessageIcon from "@/assets/images/contact-img.svg";

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
      <Flex flexDirection={"column"} gap={"23px"} id="contact-me" mb={"30px"}>
        <Flex
          justify={"space-between"}
          direction={{ base: "column-reverse", md: "row" }}
          columnGap="3rem"
          rowGap="5rem"
        >
             <Box w={{ base: "100%", md: "35%", lg: "30%" }}>
            <Heading mb="2rem" fontWeight="500" variant="h6">
              We provide every support you may need
            </Heading>
            <Text>
              Our support superheroes are a click away to help you get the most
              out of monday.com, so you can focus on working without limits.
            </Text>
            <Image
              src={MessageIcon}
              alt="message icon"
              width={800}
              height={800}
              style={{
                borderRadius: "1.2rem",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Box
            w={{ base: "100%", md: "60%", lg: "65%" }}
            px={{ base: "1.5rem", sm: "3rem", lg: "6rem" }}
            borderRadius="1rem"
            textAlign={"center"}
            py="6rem"
            border="1px solid rgba(0, 0, 0, 0.15)"
          >
            <form onSubmit={handleFormSubmit}>
              <Stack spacing={"15px"}>
                <InputField
                  label="Name"
                  placeholder="Jane Smith"
                  name="name"
                  onChange={handleInputChange}
                  value={userDetails.name}
                  borderRadius="1rem"
                  isRequired={true}
                />

                <InputField
                  label="Email address"
                  placeholder="jane@gmail.com"
                  name="email"
                  onChange={handleInputChange}
                  value={userDetails.email}
                  type="email"
                  borderRadius="1rem"
                  isRequired={true}
                />
                <InputField
                  label="Phone number"
                  placeholder="xxxxx"
                  name="phone"
                  onChange={handleInputChange}
                  value={userDetails.phone}
                  type="phone"
                  borderRadius="1rem"
                  isRequired={true}
                />
                <FormControl fontSize={"1.6rem"}>
                  <FormLabel fontWeight="500" fontSize={"1.6rem"}>
                    Message
                  </FormLabel>
                  <Textarea
                    as={TextareaAutoSize}
                    isRequired={true}
                    placeholder="Enter your message"
                    value={userDetails.message}
                    fontSize={"1.6rem"}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    borderRadius="1rem"
                    name="message"
                    mb="1rem"
                    px="2rem"
                    border="1px solid rgba(0, 0, 0, 0.10)"
                    size="lg"
                  />
                </FormControl>
              </Stack>
              <Box>
                <Button
                  fontSize={"15px"}
                  w={{ base: "80%", sm: "60%", md: "50%" }}
                  mt="1.5rem"
                  as={"button"}
                  type="submit"
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </form>
          </Box>
         
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default ContactForm;
