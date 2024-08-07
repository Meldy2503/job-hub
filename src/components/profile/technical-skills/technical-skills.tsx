"use client";

import { DeleteIcon } from "@/components/action-icons";
import { AddNewButton } from "@/components/button";
import NoProfileData from "@/components/no-profile-data";
import { Box, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import TechnicalSkillsForm from "./technical-skills-form";
import { TbTargetArrow } from "react-icons/tb";

interface Props {
  techSkills?: any;
}

const TechnicalSkills = ({ techSkills }: Props) => {
  const [showTechSkill, setShowTechSkill] = useState(false);

  const handleSkillChange = () => setShowTechSkill(true);

  // const techSkills = [
  //   {
  //     id: 1,
  //     name: "Javascript",
  //   },
  //   {
  //     id: 2,
  //     name: "React",
  //   },
  //   {
  //     id: 3,
  //     name: "Node",
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
      {techSkills?.length ? (
        <>
          <Flex
            bg="brand.350"
            borderRadius={"2rem"}
            px="1rem"
            py=".5rem"
            w="18rem"
            align={"center"}
            justify={"center"}
            fontWeight={"600"}
          >
            <Text color="brand.950"> Technical Skills</Text>
          </Flex>
          {techSkills?.map((item: any) => (
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
          icon={TbTargetArrow}
          text="Add Technical Skills"
        />
      )}
      {showTechSkill && (
        <TechnicalSkillsForm setShowTechSkill={setShowTechSkill} />
      )}
    </Box>
  );
};

export default TechnicalSkills;
