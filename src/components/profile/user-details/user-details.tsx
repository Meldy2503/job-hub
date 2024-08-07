"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdEditNotifications } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import EditUserDetailsModal from "./edit-modal";
import { EditIcon } from "@/components/action-icons";

interface DetailsProps {
  profile?: any;
}

const Details = ({ profile }: DetailsProps) => {
  const profileDetails = profile;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {" "}
      <Flex justify={"space-between"} align={"center"} gap="3rem" mt="3rem">
        <Text fontWeight="bold" fontSize={{ base: "2.5rem", md: "3rem" }}>
          John Doe
        </Text>
        <EditIcon onClick={onOpen} />
      </Flex>
      <Box w="95%" mt="1rem">
        <Flex my="1rem" columnGap={"4rem"} rowGap={"1.2rem"} flexWrap={"wrap"}>
          <HStack gap=".5rem">
            <Icon as={AiFillMail} boxSize={8} />
            <Text fontSize={"1.6rem"}> john@gmail.com</Text>
          </HStack>
          <HStack gap=".5rem">
            <Icon as={BiSolidPhoneCall} boxSize={8} />
            <Text fontSize={"1.6rem"}>07068466967</Text>
          </HStack>
          <HStack gap=".5rem">
            <Icon as={ImLocation} boxSize={7} />
            <Text fontSize={"1.6rem"}>Lagos, Nigeria</Text>
          </HStack>
        </Flex>

        {profile?.profileSummary && (
          <>
            <Heading fontWeight="700" mt="4rem" variant="p">
              {" "}
              Profile Summary
            </Heading>
            <Text mt="1rem">john is a passionate person</Text>
          </>
        )}
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent fontSize={"1.8rem"} py="3rem" px="1rem">
          <HStack mb="4rem" justify={"center"}>
            <Icon as={BsPerson} boxSize={12} mr=".5rem" />
            <Text fontSize={"1.8rem"} fontWeight={'semibold'}>
              Contact Information
            </Text>
          </HStack>
          <ModalCloseButton size={"lg"} p="1rem" />
          <ModalBody>
            <EditUserDetailsModal
              onClose={onClose}
              profileDetails={profileDetails}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Details;
