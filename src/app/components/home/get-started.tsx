import React from "react";
import Wrapper from "../wrapper";
import employee from "@/app/assets/images/young-dark.webp";
import employer from "@/app/assets/images/interview.webp";
import {
  Box,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Title from "../heading";
import Image from "next/image";

const GetStarted = () => {
  return (
    <Wrapper>
      <HStack>
        <Title>Get started as</Title>
      </HStack>
      <HStack gap={"3rem"}>
        <Box w={{ base: "100%", md: "49%" }}>
          <Image src={employee} alt={"employee"} width={800} height={800} />
        </Box>
        <Box w={{ base: "100%", md: "49%" }}>
          <Heading fontSize={"3rem"}>a Job Seeker</Heading>
          <Text my={"2rem"} fontSize={"2.4rem"}>
            Sign up now to access thrilling features and unlock exciting
            opportunities. Enhance your profile by uploading your resume and
            pave the way for a successful journey!
          </Text>
          <UnorderedList fontSize={"2rem"}>
            <ListItem>
              Register to create an account and establish your profile.
            </ListItem>
            <ListItem>
              Proceed to Profile Settings to configure your personal account.
            </ListItem>
            <ListItem>
              Upload your resume and cover letter, and start applying for jobs
            </ListItem>
            <ListItem>
              Click the &quot;Submit&quot; button to complete the process.
            </ListItem>
          </UnorderedList>
        </Box>
      </HStack>
    </Wrapper>
  );
};

export default GetStarted;
