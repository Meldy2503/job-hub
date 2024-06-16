"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";
import loadingIcon from "@/assets/images/loading-icon.svg";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image src={loadingIcon} height={100} width={100} alt="loading icon" />
    </Center>
  );
};

export default LoadingIcon;
