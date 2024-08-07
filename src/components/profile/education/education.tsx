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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdAdd, MdEditNotifications } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import CreateEducationModal from "./create-modal";
import EditEducationModal from "./edit-modal";
import { DeleteIcon, EditIcon } from "@/components/action-icons";
import { AddNewButton } from "@/components/button";
import NoProfileData from "@/components/no-profile-data";

interface EducationProps {
  education?: any;
}

const Education = ({ education }: EducationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCreateModal, setIsCreateModal] = useState(true);
  const [educationDetails, setEducationDetails] = useState([]);

  // to display the modal content on click
  const handleModalDisplay = (value: boolean, list?: any) => {
    setIsCreateModal(value);
    if (list) {
      setEducationDetails(list);
    } else return;
  };

  // const education = [
  //   {
  //     id: "1",
  //     institution: "University of Lagos",
  //     location: "Lagos, Nigeria",
  //     degreeType: "B.Sc",
  //     fieldOfStudy: "Computer Science",
  //     startDate: "2015/01/01",
  //     endDate: "2019/01/01",
  //   },
  //   {
  //     id: "2",
  //     institution: "University of Lagos",
  //     location: "Lagos, Nigeria",
  //     degreeType: "B.Sc",
  //     fieldOfStudy: "Computer Science",
  //     startDate: "2015/01/01",
  //     endDate: "2019/01/01",
  //   },
  // ];
  return (
    <Box
      bg="brand.100"
      mt="1.5rem"
      py="3rem"
      px={{ base: "2rem", md: "3rem" }}
      shadow={"sm"}
      borderRadius={"1rem"}
    >
      {education?.length ? (
        <>
          <Flex
            bg="brand.350"
            borderRadius={"2rem"}
            px="1rem"
            py=".5rem"
            w="12rem"
            align={"center"}
            justify={"center"}
            fontWeight={"600"}
          >
            <Text color="brand.950"> Education</Text>
          </Flex>
          {education?.map((item: any) => (
            <Box
              key={item?.id}
              mt="3rem"
              borderBottomColor="brand.750"
              borderBottomWidth={"1px"}
              pb="2rem"
              color="brand.550"
            >
              <Flex justify={"space-between"} gap="3rem" align={"flex-start"}>
                <Text fontWeight="500" color="brand.250">
                  {item?.institution}, {item?.location}
                </Text>
                <HStack gap="1rem">
                  <EditIcon
                    onClick={() => {
                      handleModalDisplay(false, item);
                      onOpen();
                    }}
                  />
                  <DeleteIcon
                  // onClick={() => handleDeleteEducation(item?.id)}
                  // isloading={loadingStates[item.id || ""] || false}
                  />
                </HStack>
              </Flex>

              <Stack mt=".6rem">
                <Text color="brand.950" fontSize="1.6rem">
                  {item?.degreeType}, {item?.fieldOfStudy}
                </Text>

                <Text color="brand.950" fontSize="1.5rem">
                  {item?.startDate} - {item?.endDate}
                </Text>
              </Stack>
            </Box>
          ))}
          <AddNewButton
            onClick={() => {
              handleModalDisplay(true);
              onOpen();
            }}
          />
        </>
      ) : (
        <NoProfileData
          onClick={onOpen}
          icon={PiGraduationCap}
          text="Add Education"
        />
      )}

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"5xl"}
      >
        <ModalOverlay />
        <ModalContent fontSize={"1.8rem"} py="4rem" px="1rem">
          <HStack mb="2rem" justify={"center"}>
            <Icon as={PiGraduationCap} boxSize={12} mr=".5rem" />
            <ModalHeader fontSize={"1.8rem"} p="0rem">
              Education
            </ModalHeader>
          </HStack>
          <ModalCloseButton size={"lg"} p="1rem" />
          <ModalBody>
            {isCreateModal ? (
              <CreateEducationModal onClose={onClose} />
            ) : (
              <EditEducationModal
                onClose={onClose}
                educationDetails={educationDetails}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Education;
