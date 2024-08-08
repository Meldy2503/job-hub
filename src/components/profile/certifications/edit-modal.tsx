"use client";

import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Box, Flex } from "@chakra-ui/react";

// import { CertificationSchema } from "@/app/schema/profile";
// import { useEditCertificationMutation } from "@/app/services/profile";
// import { CertificationProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import { InputElement } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { Box, Flex } from "../../../chakra-provider";

interface Props {
  onClose: () => void;
  certificateDetails?:  any;
}

const EditCertificationModal = ({ onClose, certificateDetails }: Props) => {
  // const [loading, setLoading] = useState(false);
  // const { mutateAsync: certification } = useEditCertificationMutation(
  //   certificateDetails?.id
  // );
  // const formHook = useForm<CertificationProps>({
  //   resolver: yupResolver(CertificationSchema),
  //   defaultValues: {
  //     name: certificateDetails?.name || "",
  //     organization: certificateDetails?.organization || "",
  //     yearIssued: certificateDetails?.yearIssued || "",
  //     expiryYear: certificateDetails?.expiryYear || "",
  //   },
  // } as { resolver: Resolver<CertificationProps> });
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = formHook;

  // const submit: SubmitHandler<CertificationProps> = async (
  //   data: CertificationProps
  // ) => {
  //   setLoading(true);

  //   try {
  //     const result = await certification(data);
  //     if (!result) {
  //       return;
  //     }
  //     if (result.status === 200 || result.status === 201) {
  //       SuccessToast("Certificate Updated Successfully!");
  //       onClose();
  //     }
  //   } catch (error: any) {
  //     ErrorToast(error?.response?.data?.message || "An error occurred");
  //     throw new Error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <form>
      <Flex flexDir="column" gap={6} align={"flex-start"}>
        <InputField
          label="Certification name"
          placeholder="Project Management"
          // register={register("name")}
          // defaultValue={certificateDetails?.name}
          // onChange={(e: any) => setValue("name", e.target.value)}
          // errorMessage={errors.name?.message}
        />
        <InputField
          label="Certifying body"
          placeholder="Cousera"
          // register={register("organization")}
          // defaultValue={certificateDetails?.organization}
          // onChange={(e: any) => setValue("organization", e.target.value)}
          // errorMessage={errors.organization?.message}
        />

        <Flex
          justify={"space-between"}
          gap="1.5rem"
          flexWrap={"wrap"}
          mb="1rem"
          w="100%"
        >
          <Box w={{ base: "100%", sm: "46%" }}>
            <InputField
              label="Year issued"
              type="date"
              // register={register("yearIssued")}
              // defaultValue={certificateDetails?.yearIssued}
              // onChange={(e: any) => setValue("yearIssued", e.target.value)}
              // errorMessage={errors.yearIssued?.message}
            />
          </Box>
          <Box w={{ base: "100%", sm: "46%" }}>
            <InputField
              label="Expiry year"
              type="date"
              // register={register("expiryYear")}
              // defaultValue={certificateDetails?.expiryYear}
              // onChange={(e: any) => setValue("expiryYear", e.target.value)}
              // errorMessage={errors.expiryYear?.message}
            />
          </Box>
        </Flex>
      </Flex>

      <Flex justify={"center"} mt="2rem" gap="1rem">
        <SubmitButton btnText="Save Changes" />
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

export default EditCertificationModal;
