"use client";

import ProtectedLayout from "@/components/Layouts/protected-layout";
import SidebarContents from "@/components/Layouts/sidebar-contents";
import Certifications from "@/components/profile/certifications/certifications";
import Education from "@/components/profile/education/education";
import ProfileImage from "@/components/profile/profile-img/profile-img";
import SoftSkills from "@/components/profile/soft-skills/soft-skills";
import TechnicalSkills from "@/components/profile/technical-skills/technical-skills";
import Details from "@/components/profile/user-details/user-details";
import { Box, Card, Center, Text } from "@chakra-ui/react";

// import { default as ProtectedLayout, default as Sidebar } from "@/app/components/layouts/protected-layout";
// import Certifications from "@/app/components/profile/certifications/certifications";
// import Education from "@/app/components/profile/education/education";
// import ProfileImage from "@/app/components/profile/profile-img/profile-img";
// import SoftSkills from "@/app/components/profile/soft-skills/soft-skills";
// import TechnicalSkills from "@/app/components/profile/technical-skills/technical-skills";
// import Details from "@/app/components/profile/user-details/user-details";
// import WorkExperience from "@/app/components/profile/work-experience/work-experience";
// import { useFetchUserProfile } from "@/app/services/profile";
// import Text from "@/app/utils/text";
// import { Card, Center, Spinner } from "@chakra-ui/react";

const UserProfile = () => {
  // const {
  //   data: userData,
  //   isLoading: isLoadingUserData,
  //   error: userDataError,
  // } = useFetchUserProfile({});
  // const profile = userData?.data?.profile;

  // if (userDataError)
  //   return <Center h="80vh">
  //         <Text fontSize={"1.8rem"}>An error occurred while loading data</Text>
  //     </Center>;

  return (
  
      <ProtectedLayout>
        

        {/* {isLoadingUserData ? (
        <Center h="90vh">
          <Spinner />
        </Center>
      ) : ( */}
        {/* <Card
          borderRadius={"1.7rem"}
          p={"0.5rem"}
          mb="5rem"
          border={"0.88px solid #0000001A"}
        > */}
        <Box
          bg="brand.100"
          mt="1.5rem"
          py="3rem"
          px={{ base: "2rem", md: "3rem" }}
          shadow={"sm"}
          borderRadius={"1rem"}
        >
          <ProfileImage />
          <Details />
        </Box>
        <Education />
        <TechnicalSkills />
        <SoftSkills />
        <Certifications />
        {/* </Card> */}
        {/* )} */}
      </ProtectedLayout>
    
  );
};

export default UserProfile;
