"use client";

import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface BtnProps {
  path: string;
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
  isIcon?: boolean;
}

export const Button = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  ClassName,
  path,
  borderRadius,
  color,
  bg,
  border,
  fontWeight,
  iconColor,
  isIcon,
  btnText,
  btnGap,
}: BtnProps) => {
  return (
    <Box
      className={ClassName ?? "btn"}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={fontWeight ?? 600}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "1rem"}
      py={py ?? ".8rem"}
      px={px ?? "1.2rem"}
      onClick={onClick}
      w="fit-content"
      color={color ?? "brand.250"}
      bg={bg ?? "brand.200"}
      border={border ?? "none"}
      boxShadow={"0px 4px 30px 0px #c1baf8b1"}
    >
      <Link href={path} target="_blank">
        {children ?? (
          <Flex gap={btnGap ?? "1rem"} align={"center"}>
            <Text pl="1rem">{btnText}</Text>

            {isIcon && (
              <Icon
                as={GoArrowUpRight}
                w={10}
                h={10}
                color={iconColor ?? "brand 250"}
              />
            )}
          </Flex>
        )}
      </Link>
    </Box>
  );
};
