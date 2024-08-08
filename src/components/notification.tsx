"use client";

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Notification = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} cursor={"pointer"} position={"relative"}>
        <MdOutlineNotificationsNone fontSize={"3.5rem"} color='white' />
        <Box
          position={"absolute"}
          h="1rem"
          w="1rem"
          bg="red"
          top=".3rem"
          right=".4rem"
          borderRadius={"50%"}
          className="pulse-animate"
        />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton p="1rem" bg="typography.lightGray" size={"lg"} />
          <Heading mt="4rem" mb="2rem" fontSize={"2rem"} textAlign={"center"}>
            Notifications
          </Heading>

          <DrawerBody>
            <Flex gap="1rem" direction={"column"} my="10rem" align={'center'} justify={'center'}>
              <Text>No Notifications yet</Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Notification;
