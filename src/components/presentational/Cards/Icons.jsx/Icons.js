import { Icon } from "@chakra-ui/react";

export const Icons = ({ status }) => {
  const checkStatus = () => {
    switch (status) {
      case "Alive":
        return "green.400";
      case "Dead":
        return "red.400";
      default:
        return "gray.400";
    }
  };
  return (
    <>
      <Icon viewBox="0 0 200 200" color={checkStatus}>
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
    </>
  );
};
