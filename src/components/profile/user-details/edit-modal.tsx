"use client";

import { Button, SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Flex, FormLabel, Textarea } from "@chakra-ui/react";

interface UserDetailsProps {
  onClose: () => void;
  profileDetails?: any;
}

const EditUserDetailsModal = ({
  onClose,
  profileDetails,
}: UserDetailsProps) => {
  return (
    <form>
      <Flex flexDir="column" gap={4} align={"flex-start"}>
        <Flex
          w="100%"
          justify={"space-between"}
          gap="2rem"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          {" "}
          <InputField
            label="First Name"
            placeholder="Mary"
            // register={register("firstName")}
            defaultValue={profileDetails?.firstName}
            // onChange={(e: any) => setValue("firstName", e.target.value)}
            borderRadius={"1rem"}
          />
          <InputField
            label="Last Name"
            placeholder="Smith"
            borderRadius={"1rem"}
            // register={register("lastName")}
            defaultValue={profileDetails?.lastName}
            // onChange={(e: any) => setValue("lastName", e.target.value)}
          />
        </Flex>

        <Flex
          w="100%"
          justify={"space-between"}
          gap="2rem"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          {" "}
          <InputField
            label="Email Address"
            placeholder="mary@gmail.com"
            // register={register("email")}
            defaultValue={profileDetails?.email}
            // onChange={(e: any) => setValue("email", e.target.value)}
            borderRadius={"1rem"}
            type="email"
            isDisabled={true}
          />
          <InputField
            label="Phone Number"
            placeholder="xxxxx"
            // register={register("phone")}
            defaultValue={profileDetails?.phone}
            // onChange={(e: any) => setValue("phone", e.target.value)}
            borderRadius={"1rem"}
          />
        </Flex>
        <Flex
          w="100%"
          justify={"space-between"}
          gap="2rem"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          {" "}
          <InputField
            label="State"
            placeholder="Lagos"
            // register={register("state")}
            defaultValue={profileDetails?.state}
            // onChange={(e: any) => setValue("state", e.target.value)}
            borderRadius={"1rem"}
          />
          <InputField
            label="Country"
            placeholder="Ghana"
            // register={register("country")}
            defaultValue={profileDetails?.country}
            // onChange={(e: any) => setValue("country", e.target.value)}
            borderRadius={"1rem"}
          />
        </Flex>
        <FormLabel fontSize={"1.6rem"} pb=".5rem">
          Profile Summary
        </FormLabel>
        <Textarea
          // as={TextareaAutoSize}
          placeholder="Enter Profile Summary"
          // {...register("profileSummary")}
          defaultValue={profileDetails?.profileSummary}
          // onChange={(e: any) => setValue("profileSummary", e.target.value)}
          fontSize={"1.6rem"}
          borderRadius={"1rem"}
          p="2rem"
          mt={"-2rem"}
        />
      </Flex>
      <Flex justify={"center"} mt="2rem" gap="1rem">
        <SubmitButton btnText="Save changes" />
        <SubmitButton
          btnText="Cancel"
          type="button"
          onClick={onClose}
          bg="brand.300"
        />
      </Flex>
    </form>
  );
};

export default EditUserDetailsModal;
