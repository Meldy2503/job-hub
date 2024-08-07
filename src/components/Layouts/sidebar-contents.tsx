"use client";

import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { BsArrow90DegLeft, BsLaptop } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import logoWhite from "@/assets/images/logo-white.svg";
import Logo from "../logo";

const SidebarContents = () => {
  const currentRoute = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  const links = [
    {
      href: "/pages/user-profile",
      text: "Profile",
      icon: MdPersonOutline,
      ml: "0rem",
      size: "10",
    },
    {
      href: "/pages/user-profile/my-jobs",
      text: "My Jobs",
      icon: BsLaptop,
      ml: ".3rem",
      size: "8",
    },
  ];

  return (
    <Box
      w={{ base: "94%", lg: "25%", "2xl": "20%" }}
      borderWidth={{ base: "0", lg: "1px" }}
      py={{ base: "2rem", lg: "4rem" }}
      px={{ base: "2rem", xl: "3rem" }}
      h={{ base: "95vh", lg: "85vh", "3xl": "95vh" }}
      position={"fixed"}
      left="0px"
      zIndex={"200"}
      bottom="0"
      bg="brand.400"
      top={{ base: "3rem", lg: "8rem" }}
      color="brand.100"
      m="1rem"
      borderRadius={"1rem"}
      shadow={"md"}
    >
      <Flex
        mb="3rem"
        align={"center"}
        justify={"center"}
        display={{ base: "flex", lg: "none" }}
      >
        <Logo src={logoWhite} color={"brand.100"} width={65} />
      </Flex>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Avatar
          bg="brand.200"
          color="black"
          src=""
          name="John Doe"
          size={"2xl"}
          w={{ base: "10rem", lg: "12rem" }}
          h={{ base: "10rem", lg: "12rem" }}
        />
        <Text fontSize={"2.5rem"} fontWeight={"600"} mt="2rem">
          John Doe
        </Text>
        <Text py=".5rem">johnhhhh@gmail.com</Text>
        <Text>Lagos, Nigeria</Text>
      </Flex>
      <HStack
        align="center"
        bg="white"
        p="1.2rem"
        justify={"center"}
        color="blue"
        shadow={"sm"}
        borderRadius={"1rem"}
        onClick={handleLogout}
        cursor={"pointer"}
        position="sticky"
        top="90%"
      >
        <Icon as={BsArrow90DegLeft} boxSize={6} mr=".5rem" />
        <Text fontWeight={"700"} fontSize={"1.45rem"}>
          LOG OUT
        </Text>
      </HStack>
    </Box>
  );
};

export default SidebarContents;
