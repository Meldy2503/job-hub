"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { navData } from "../utils/constants";
import { Button } from "./button";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMenu, setCurrentMenu] = useState("#home");
  const handlecurrentMenu = (link: string) => {
    setCurrentMenu(link);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      w="100%"
      py="1.5rem"
      position={"fixed"}
      top={"0px"}
      bg={scrolled ? "brand.350" : "transparent"}
      zIndex={500}
    >
      <Flex
        w="95%"
        maxW={"1280px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.100"
      >
        <HStack>
          <FaPlay
            style={{
              fontSize: "2rem",
              color: "#ff5621",
              cursor: "pointer",
            }}
          />
          <Text
            fontSize="1.6rem"
            fontWeight={"500"}
            color={scrolled ? "brand.150" : "brand.100"}
          >
            jobHub
          </Text>
        </HStack>
        <Flex gap="3rem" display={{ base: "none", md: "flex" }}>
          {navData.map((link) => {
            return (
              <Box
                key={link.id}
                color={
                  currentMenu === link.id
                    ? "brand.200"
                    : scrolled
                    ? "brand.150"
                    : "brand.100"
                }
                _hover={{
                  color: "brand.250",
                }}
                onClick={() => {
                  handlecurrentMenu(link.id);
                }}
              >
                <Link href={link.path}>{link.name}</Link>
              </Box>
            );
          })}
        </Flex>
        <Flex
          align={"center"}
          gap="2rem"
          display={{ base: "none", md: "flex" }}
        >
          <Box color={scrolled ? "brand.150" : "brand.100"}>
            <Link href="/">Sign in</Link>
          </Box>
          <Button
            path="/"
            btnText="Get started"
            isIcon
            boxShadow="none"
            px=".7rem"
            py=".7rem"
            bg={scrolled ? "brand.200" : "brand.100"}
          />
        </Flex>
        <Box onClick={onOpen} display={{ base: "block", md: "none" }}>
          <Icon
            as={isOpen ? AiOutlineClose : GiHamburgerMenu}
            boxSize={10}
            cursor={"pointer"}
            color={scrolled ? "brand.150" : "brand.100"}
          />
        </Box>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent mt="6rem" pb="5rem" pt="1rem" bg="brand.350">
          <DrawerBody>
            <Flex direction="column" rowGap={"4rem"} align={"center"} mt="2rem">
              {navData.map((menu) => {
                return (
                  <Box
                    key={menu.id}
                    border="none"
                    _hover={{
                      color: "brand.250",
                    }}
                    color={currentMenu === menu.id ? "brand.200" : "brand.150"}
                  >
                    <Link
                      href={menu.id}
                      onClick={() => {
                        handlecurrentMenu(menu.id);
                        onClose();
                      }}
                    >
                      {menu.name}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
            <Flex align={"center"} gap="4rem" direction={"column"}>
              <Box mt="4rem">
                <Link href="/">Sign in</Link>
              </Box>
              <Button
                path="/"
                btnText="Get started"
                isIcon
                boxShadow="none"
                px=".7rem"
                py=".7rem"
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
