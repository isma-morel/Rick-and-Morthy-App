import { Box } from "@chakra-ui/react"
import {useState, useEffect} from "react"
import { Cards } from "../../presentational/Cards/Cards"


export const CardList = () => {
    const [characters, setCharacters] = useState(null)
    const [info, setInfo] = useState(null)


    useEffect(() => {
        const getData = async () => {
            await fetch("https://rickandmortyapi.com/api/character")
                .then(response => response.json())
                .then(data => {
                    setCharacters(data.results)
                    setInfo(data.info)
                })
        }
        getData()
    }, [])
    // useEffect(() => {
    //     fetch("https://rickandmortyapi.com/api/character")
    //         .then(response => response.json())
    //         .then(data => setCharacters(data.results))
    //         .then(() => characters && characters.map(({ episode }) => {
    //             fetch(episode[episode.length - 1])
    //                 .then(response => response.json())
    //                 .then(location => setLocation(location))
    //             return location
    //     }))
    // }, [])

    return (
        <>
            <Box d="flex" justifyContent="center" alignItems="center" flexWrap="wrap" maxW="1920px">   
                {characters && characters.map(({ id, gender, image, name, origin, species, status, url }) => <Cards key={id} gender={gender} image={image} name={name} origin={origin} species={species} status={status} url={url}/>)}
            </Box>
            {characters? console.log(characters): null}
            {info? console.log(info): null}
        </>
    )
}
