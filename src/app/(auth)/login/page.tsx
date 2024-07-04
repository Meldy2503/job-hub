"use client";

import AuthWrapper from "@/components/Layouts/auth-wrapper";
import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input-field";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  //   const { mutateAsync: login, loading } = useLoginMutation();
  //   const router = useRouter();
  //   const formHook = useForm<LoginProps>({
  //     resolver: yupResolver(LoginSchema),
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   } as { resolver: Resolver<LoginProps> });
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = formHook;

  //   const submit: SubmitHandler<LoginProps> = async (data: LoginProps) => {

  //     try {
  //       const result = await login(data);
  //       if (!result) {
  //         return;
  //       }
  //       if (result.status === 200 || result.status === 201) {
  //       router.push("/pages/jobs");
  //       SuccessToast("Login Successful!");
  //       }

  //       if (typeof localStorage !== "undefined") {
  //         localStorage.setItem("user", result!.data?.accessToken);
  //       }
  //     } catch (error: any) {
  //       ErrorToast(
  //         error?.response?.data?.message || "An error occurred trying to login"
  //       );
  //       throw new Error(error);
  //     }
  //   };

  return (
    <AuthWrapper title="Login to your account">
      <Stack alignSelf={"flex-start"} maxW={"520px"} w={"95%"} py={"2.5rem"}>
        {/* <GoogleButton /> */}

        <form>
          {/* <form onSubmit={handleSubmit(submit)}> */}
          <Flex flexDir="column" gap={10}>
            <InputField
              label="Email address"
              placeholder="Enter your email address"
              //   register={register("email")}
              //   errorMessage={errors.email?.message}
            />
            <InputField
              isPassword
              label="Password"
              placeholder="******"
              //   register={register("password")}
              //   errorMessage={errors.password?.message}
            />
          </Flex>
          <Box
            textAlign={"right"}
            fontWeight={"500"}
            fontSize="1.6rem"
            mt=".9rem"
            mb="3rem"
            color="brand.150"
          >
            <Link
              href="/password-reset-link"
              style={{ borderBottom: "1.5px solid #021C70" }}
            >
              {" "}
              Forgot Password?
            </Link>
          </Box>
          <SubmitButton w="100%" btnText="Login" />
        </form>
        <Flex gap=".5rem" justifyContent="center" fontSize="1.6rem" mt="2rem">
          <Text fontWeight={"500"} fontSize="1.6rem">
            Don&apos;t have an account?
          </Text>
          <Center color="brand.650">
            <Link href="/register">Sign up</Link>
          </Center>
        </Flex>
      </Stack>
    </AuthWrapper>
  );
};

export default Login;
