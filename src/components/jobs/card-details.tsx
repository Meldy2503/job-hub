import {
    Box,
    Divider,
    Flex,
    Heading,
    ListItem,
    Text,
    Tooltip,
    UnorderedList
} from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa6";
import { SubmitButton } from "../button";



const JobCardDesc = () => {
  return (
    <Box
       border={{base: "none", md: "1px solid #dfdede"}}
      pb='3rem'
      mt={{base: "4rem", md: "0"}}
      borderRadius={"1rem"}
      position="sticky"
      top="8rem"
      h="auto"
      zIndex="10" 
      color='brand.580'
    >

      <Divider display={{base: 'block', md: 'none'}}/>
      <Box position={'sticky'} shadow='sm'   py='2rem'     px={{base: "0", md: "2rem"}}
      >

      <Heading fontSize={'2rem'} color={"brand.400"} display={{base: 'none', md: 'block'}}>
        UI/UX designer</Heading>

        <Flex justify={'space-between'} columnGap={'2rem'} rowGap={'.5rem'} flexWrap={'wrap'} mt='1rem'>
        <Box>
      <Text pt="2">
        Ascendancy Technologies
      </Text>
      <Text pt="2">
        $50,000
      </Text>
        </Box>
        <Box>
      <Text pt="2">
        Lagos, Nigeria
      </Text>

      <Text pt="2">
        Hybrid
      </Text>

        </Box>
      </Flex>
      <Flex gap='2rem' align={'center'} mt='2rem'>
      <SubmitButton btnText='Apply now' mt='0'/>
      <Tooltip label='Save' fontSize={'1.45rem'}>
        <Box bg='brand.300' p='1rem' cursor='pointer'         borderRadius="0.3rem"
        >

<span>

      <FaRegBookmark fontSize={'2rem'}/>
</span>
        </Box>
        </Tooltip>

      </Flex>

      </Box>

<Box h='50rem' overflow={'auto'}   px={{base: "0", md: "2rem"}}
>
        <Box mt='2rem'>
          <Text fontWeight={'semibold'} fontSize={'1.7rem'} color={"brand.150"} mt='1rem'>
            Job Details
          </Text>
          <Text pt="1rem">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod molestias est itaque consequatur ab, repellendus illum? Temporibus vel beatae similique alias, eius asperiores. Mollitia magnam quos vero delectus aliquam ipsum.
          </Text>
        </Box>
        <Box mt='2rem'>
      <Divider/>
          <Text fontWeight={'semibold'} fontSize={'1.7rem'} color={"brand.150"} my='1rem'>
            Requirements
          </Text>
          <UnorderedList spacing={2}>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
        </Box>
        <Box mt='2rem'>
      <Divider/>
          <Text fontWeight={'semibold'} fontSize={'1.7rem'} color={"brand.150"} my='1rem'>
            Responsibilities
          </Text>
          <UnorderedList spacing={2}>
  <ListItem>Lorem ipsum dolor sit amet, orem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit, orem ipsum dolor sit amet</ListItem>
  <ListItem>Integer molestie lorem at massa. orem ipsum dolor sit amet</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet, orem ipsum dolor sit amet</ListItem>
</UnorderedList>
        </Box>
        <Box mt='2rem'>
      <Divider/>
          <Text fontWeight={'semibold'} fontSize={'1.7rem'} color={"brand.150"} my='1rem'>
            Skills
          </Text>
          <UnorderedList spacing={2}>
  <ListItem>Lorem ipsum dolor sit amet, orem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit, orem ipsum dolor sit amet</ListItem>
  <ListItem>Integer molestie lorem at massa. orem ipsum dolor sit amet</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet, orem ipsum dolor sit amet</ListItem>
</UnorderedList>
        </Box>
     
        </Box>
    </Box>
  );
};

export default JobCardDesc;
