"use client";

import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button as ChakraButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

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

export const SubmitButton = ({ px, py, bg, mt, btnText, w }: BtnProps) => {
  return (
    <Box>
      <ChakraButton
        fontSize={"1.6rem"}
        px={px ?? "2rem"}
        py={py ?? "2rem"}
        bg={bg ?? "brand.200"}
        mt={mt ?? "1.5rem"}
        as={"button"}
        borderRadius="0.3rem"
        type="submit"
        w={w}
      >
        {btnText ?? "Send Message"}
      </ChakraButton>
    </Box>
  );
};
