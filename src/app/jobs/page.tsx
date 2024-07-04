import Footer from "@/components/footer";
import Hero from "@/components/jobs/hero";
import JobList from "@/components/jobs/job-list";
import Navbar from "@/components/navbar";
import React from "react";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobList />
      <Footer />
    </>
  );
};

export default Jobs;
