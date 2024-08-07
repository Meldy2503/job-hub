import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IconProps {
  onClick?: any;
  fontSize?: string;
  isloading?: boolean;
  color?: any;
  icon?: any;
  label?: any;
}

export const EditIcon = ({ onClick, fontSize }: IconProps) => {
  return (
    <>
      <Tooltip label="Edit" placement="bottom" fontSize={"1.4rem"}>
        <IconButton
          aria-label="edit"
          icon={<FaRegEdit />}
          cursor="pointer"
          variant={"ghost"}
          fontSize={fontSize ?? "2rem"}
          onClick={onClick}
          _active={{ transform: "translateY(1px)" }}
        />
      </Tooltip>
    </>
  );
};
export const DeleteIcon = ({ onClick, isloading }: IconProps) => {
  return (
    <Box>
      <Tooltip label="Delete" placement="bottom" fontSize={"1.4rem"}>
        <IconButton
          color="red"
          aria-label="delete"
          icon={<RiDeleteBin6Line />}
          isLoading={isloading}
          cursor="pointer"
          variant={"ghost"}
          fontSize={"2rem"}
          onClick={onClick}
          _active={{ transform: "translateY(1px)" }}
        />
      </Tooltip>
    </Box>
  );
};
export const BookMarkIcon = ({
  onClick,
  isloading,
  color,
  label,
  icon,
}: IconProps) => {
  return (
    <Box>
      <Tooltip label={label} placement="bottom" fontSize={"1.4rem"}>
        <IconButton
          color={color}
          aria-label="bookmark"
          icon={icon}
          isLoading={isloading}
          cursor={"pointer"}
          variant={"ghost"}
          fontSize={"2rem"}
          onClick={onClick}
          isRound
          _hover={{ bg: "transparent" }}
          _active={{ transform: "translateY(1px)" }}
        />
      </Tooltip>
    </Box>
  );
};
export const ViewIcon = ({
  onClick,
  isloading,
  color,
  label,
  icon,
}: IconProps) => {
  return (
    <Box>
      <Tooltip label={label} placement="bottom" fontSize={"1.4rem"}>
        <IconButton
          color={color}
          aria-label="view"
          icon={icon}
          isLoading={isloading}
          cursor="pointer"
          variant={"ghost"}
          fontSize={"2rem"}
          onClick={onClick}
          isRound
          _hover={{ bg: "transparent" }}
          _active={{ transform: "translateY(1px)" }}
        />
      </Tooltip>
    </Box>
  );
};
