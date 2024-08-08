"use client";

import React from "react";
import ProtectedLayout from "@/components/Layouts/protected-layout";
import { Box } from "@chakra-ui/react";

const MyJobs = () => {
  return (
    <ProtectedLayout>
      <Box
        bg="brand.100"
        mt="1.5rem"
        py="3rem"
        px={{ base: "2rem", md: "3rem" }}
        shadow={"sm"}
        borderRadius={"1rem"}
        h='100vh'
        mb='3rem'
      >
        {" "}
        MyJobs
      </Box>
    </ProtectedLayout>
  );
};

export default MyJobs;
