"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navData } from "../utils/constants";
import { Button } from "./button";
import logoWhite from "@/assets/images/logo-white.svg";
import logoYellow from "@/assets/images/logo-yellow.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMenu, setCurrentMenu] = useState("/");
  const handlecurrentMenu = (link: string) => {
    setCurrentMenu(link);
  };

  const pathname = usePathname();

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
      boxShadow={scrolled ? "0px 0px 10px 0px #0000003b" : "none"}
    >
      <Flex
        w="95%"
        maxW={"1280px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.100"
      >
        <Link href="/">
          <Flex align={"flex-end"}>
            <Image
              src={scrolled ? logoYellow : logoWhite}
              alt="job hub logo"
              height={20}
              width={40}
            />

            <Text
              fontSize="1.6rem"
              fontWeight={"800"}
              letterSpacing={"0.15rem"}
              color={scrolled ? "brand.400" : "brand.100"}
            >
              JOBHUB
            </Text>
          </Flex>
        </Link>
        <Flex gap="3rem" display={{ base: "none", md: "flex" }}>
          {navData.map((link) => {
            return (
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                key={link.id}
                color={
                  // link.path === pathname
                  // ? "brand.200"
                  // :
                  scrolled ? "brand.150" : "brand.100"
                }
                _hover={{
                  color: "brand.200",
                }}
                onClick={() => {
                  handlecurrentMenu(link.id);
                }}
              >
                <Link href={link.path}>{link.name}</Link>
                <Box
                  w={link.path === pathname ? "2.5rem" : "0"}
                  h={".5rem"}
                  bg={"brand.200"}
                  rounded={"full"}
                />
              </Flex>
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
