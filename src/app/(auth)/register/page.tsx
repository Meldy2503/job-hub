"use client";

import AuthWrapper from "@/components/Layouts/auth-wrapper";
import { SubmitButton } from "@/components/button";
import InputField from "@/components/input-field";
import { Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Register = () => {
  //   const [loading, setLoading] = useState(false);

  //   const { mutateAsync: signup } = useSignupMutation();
  //   const router = useRouter();
  //   const formHook = useForm<RegisterProps>({
  //     resolver: yupResolver(RegisterAsTalentSchema),
  //     defaultValues: {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       password: "",
  //       confirmPassword: "",
  //     },
  //   } as { resolver: Resolver<RegisterProps> });
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = formHook;

  //   const submit: SubmitHandler<RegisterProps> = async (data: RegisterProps) => {
  //     setLoading(true);
  //     try {
  //       const result = await signup(data);
  //       if (!result) {
  //         setLoading(false);
  //         return;
  //       }
  //       if (result.status === 200 || result.status === 201) {
  //         setLoading(false);
  //       }
  //       router.push("/pages/auth/login");
  //       SuccessToast("Account Created Successfully!");
  //     } catch (error: any) {
  //       ErrorToast(
  //         error?.response?.message ||
  //           "An error occurred trying to create an account"
  //       );
  //       throw new Error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <AuthWrapper title="Create Your Account">
      <Stack
        alignSelf={"flex-start"}
        maxW={"520px"}
        w={"95%"}
        py={"2.5rem"}
      >
        {/* <GoogleButton /> */}

        <form>
          <Flex flexDir="column" gap={5} mb='2rem'>
            <Flex gap={8} direction={{ base: "column", sm: "row" }} >
              <InputField
                label="First name"
                placeholder="John"
                // register={register("firstName")}
                // errorMessage={errors.firstName?.message}
              />
              <InputField
                label="Last name"
                placeholder="Smith"
                // register={register("lastName")}
                // errorMessage={errors.lastName?.message}
              />
            </Flex>
            <InputField
              label="Email"
              type="email"
              placeholder="johnsmith@gmail.com"
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

            <InputField
              isPassword
              label="Confirm Password"
              placeholder="******"
              //   register={register("password")}
              //   errorMessage={errors.password?.message}
            />
          </Flex>
          <SubmitButton w="100%" btnText="Create Account" />
        </form>
        <Flex gap=".5rem" justifyContent="center" fontSize="1.6rem" mt="1.5rem">
          <Text fontWeight={"500"} fontSize="1.6rem">
            Already have an account?{" "}
          </Text>
          <Center color="brand.650">
            <Link href="/login">Login</Link>
          </Center>
        </Flex>
      </Stack>
    </AuthWrapper>
  );
};

export default Register;
