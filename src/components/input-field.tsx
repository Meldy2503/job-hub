"use client";

import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { generalStyle } from "@/utils";

interface InputProps {
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  index?: any;
  type?: string;
  label?: string;
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
  errorMessage?: any;
  helperText?: string;
}

const InputField = ({
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
  register,
  errorMessage,
  defaultValue,
}: InputProps) => {
  return (
    <FormControl fontSize={"1.6rem"}>
      <FormLabel fontSize={"1.5rem"} fontWeight={'400'}>
        {label} {icon} {isRequired && <span style={{ color: "red" }}>*</span>}
      </FormLabel>

      <Input
        onChange={onChange}
        as={as}
        name={name}
        value={value}
        {...register}
        focusBorderColor="typography.lightGreen"
        isDisabled={isDisabled}
        isRequired={isRequired}
        defaultValue={defaultValue}
        _placeholder={{ color: "brand.500" }}
        type={type ?? "text"}
        placeholder={placeholder }
        style={{ ...generalStyle }}
      />

      <Text color="red" fontSize="1.3rem" mt=".5rem">
        {" "}
        {errorMessage}
      </Text>
    </FormControl>
  );
};

export default InputField;
