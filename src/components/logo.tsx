"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  src: string;
  color?: string;
  width?: number;
}

const Logo = ({ src, color, width }: LogoProps) => {
  return (
    <Link href="/">
      <Flex align={"center"}>
        <Image
          src={src}
          alt="job hub logo"
          height={40}
          width={width ?? 40}
        />

        <Text
          fontSize="1.6rem"
          fontWeight={"800"}
          letterSpacing={"0.15rem"}
          color={color}
        >
          JOBHUB
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
