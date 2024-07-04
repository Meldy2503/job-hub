'use client'


import { JobsData } from "@/utils/constants";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import JobCardDetails from "./card-details";
import JobCard from "./job-card";

const JobList = () => {

  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleSelectedJob = (id: number) => {
    setSelectedJobId(prevId => (prevId === id ? null : id));
    console.log(id, 'id');
  }
  
  return (
      <Flex maxW={"1280px"} mx={"auto"} w={"90%"} gap={"3rem"} my={"5rem"} justify={'space-between'} h='100%'>
        <Flex flexDirection={"column"} gap={"1rem"} w={{ base: "100%", md: "45%", lg:'40%' }}  >
          {JobsData.map((job) => (
                      <Flex  border={"1px solid #dfdede"}
                      p={"2rem"}
                      borderRadius={"1rem"}
                      w={"full"}
                      color={"brand.580"} direction='column' key={job.id} onClick={() => handleSelectedJob(job.id)} cursor={'pointer'}>

            <JobCard
              title={job.title}
              company={job.company}
              salary={job.salary}
              location={job.location}
              type={job.type}
              summary={job.summary}
              posted={job.posted}
            />
{isMobile && selectedJobId === job.id && 
        <JobCardDetails />}
           </Flex>
          ))}     
        </Flex>
        {!isMobile && <Box w={{ base: "50%", lg: "55%" }} 
        >
          <JobCardDetails />
        </Box> }
      </Flex>
  );
};

export default JobList;





