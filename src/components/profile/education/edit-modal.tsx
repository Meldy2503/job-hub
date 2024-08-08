"use client";

import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { Box, Flex } from "../../../chakra-provider";

// import { EducationSchema } from "@/app/schema/profile";
// import { useEditEducationMutation } from "@/app/services/profile";
// import { EducationProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import FormFlex from "@/app/utils/form-flex";
// import { InputElement } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
  educationDetails?: any;
}

const EditEducationModal = ({ onClose, educationDetails }: Props) => {
  // const [loading, setLoading] = useState(false);

  // const { mutateAsync: educationHistory } = useEditEducationMutation(
  //   educationDetails?.id
  // );
  // const formHook = useForm<EducationProps>({
  //   resolver: yupResolver(EducationSchema),
  //   defaultValues: {
  //     institution: educationDetails?.institution || "",
  //     location: educationDetails?.location || "",
  //     fieldOfStudy: educationDetails?.fieldOfStudy || "",
  //     degreeType: educationDetails?.degreeType || "",
  //     endDate: educationDetails?.endDate || "",
  //     startDate: educationDetails?.startDate || "",
  //   },
  // } as { resolver: Resolver<EducationProps> });
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
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
  //       SuccessToast("Education Updated Successfully!");
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
          // defaultValue={educationDetails?.institution}
          // onChange={(e: any) => setValue("institution", e.target.value)}
        />
        <InputField
          label="Location of institution"
          placeholder="Ghana"
          // defaultValue={educationDetails?.location}
          // onChange={(e: any) => setValue("location", e.target.value)}
          // register={register("location")}
        />
        <InputField
          label="Field of study"
          placeholder="Micro Biology"
          // defaultValue={educationDetails?.fieldOfStudy}
          // onChange={(e: any) => setValue("fieldOfStudy", e.target.value)}
          // register={register("fieldOfStudy")}
        />
        <InputField
          label="Degree obtained"
          placeholder="BSc."
          // defaultValue={educationDetails?.degreeType}
          // onChange={(e: any) => setValue("degreeType", e.target.value)}
          // register={register("degreeType")}
        />
        <Flex
          w="100%"
          justify={"space-between"}
          gap="2rem"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          <InputField
            label="Start date"
            isDate
            // defaultValue={educationDetails?.startDate}
            // onChange={(e: any) => setValue("startDate", e.target.value)}
            // register={register("startDate")}
          />
          <InputField
            label="End date"
            isDate
            // defaultValue={educationDetails?.endDate}
            // onChange={(e: any) => setValue("endDate", e.target.value)}
            // register={register("endDate")}
          />
        </Flex>
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

export default EditEducationModal;
