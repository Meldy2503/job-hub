"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
  summary: string;
  posted: string;
}

const JobCard = ({
  title,
  company,
  salary,
  location,
  type,
  summary,
  posted,
}: JobCardProps) => {
  return (
    <Box
      border={"1px solid #dfdede"}
      p={"2rem"}
      borderRadius={"1rem"}
      w={"full"}
    >
      <Heading as={"h3"} size="lg">
        {title}
      </Heading>
      <Text pt="2" fontSize="lg">
        {company}
      </Text>
      <Text pt="2" fontSize="lg">
        {salary}
      </Text>
      <Text pt="2" fontSize="lg">
        {location}
      </Text>

      <Text pt="2" fontSize="lg">
        {type}
      </Text>

      <Stack divider={<StackDivider />} spacing="4" mt={"2rem"}>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Summary
          </Heading>
          <UnorderedList fontSize={"md"}>
            <ListItem>{summary}</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
      <Text fontSize="sm" mt={"2rem"}>
        {posted}
      </Text>
    </Box>
  );
};

export default JobCard;
