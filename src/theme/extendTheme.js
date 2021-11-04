import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#ffffff",
    200: "#F5F5F5",
    300: "#202329",
    400: "#24282F",
    500: "#3C3E44",
    600: "#FF9801",
  },
};

const fonts = {
  fonts: {
    100: "DM Sans",
    200: "Inter",
  },
};

export const theme = extendTheme({ colors, fonts });
