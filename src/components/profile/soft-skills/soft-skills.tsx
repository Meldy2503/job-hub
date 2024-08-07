"use client";

import { DeleteIcon } from "@/components/action-icons";
import { AddNewButton } from "@/components/button";
import NoProfileData from "@/components/no-profile-data";
import { Box, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import SoftSkillsForm from "./soft-skills-form";

interface Props {
  softSkills?: any;
}

const SoftSkills = ({ softSkills }: Props) => {
  const [showSkill, setShowSkill] = useState(false);

  const handleSkillChange = () => setShowSkill(true);

  // const softSkills = [
  //   {
  //     id: 1,
  //     name: "Teamwork",
  //   },
  //   {
  //     id: 2,
  //     name: "Problem Solving",
  //   },
  //   {
  //     id: 3,
  //     name: "Communication",
  //   },
  //   {
  //     id: 4,
  //     name: "Creativity",
  //   },
  //   {
  //     id: 5,
  //     name: "Adaptability",
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
      {" "}
      {softSkills?.length ? (
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
            <Text color="brand.950"> Soft Skills</Text>
          </Flex>
          {softSkills?.map((item: any) => (
            <Flex
              key={item?.id}
              justify={"space-between"}
              fontSize={"1.6rem"}
              mt={"2rem"}
              borderBottomColor="brand.750"
              borderBottomWidth={"1px"}
              pb="1rem"
            >
              <List>
                <ListItem>
                  <Flex align={"center"}>
                    <Icon as={MdCheckCircle} color="brand.150" mr={"1.5rem"} />
                    <Text>{item?.name}</Text>
                  </Flex>
                </ListItem>
              </List>
              <Box>
                <DeleteIcon
                // onClick={() => handleDeleteSoftSkill(item?.id)}
                // isloading={loadingStates[item.id || ""] || false}
                />
              </Box>
            </Flex>
          ))}

          <AddNewButton onClick={handleSkillChange} />
        </>
      ) : (
        <NoProfileData
          onClick={handleSkillChange}
          icon={RiServiceLine}
          text="Add Soft Skills"
        />
      )}
      {showSkill && <SoftSkillsForm setShowSkill={setShowSkill} />}
    </Box>
  );
};

export default SoftSkills;
