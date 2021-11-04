import { Box, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Cards } from "../../presentational/Cards/Cards";

export const CardList = () => {
  const [pageNumber] = useState(Math.floor(Math.random() * (43 - 1) + 1));
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const getData = async () => {
      await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
          setInfo(data.info);
        });
    };
    getData();
  }, []);
  const nextPage = () => {
    const getNext = info.next;
    getNext &&
      fetch(getNext)
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results);
          setInfo(data.info);
        });
  };
  const prevPage = () => {
    const getPrev = info.prev;
    getPrev &&
      fetch(getPrev)
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results);
          setInfo(data.info);
        });
  };

  return (
    <>
      <Box d="flex" justifyContent="center" alignItems="center">
        <Button
          onClick={prevPage}
          px="2"
          mx="2"
          mt="4"
          bg="brand.500"
          color="brand.200"
          boxShadow="md"
          transition=".5s all ease"
          _hover={{ color: "orange" }}
          _active={{ bg: "brand.500" }}
          _focus={{ boxShadow: "md" }}
        >
          Prev
        </Button>
        <Button
          onClick={nextPage}
          px="2"
          mx="2"
          mt="4"
          bg="brand.500"
          color="brand.200"
          boxShadow="md"
          transition=".5s all ease"
          _hover={{ color: "orange" }}
          _active={{ bg: "brand.500" }}
          _focus={{ boxShadow: "md" }}
        >
          Next
        </Button>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        maxW="1920px"
        py="4"
      >
        {characters &&
          characters.map(
            ({ id, gender, image, name, origin, species, status, url }) => (
              <Cards
                key={id}
                gender={gender}
                image={image}
                name={name}
                origin={origin}
                species={species}
                status={status}
                url={url}
              />
            )
          )}
      </Box>
    </>
  );
};
