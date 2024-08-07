"use client";

import { Button, SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { Box, Flex } from "../../../chakra-provider";
// import { EducationSchema } from "@/app/schema/profile";
// import { useEducationMutation } from "@/app/services/profile";
// import { EducationProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import FormFlex from "@/app/utils/form-flex";
// import { InputElement } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
}

const CreateEducationModal = ({ onClose }: Props) => {
  // const [loading, setLoading] = useState(false);
  // const { mutateAsync: educationHistory } = useEducationMutation();
  // const formHook = useForm<EducationProps>({
  //   resolver: yupResolver(EducationSchema),
  //   defaultValues: {
  //     institution: "",
  //     location: "",
  //     fieldOfStudy: "",
  //     degreeType: "",
  //     endDate: "",
  //     startDate: "",
  //   },
  // } as { resolver: Resolver<EducationProps> });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = formHook;

  // const submit: SubmitHandler<EducationProps> = async (
  //   data: EducationProps
  // ) => {
  //   setLoading(true);

  //   try {
  //     const result = await educationHistory(data);
  //     if (!result) {
  //       return;
  //     }
  //     if (result.status === 200 || result.status === 201) {
  //       SuccessToast("Education Added Successfully!");
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
      <Flex flexDir="column" gap={4} align={"flex-start"}>
        <InputField
          label="Name of institution"
          placeholder="University of Science, Accra"
          // register={register("institution")}
          // errorMessage={errors.institution?.message}
        />
        <InputField
          label="Location of institution"
          placeholder="Ghana"
          // register={register("location")}
          // errorMessage={errors.location?.message}
        />
        <InputField
          label="Field of study"
          placeholder="Micro Biology"
          // register={register("fieldOfStudy")}
          // errorMessage={errors.fieldOfStudy?.message}
        />
        <InputField
          label="Degree obtained"
          placeholder="BSc."
          // register={register("degreeType")}
          // errorMessage={errors.degreeType?.message}
        />
        <Flex
          w="100%"
          justify={"space-between"}
          gap="2rem"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          {" "}
          <InputField
            label="Start date"
            isDate
            // register={register("startDate")}
            // errorMessage={errors.startDate?.message}
          />
          <InputField
            label="End date"
            isDate
            // register={register("endDate")}
            // errorMessage={errors.endDate?.message}
          />
        </Flex>
      </Flex>
      <Flex justify={"center"} mt="2rem" gap='1rem'>
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

export default CreateEducationModal;
