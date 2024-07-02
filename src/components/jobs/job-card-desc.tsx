import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const JobCardDesc = () => {
  return (
    <Box
      border={"1px solid #dfdede"}
      p={"2rem"}
      borderRadius={"1rem"}
      w={"full"}
    >
      <Heading size="md">Client Report</Heading>

      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Summary
          </Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all your clients over the last month.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
          <Text pt="2" fontSize="sm">
            Check out the overview of your clients.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Analysis
          </Heading>
          <Text pt="2" fontSize="sm">
            See a detailed analysis of all your business clients.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default JobCardDesc;
