"use client";

import {
    Avatar,
    Flex,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <Menu>
      <MenuButton>
        <HStack spacing={3}>
          <Avatar src="" name="Admin D" size={"md"} bg="white" color="blue" />
          <Icon as={FaAngleDown} boxSize={6} color="white" />
        </HStack>
      </MenuButton>
      <MenuList shadow="lg" fontSize={"1.6rem"} w="30rem">
        <VStack py="2rem" borderBottom="2px solid #e5e5e5">
          <Avatar src="" name="Admin D" size={"xl"} />
        </VStack>

        <MenuItem borderBottom="2px solid #f1f1f5">
          <Flex align={"center"} justify={"center"} mx="auto" py="0.5rem">
            <Link href="/user-profile">My Profile</Link>
          </Flex>
        </MenuItem>
        <MenuItem borderBottom="2px solid #f1f1f5">
          <Flex align={"center"} justify={"center"} mx="auto" py=".5rem">
            <Link href="/user-profile/my-jobs">My Jobs</Link>
          </Flex>
        </MenuItem>
        <MenuItem borderBottom="2px solid #f1f1f5">
          <Flex align={"center"} justify={"center"} mx="auto" py=".5rem">
            <Link href="/dashboard/change-password">Change Password</Link>
          </Flex>
        </MenuItem>

        <MenuItem onClick={handleLogout} py="1rem">
          <Flex align={"center"} justify={"center"} mx="auto" color="blue">
            Sign out
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
