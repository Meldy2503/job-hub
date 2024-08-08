"use client";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import EditProfileImgModal from "./edit-modal";

interface ImageProps {
  profile?: any;
}

const ProfileImage = ({ profile }: ImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImg = profile;

  return (
    <Box>
        <Text color="brand.950" fontWeight={"bold"} mb='3rem'>
          {" "}
          Profile Summary
        </Text>
      <Flex align={"flex-end"} cursor="pointer">
        <Avatar
          src={profile?.profilePic}
          name={`${profile?.firstName} ${profile?.lastName}`}
          size={"2xl"}
          w="11rem"
          h="11rem"
          onClick={onOpen}
        />
        <Flex
          onClick={onOpen}
          zIndex={"1"}
          ml="-3.5rem"
          p=".6rem"
          align={"center"}
          justify={"center"}
          borderRadius={"50%"}
        >
          <Icon as={AiFillCamera} color="brand.600" boxSize={8} />
        </Flex>
      </Flex>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"2xl"}
      >
        <ModalOverlay/>
        <ModalContent fontSize={"1.8rem"} py="3rem" px="1rem">
          <HStack mb="4rem" justify={"center"}>
            <Icon as={BsPerson} boxSize={12} mr=".5rem" />
            <Text fontWeight="500" textAlign={"center"}>
              Update Profile Picture
            </Text>
          </HStack>
          <ModalCloseButton size={"lg"} p="1rem" />
          <ModalBody>
            <EditProfileImgModal onClose={onClose} profileImg={profileImg} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProfileImage;
