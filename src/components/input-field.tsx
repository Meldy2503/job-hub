"use client";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { RiEyeCloseLine } from "react-icons/ri";
import { generalStyle } from "@/utils";
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface InputProps {
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  index?: any;
  type?: string;
  label?: string;
  id?: string;
  icon?: any;
  control?: any;
  as?: any;
  w?: any;
  color?: string;
  border?: string;
  isDisabled?: boolean;
  borderRadius?: string;
  isRequired?: boolean;
  defaultValue?: string;
  register?: any;
  fontWeight?: string;
  isDate?: boolean;
  isPassword?: boolean;
  isPhone?: boolean;
  maxDate?: any;
  errorMessage?: any;
  helperText?: string;
  options?: any;
  valueKey?: string;
  labelKey?: string;
  focusBorderColor?: string;
}

export const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  icon,
  as,
  name,
  isDisabled,
  isRequired,
  fontWeight,
  register,
  errorMessage,
  defaultValue,
  control,
  id,
  isPassword,
  isPhone,
  isDate,
  maxDate,
  focusBorderColor,
  border,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl fontSize={"1.6rem"}>
      <FormLabel fontWeight={fontWeight ?? "500"} fontSize={"1.55rem"}>
        {label} {icon} {isRequired && <span style={{ color: "red" }}>*</span>}
      </FormLabel>
      <Flex
        alignItems={"center"}
        bg={"white"}
        borderRadius={"0.3rem"}
        borderWidth={"1px"}
      >
        {icon && (
          <Icon as={icon} color={"black"} fontSize={"2.2rem"} ml={"1rem"} />
        )}
        {isPhone ? (
          <Controller
            name={id ? id : ""}
            control={control}
            render={({
              field: { onChange: onPhoneChange, value: phoneValue },
            }) => (
              <PhoneInput
                id={id}
                onChange={onPhoneChange}
                value={phoneValue}
                defaultValue={defaultValue}
                isDisabled={isDisabled}
                isRequired={isRequired}
                defaultCountry="NG"
                placeholder="+2348 037 547 855"
                focusBorderColor="typography.lightGreen"
                {...register}
                style={{ ...generalStyle }}
              />
            )}
          />
        ) : isPassword ? (
          <InputGroup size="md">
            <Input
              onChange={onChange}
              defaultValue={defaultValue}
              type={showPassword ? "text" : "password"}
              placeholder="********"
              focusBorderColor="typography.lightGreen"
              {...register}
              style={{ ...generalStyle }}
            />

            <InputRightElement mt="1.3rem" mr="1rem">
              <Box onClick={handleClick} cursor="pointer">
                {showPassword ? (
                  <Icon as={FiEye} boxSize={7} />
                ) : (
                  <Icon as={RiEyeCloseLine} boxSize={7} />
                )}
              </Box>
            </InputRightElement>
          </InputGroup>
        ) : isDate ? (
          <Input
            size="lg"
            type="date"
            max={maxDate}
            {...register}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            style={{ ...generalStyle }}
          />
        ) : (
          <Input
            onChange={onChange}
            as={as}
            name={name}
            value={value}
            {...register}
            focusBorderColor={focusBorderColor ?? "brand.300"}
            isDisabled={isDisabled}
            isRequired={isRequired}
            defaultValue={defaultValue}
            _placeholder={{ color: "brand.500" }}
            type={type ?? "text"}
            placeholder={placeholder}
            style={{ ...generalStyle }}
            outline="none"
            border={border ?? "1px solid #E5E4E4"}
          />
        )}
      </Flex>

      <Text color="red" fontSize="1.3rem" mt=".5rem">
        {" "}
        {errorMessage}
      </Text>
    </FormControl>
  );
};

// export const SelectInput = ({
//   label,
//   name,
//   options,
//   onChange,
//   value,
//   isDisabled,
//   isRequired,
//   errorMessage,
//   register,
//   valueKey,
//   labelKey,
//   icon,
//   defaultValue,
//   placeholder,
// }: InputProps) => {
//   return (
//     <>
//       <FormControl className="flex flex-1 flex-col my-2">
//         <FormLabel fontSize={"1.5rem"} fontWeight={"400"}>
//           {label} {icon} {isRequired && <span style={{ color: "red" }}>*</span>}
//           {/* <span className="text-red2 text-lg ml-1">*</span> */}
//           <select
//             // className={`${customClass} border rounded-md py-3 md:py-[17px] px-[17px] bg-white1 disabled:bg-gray-100 ${
//             //   errorMessage ? "border-red-500" : "border-gray-400"
//             // } ${errorMessage && "outline-red-500"}`}

//             onChange={onChange}
//             name={name}
//             value={value}
//             {...register}
//             focusBorderColor="typography.lightGreen"
//             isDisabled={isDisabled}
//             isRequired={isRequired}
//             defaultValue={defaultValue}
//             _placeholder={{ color: "brand.500" }}
//             placeholder={placeholder}
//             style={{ ...generalStyle }}
//           >
//             <option value="">Select {label}</option>
//             {options?.map((option: any, index: number) => (
//               <option key={index} value={valueKey ? option[valueKey] : option}>
//                 {labelKey ? option[labelKey] : option}
//               </option>
//             ))}
//           </select>
//         </FormLabel>

//         <Text color="red" fontSize="1.3rem" mt=".5rem">
//           {" "}
//           {errorMessage}
//         </Text>
//       </FormControl>
//     </>
//   );
// };
