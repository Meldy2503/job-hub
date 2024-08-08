"use client";

import { SubmitButton } from "@/components/button";
import { Avatar, Flex } from "@chakra-ui/react";

// import { UserDetailsSchema } from "@/app/schema/profile";
// import urls from "@/app/services/urls";
// import { ProfileProps } from "@/app/types/profile";
// import { Button } from "@/app/utils/button";
// import ImageInput from "@/app/utils/image-input";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { Flex } from "../../../chakra-provider";

interface Props {
  onClose: () => void;
  profileImg?: any;
}

const EditProfileImgModal = ({ onClose, profileImg }: Props) => {
  // const [loading, setLoading] = useState(false);
  // const queryClient = useQueryClient();

  // const formHook = useForm<ProfileProps>({
  //   resolver: yupResolver(UserDetailsSchema),
  //   defaultValues: {
  //     profilePic: profileImg?.profilePic || "",
  //   },
  // } as { resolver: Resolver<ProfileProps> });

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = formHook;

  // const submit: SubmitHandler<ProfileProps> = async (data: ProfileProps) => {
  //   setLoading(true);

  //   const token = localStorage.getItem("user");
  //   const formData = new FormData();
  //   data?.profilePic && formData.append("profilePic", data?.profilePic);

  //   const result = await axios({
  //     method: "patch",
  //     url: urls.updateProfilePicture,
  //     data: formData,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  //   try {
  //     if (!result) {
  //       return;
  //     }
  //     if (result.status === 200 || result.status === 201) {
  //       SuccessToast("Profile Updated Successfully!");
  //       queryClient.invalidateQueries(["userProfile"]);
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
      <Flex direction={"column"}>
        <Flex mb="2rem" mx="auto">
          <Avatar src="" name="john doe" size={"xl"} />
          {/* <ImageInput
            handler={formHook}
            title="profilePic"
            name={`${profileImg?.firstName} ${profileImg?.lastName}`}
          /> */}
        </Flex>

        {/* <Flex justify={"center"} mt="3rem">
          <SubmitButton btnText="Save Changes" />
        </Flex> */}
        <Flex justify={"center"} mt="2rem" gap="1rem">
          <SubmitButton btnText="Save changes" />
          <SubmitButton
            btnText="Cancel"
            type="button"
            onClick={onClose}
            bg="brand.300"
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default EditProfileImgModal;
