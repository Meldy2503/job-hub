"use client";

import { FaqData } from "@/utils/constants";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Title from "../heading";
import Wrapper from "../wrapper";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = () => {
  return (
    <Wrapper>
      <Box color={"black"}>
        <Box mb={"8rem"}>
          <Title>Frequently Asked Questions (FAQ)</Title>
          <Text
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
                    <AccordionButton py="2.5rem">
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={"1.6rem"}
                        pr="3rem"
                      >
                        {item.question}
                      </Box>
                      {isExpanded ? (
                        <MdKeyboardArrowUp fontSize="2rem" />
                      ) : (
                        <MdKeyboardArrowDown fontSize="2rem" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={"2rem"} color="brand.550">
                    {item.answer}
                  </AccordionPanel>
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
