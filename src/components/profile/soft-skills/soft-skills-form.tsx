"use client";

import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

// import { useState } from "react";

// import { SoftSkillsSchema } from "@/app/schema/profile";
// import { useSoftSkillsMutation } from "@/app/services/profile";
// import { SoftSkillProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { Box, FormControl, FormHelperText } from "@chakra-ui/react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { Flex, FormLabel, Input } from "../../../chakra-provider";

interface Props {
  setShowSkill: any;
}

const SoftSkillsForm = ({ setShowSkill }: Props) => {
  // const [loading, setLoading] = useState(false);
  // const { mutateAsync: softSkills } = useSoftSkillsMutation();
  // const formHook = useForm<SoftSkillProps>({
  //   resolver: yupResolver(SoftSkillsSchema),
  //   defaultValues: {
  //     name: "",
  //   },
  // } as { resolver: Resolver<SoftSkillProps> });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = formHook;

  const handleSkill = () => setShowSkill(false);

  // const submit: SubmitHandler<SoftSkillProps> = async (
  //   data: SoftSkillProps
  // ) => {
  //   setLoading(true);

  //   try {
  //     const result = await softSkills(data);
  //     if (!result) {
  //       return;
  //     }
  //     if (result.status === 200 || result.status === 201) {
  //       SuccessToast("Soft Skill Added Successfully!");
  //       handleSkill();
  //     }
  //   } catch (error: any) {
  //     ErrorToast(error?.response?.data?.message || "An error occurred")
  //     throw new Error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <form>
      <Flex
        direction={"column"}
        mt={"5rem"}
        w={{ base: "full", sm: "75%", md: "55%" }}
      >
        <FormLabel fontSize={"1.6rem"}>Soft Skill</FormLabel>
        <Flex align={"flex-start"} direction={"column"}>
          <FormControl>
            <Box>
              <InputField
                // fontSize={"1.6rem"}
                // borderRadius={".5rem"}
                // w={"100%"}
                // mt=".3rem"
                // // {...register("name")}
                // focusBorderColor="brand.400"
                // py="2.2rem"
                // px="2rem"
                // type={"text"}
                placeholder={"Excellent communication skills"}
                // border="1px solid rgba(0, 0, 0, 0.10)"
              />
              {/* {errors.name?.message && (
                <FormHelperText color="red" fontSize="1.4rem">
                  {errors.name?.message}
                </FormHelperText>
              )} */}
            </Box>
          </FormControl>

          <Flex justify={"center"} mt="1rem" gap=".5rem">
            <SubmitButton btnText="Save" />
            <SubmitButton
              btnText="Cancel"
              bg="brand.300"
              onClick={() => setShowSkill(false)}
            />
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};

export default SoftSkillsForm;


