"use client";
import {
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";

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
     
    >
      <Heading fontSize={'2rem'} color={"brand.400"}
      >
        {title}
      </Heading>
      <Flex justify={'space-between'} columnGap={'2rem'} rowGap={'.5rem'} flexWrap={'wrap'} my='1rem'>
        <Box>
      <Text pt="2">
        {company}
      </Text>
      <Text pt="2">
        {salary}
      </Text>
        </Box>
        <Box>
      <Text pt="2">
        {location}
      </Text>

      <Text pt="2">
        {type}
      </Text>

        </Box>
      </Flex>

        <Box mt='2rem'>
          <Text fontWeight={'semibold'}  color={"brand.150"}>
            Summary
          </Text>
            <Text noOfLines={3}>{summary}</Text>
        </Box>
      <Flex justify={'flex-end'}>

      <Text mt={"1rem"}>
        {posted}
      </Text>
      </Flex>
    </Box>
  );
};

export default JobCard;
