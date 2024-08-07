"use client";

import { useState } from "react";

import { DeleteIcon, EditIcon } from "@/components/action-icons";
import { AddNewButton } from "@/components/button";
import NoProfileData from "@/components/no-profile-data";
import {
  Box,
  Flex,
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
  useDisclosure
} from "@chakra-ui/react";
import { PiCertificateDuotone } from "react-icons/pi";
import CreateCertificationModal from "./create-modal";
import EditCertificationModal from "./edit-modal";

interface Props {
  certificate?: any;
}

const Certifications = ({ certificate }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [isCreateModal, setIsCreateModal] = useState(true);
  const [certificateDetails, setCertificateDetails] = useState([]);

  // to display the modal content on click
  const handleModalDisplay = (value: boolean, list?: any) => {
    setIsCreateModal(value);
    if (list) {
      setCertificateDetails(list);
    } else return;
  };

  // const certificate = [
  //   {
  //     id: "1",
  //     name: "Certified Scrum Master",
  //     organization: "Scrum Alliance",
  //     yearIssued: "2020/01/01",
  //     expiryYear: "2022/01/ 01",
  //   },
  //   {
  //     id: "2",
  //     name: "Certified Scrum Product Owner",
  //     organization: "Scrum Alliance",
  //     yearIssued: "2020/01/01",
  //     expiryYear: "2022/01/01",
  //   },
  // ];

  return (
    <Box
      bg="brand.100"
      mt="1.5rem"
      mb="3rem"
      py="3rem"
      px={{ base: "2rem", md: "3rem" }}
      shadow={"sm"}
      borderRadius={"1rem"}
    >
      {" "}
      {certificate?.length ? (
        <>
          <Flex
            bg="brand.350"
            borderRadius={"2rem"}
            px="1rem"
            py=".5rem"
            w="14rem"
            align={"center"}
            justify={"center"}
            fontWeight={"600"}
          >
            <Text color="brand.950"> Certifications</Text>
          </Flex>
          {certificate?.map((item: any) => (
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
                  {item?.name}
                </Text>
                <HStack gap="1.2rem">
                  <EditIcon
                    onClick={() => {
                      handleModalDisplay(false, item);
                      onOpen();
                    }}
                  />
                  <DeleteIcon
                  // onClick={() => handleDeleteCertification(item?.id)}
                  // isloading={loadingStates[item.id || ""] || false}
                  />
                </HStack>
              </Flex>

              <Stack mt=".6rem">
                <Text color="brand.950" fontSize="1.6rem">
                  {item?.organization}
                </Text>
                <Text color="brand.950" fontSize="1.5rem">
                  {`${item?.yearIssued}${
                    item?.expiryYear ? ` - ${item?.expiryYear}` : ""
                  }`}
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
          icon={PiCertificateDuotone}
          text="Add Certification"
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
            <Icon as={PiCertificateDuotone} boxSize={12} mr=".5rem" />
            <ModalHeader fontSize={"1.8rem"} p="0rem">
              Certifications
            </ModalHeader>
          </HStack>

          <ModalCloseButton size={"lg"} p="1rem" />
          <ModalBody>
            {isCreateModal ? (
              <CreateCertificationModal onClose={onClose} />
            ) : (
              <EditCertificationModal
                onClose={onClose}
                certificateDetails={certificateDetails}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Certifications;
