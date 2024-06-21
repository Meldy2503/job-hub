"use client";

import { useEffect, useState } from "react";

import logoWhite from "@/assets/images/logo-white.svg";
import logoYellow from "@/assets/images/logo-yellow.svg";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navData } from "../utils/constants";
import { Button } from "./button";
import Logo from "./logo";

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
        <Logo
          src={scrolled ? logoYellow : logoWhite}
          color={scrolled ? "brand.400" : "brand.100"}
        />

        <Flex gap="3rem" display={{ base: "none", lg: "flex" }}>
          {navData.map((link) => {
            return (
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                key={link.id}
                color={scrolled ? "brand.150" : "brand.100"}
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
          display={{ base: "none", lg: "flex" }}
        >
          <Box color={scrolled ? "brand.150" : "brand.100"}>
            <Link href="/login">Sign in</Link>
          </Box>
          <Button
            path="/register"
            btnText="Get started"
            isIcon
            boxShadow="none"
            px=".7rem"
            py=".7rem"
            bg={scrolled ? "brand.200" : "brand.100"}
          />
        </Flex>
        <Box onClick={onOpen} display={{ base: "block", lg: "none" }}>
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
                      href={menu.path}
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
                <Link href="/login">Sign in</Link>
              </Box>
              <Button
                path="/register"
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
