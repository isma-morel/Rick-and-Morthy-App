import { Box } from "@chakra-ui/react";
import { CardList } from "../CardList/CardList";

export const CardContainer = () => {
  return (
    <Box bg="brand.400" w="100%" minH="calc(50vh - 60px)">
      <CardList />
    </Box>
  );
};
