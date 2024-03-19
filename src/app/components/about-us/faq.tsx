"use client";

import { FaqData } from "@/app/utils/constants";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Wrapper from "../wrapper";
import Title from "../heading";

const Faq = () => {
  return (
    <Wrapper>
      <Box color={"black"}>
        <Box mb={"8rem"}>
          <Title>Frequently Asked Questions (FAQ)</Title>
          <Text
            fontSize={"2rem"}
            textAlign={"center"}
            w={{ base: "100%", md: "90%", lg: "70%" }}
            mx={"auto"}
          >
            Welcome to our FAQ section! Below, you&apos;ll find answers to some
            of the most common questions our users have about our job search
            application. If you can&apos;t find the answer you&apos;re looking
            for, feel free to reach out to our support team for assistance.
          </Text>
        </Box>
        <Accordion allowMultiple color={"black"}>
          {FaqData.map((item, index) => (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={"2rem"}
                      >
                        {item.question}
                      </Box>
                      {isExpanded ? (
                        <FiMinus fontSize="1.6rem" />
                      ) : (
                        <FiPlus fontSize="1.6rem" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"1.8rem"} mt={"3rem"} pb={4}>
                    {item.answer}
                  </AccordionPanel>
                  <Divider my={"3rem"} bg={"#bebebe"} />
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Wrapper>
  );
};

export default Faq;
