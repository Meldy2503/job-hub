import React from "react";
import JobCard from "./job-card";
import { Flex } from "@chakra-ui/react";
import JobCardDesc from "./job-card-desc";
import { JobsData } from "@/utils/constants";

const JobList = () => {
  return (
    <Flex maxW={"128rem"} mx={"auto"} w={"75%"} gap={"3rem"} py={"5rem"}>
      <Flex flexDirection={"column"} gap={"1rem"} w={"35%"}>
        {JobsData.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            salary={job.salary}
            location={job.location}
            type={job.type}
            summary={job.summary}
            posted={job.posted}
          />
        ))}
      </Flex>
      <Flex w={"65%"}>
        <JobCardDesc />
      </Flex>
    </Flex>
  );
};

export default JobList;
