"use client";

import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button as ChakraButton,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";

interface BtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  py?: string;
  px?: string;
  fontSize?: string;
  ClassName?: string;
  borderRadius?: string;
  color?: string;
  iconColor?: any;
  bg?: string;
  border?: string;
  fontWeight?: string;
  btnText?: string;
  btnGap?: string;
  type?: any;
  boxShadow?: string;
  mt?: string;
  isIcon?: boolean;
  w?: string;
}

interface LinkProps extends BtnProps {
  path: string;
}

export const Button = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  path,
  ClassName,
  borderRadius,
  color,
  bg,
  border,
  fontWeight,
  iconColor,
  isIcon,
  btnText,
  type,
  w,
  btnGap,
  boxShadow,
  mt,
}: LinkProps) => {
  return (
    <Box
      className={ClassName ?? "btn"}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={fontWeight ?? 600}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "0.3rem"}
      py={py ?? "1rem"}
      px={px ?? "2rem"}
      mt={mt}
      onClick={onClick}
      w={w ?? "fit-content"}
      color={color ?? "brand.250"}
      bg={bg ?? "brand.200"}
      border={border ?? "none"}
      boxShadow={boxShadow ?? "0px 4px 30px 0px #c1baf8b1"}
    >
      <Link href={path}>
        {children ?? (
          <Flex gap={btnGap ?? "1rem"} align={"center"}>
            <Text pl="1rem">{btnText}</Text>

            {isIcon && (
              <Icon
                as={GoArrowUpRight}
                w={8}
                h={8}
                color={iconColor ?? "brand 250"}
              />
            )}
          </Flex>
        )}
      </Link>
    </Box>
  );
};

export const SubmitButton = ({
  px,
  py,
  bg,
  mt,
  btnText,
  w,
  type,
  onClick,
}: BtnProps) => {
  return (
    <Box>
      <ChakraButton
        fontSize={"1.6rem"}
        px={px ?? "2rem"}
        py={py ?? "2rem"}
        bg={bg ?? "brand.200"}
        mt={mt ?? "1.5rem"}
        as={"button"}
        onClick={onClick}
        borderRadius="0.3rem"
        type={type ?? "submit"}
        w={w}
      >
        {btnText ?? "Send Message"}
      </ChakraButton>
    </Box>
  );
};



export const AddNewButton = ({ onClick }: BtnProps) => {
  return (
    <Flex justify={"flex-end"} mt="2rem">
      <ChakraButton
        bg="brand.200"
        py=".4rem"
        px="1.2rem"
        onClick={onClick}
        _hover={{ bg: "brand.350" }}
      >
        <HStack>
          <Text fontWeight={"600"} fontSize="1.4rem">
            Add
          </Text>
          <Icon as={MdAdd} boxSize={6} />
        </HStack>
      </ChakraButton>
    </Flex>
  );
};
