import { Box, Text, Image, Link } from "@chakra-ui/react";
import { Icons } from "./Icons.jsx/Icons";

export const Cards = ({
  gender,
  image,
  name,
  origin,
  species,
  status,
  url,
}) => {
  return (
    <Box
      m="0.75rem"
      borderRadius="0.6rem"
      overflow="hidden"
      w="600px"
      h="220px"
      d="flex"
      bg="brand.500"
      boxShadow="base"
    >
      <Box flex="2 1 0%" w="100%">
        <Image
          src={image}
          m="0"
          w="100%"
          h="100%"
          opacity="1"
          transition="opacity .5s ease 0s"
          objectPosition="center center"
          objectFit="cover"
        ></Image>
      </Box>
      <Box
        flex="3 1 0%"
        position="relative"
        p="0.75rem"
        color="brand.100"
        d="flex"
        flexDirection="column"
      >
        <Box
          d="flex"
          flex="1 1 0%"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text fontSize="1.5rem">
            <Link
              href={url}
              isExternal
              transition=".5s all ease"
              _hover={{ color: "orange" }}
            >
              {name}
            </Link>
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="500"
            d="flex"
            textTransform="capitalize"
            alignItems="center"
          >
            <Icons status={status} /> {status} - {species}
          </Text>
        </Box>
        <Box
          d="flex"
          flex="1 1 0%"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="1rem" fontWeight="500" color="#9e9e9e">
            Gender:
          </Text>
          <Text color="brand.200" textTransform="capitalize">
            {gender}
          </Text>
        </Box>
        <Box
          d="flex"
          flex="1 1 0%"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Text fontSize="1rem" fontWeight="500" color="#9e9e9e">
            Last known seen:
          </Text>
          <Text color="brand.200">
            <Link
              href={origin.url}
              isExternal
              transition=".5s all ease"
              _hover={{ color: "orange" }}
              textTransform="capitalize"
            >
              {origin.name}
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
