"use client";

import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

interface Props {
  onClick?: () => void;
  text?: string;
  icon?: any;
}

const NoProfileData = ({ onClick, text, icon }: Props) => {
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      gap={4}
      onClick={onClick}
      cursor={"pointer"}
    >
      <Flex gap="2rem">
        <Icon as={icon} boxSize={10} />
        <Text fontWeight={"600"}>{text}</Text>
      </Flex>
      <Icon
        as={MdAdd}
        boxSize={12}
        color="brand.650"
        bg="brand.350"
        borderRadius={"50%"}
        p=".4rem"
      />
    </Flex>
  );
};

export default NoProfileData;
