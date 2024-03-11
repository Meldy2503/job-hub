import React from "react";
import Wrapper from "../wrapper";
import employee from "@/app/assets/images/employee1.webp";
import employer from "@/app/assets/images/interview.webp";
import {
  Box,
  Flex,
  HStack,
  Heading,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Title from "../heading";
import Image from "next/image";
import { Button } from "../button";

interface BannerProps {
  flexDir?: any;
  children: React.ReactNode;
  src: any;
  title: string;
  path: string;
}

const Banner = ({ flexDir, children, src, title, path }: BannerProps) => {
  return (
    <HStack
      gap={"3rem"}
      flexDir={{ base: "column", md: flexDir || "row-reverse" }}
    >
      <Box w={{ base: "100%", md: "49%" }}>
        <Image
          src={src}
          alt={src === employee ? "employee" : "employer"}
          width={800}
          height={800}
          style={{
            borderRadius: "1.2rem",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box w={{ base: "100%", md: "49%" }}>
        <Heading fontSize={"3rem"} mb={"3rem"}>
          {title}
        </Heading>
        <Box mb={"3rem"}>{children}</Box>
        <Button btnText="Sign Up" path={path} isIcon />
      </Box>
    </HStack>
  );
};

const GetStarted = () => {
  return (
    <Wrapper bg="brand.350">
      <HStack>
        <Title>Get started as</Title>
      </HStack>
      <Banner
        title="A Job Seeker"
        path="/employee"
        flexDir={"row"}
        src={employee}
      >
        <Text my={"2rem"} fontSize={"2.4rem"}>
          Sign up now to access thrilling features and unlock exciting
          opportunities. Enhance your profile by uploading your resume and pave
          the way for a successful journey!
        </Text>
        <UnorderedList>
          <ListItem fontSize={"2rem"}>
            Access to a wide range of job opportunities
          </ListItem>
          <ListItem fontSize={"2rem"}>Upload your resume</ListItem>
          <ListItem fontSize={"2rem"}>Get updates on job openings</ListItem>
          <ListItem fontSize={"2rem"}>
            Get notifications on job openings
          </ListItem>
        </UnorderedList>
      </Banner>
      <Spacer my={"14rem"} />
      <Banner title="An Employer" src={employer} path="/employer">
        <Flex gap={"2rem"} flexDir={"column"}>
          <Box>
            <Heading>Register an Account </Heading>
            <Text fontSize={"2rem"} mt={"0.7rem"}>
              Embark on your hiring journey by creating an account for access to
              a diverse pool of top-tier candidates.
            </Text>{" "}
          </Box>
          <Box>
            <Heading>Profile Setup</Heading>{" "}
            <Text fontSize={"2rem"} mt={"0.7rem"}>
              Enhance your hiring process by setting up your profile. Connect
              with candidates who possess proven records of experience and
              expertise.
            </Text>{" "}
          </Box>
          <Box>
            <Heading>Job Posting</Heading>{" "}
            <Text fontSize={"2rem"} mt={"0.7rem"}>
              Broaden your reach by sharing a job post. Reach out to a vast pool
              of over a thousand applicants.
            </Text>
          </Box>
        </Flex>
      </Banner>
    </Wrapper>
  );
};

export default GetStarted;
