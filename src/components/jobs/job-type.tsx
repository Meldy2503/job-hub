import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

interface JobTypeProps {
  icon: any;
}

const JobType = ({ icon }: JobTypeProps) => {
  return (
    <Flex gap={".4rem"} bg={"green"} w={"fit-content"} color={"white"}>
      <Text>Full-Time</Text>
      <Icon as={icon} />
    </Flex>
  );
};

export default JobType;
