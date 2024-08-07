"use client";
import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { CertificationSchema } from "@/app/schema/profile";
// import { useCertificationMutation } from "@/app/services/profile";
// import { CertificationProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import { InputElement } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { Box, Flex } from "../../../chakra-provider";

interface Props {
  onClose: () => void;
}

const CreateCertificationModal = ({ onClose }: Props) => {
  // const [loading, setLoading] = useState(false);
  // const { mutateAsync: certification } = useCertificationMutation();
  // const formHook = useForm<CertificationProps>({
  //   resolver: yupResolver(CertificationSchema),
  //   defaultValues: {
  //     name: "",
  //     organization: "",
  //     yearIssued: "",
  //     expiryYear: "",
  //   },
  // } as { resolver: Resolver<CertificationProps> });
  // const {
  //   register,
  //   handleSubmit,
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
  //       SuccessToast("Certificate Added Successfully!");
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
          // errorMessage={errors.name?.message}
        />
        <InputField
          label="Certifying body"
          placeholder="Cousera"
          // register={register("organization")}
          // errorMessage={errors.organization?.message}
        />

        <Flex
          justify={"space-between"}
          gap="1rem"
          flexWrap={"wrap"}
          mb="1rem"
          w="100%"
        >
          <Box w={{ base: "100%", sm: "46%" }}>
            <InputField
              label="Year issued"
              type="date"
              // register={register("yearIssued")}
              // errorMessage={errors.yearIssued?.message}
            />
          </Box>
          <Box w={{ base: "100%", sm: "46%" }}>
            <InputField
              label="Expiry year"
              type="date"
              // register={register("expiryYear")}
              // errorMessage={errors.expiryYear?.message}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex justify={"center"} mt="2rem" gap="1rem">
        <SubmitButton btnText="Save" />
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

export default CreateCertificationModal;
