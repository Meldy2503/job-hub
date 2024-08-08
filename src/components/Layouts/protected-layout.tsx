"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import SidebarContents from "./sidebar-contents";
import Notification from "../notification";
import { Header } from "../header";
import Logo from "../logo";
import logoWhite from "@/assets/images/logo-white.svg";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
interface SidebarProps {
  children?: React.ReactNode;
}

const MenuDrawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent bg="brand.400">
        <Flex justify={"flex-end"} p="1rem">
          <Icon
            as={AiOutlineClose}
            boxSize={10}
            onClick={onClose}
            zIndex={"100"}
            color="white"
          />
        </Flex>
        <DrawerBody p="0">
          <SidebarContents />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const ProtectedLayout = ({ children }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify="space-between"
        h="8rem"
        align={"center"}
        bg="brand.400"
        position={"fixed"}
        zIndex={"1000"}
        top="0rem"
        py="3rem"
        w="100%"
        px={{ base: "1rem", sm: "2rem", md: "3rem" }}
      >
        <Box display={{ base: "block", lg: "none" }}>
          <IconButton
            aria-label="Menu"
            icon={<MdMenu />}
            onClick={onOpen}
            fontSize={"2.5rem"}
            variant={"ghost"}
            color="white"
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Logo src={logoWhite} color={"brand.100"} />
        </Box>

        <Flex gap={"2rem"} align={"center"}>
          <Notification />
          <Header />
        </Flex>
      </Flex>
      <Box bg="brand.400" h="25rem" w="100%" position={"fixed"} top="0rem" />
      <Flex
        minH="100vh"
        padding={"0rem"}
        pr={{ base: "unset" }}
        bg="brand.350"
        mt={{ base: "3rem", lg: "8rem" }}
      >
        <Box display={{ base: "none", lg: "flex" }}>
          <SidebarContents />
        </Box>
        <Box
          mx={{ base: "1rem", sm: "2rem", md: "3rem" }}
          position={"sticky"}
          right="0"
          left={"100%"}
          minH="100vh"
          mt={{ base: "4rem", lg: "0" }}
          w={{ base: "100%", lg: "70%", "2xl": "75%" }}
        >
          {children}
        </Box>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
};

export default ProtectedLayout;
