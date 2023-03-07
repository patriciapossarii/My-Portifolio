import Header from "../../Components/Header/Header"
import {
    Flex,
    Image,
    Text,
    Box,
    useColorModeValue
} from "@chakra-ui/react"
import html from "../../Assets/icons/html.svg"
import css from "../../Assets/icons/css.svg"
import git from "../../Assets/icons/git.svg"
import javascript from "../../Assets/icons/javascript.svg"
import react from "../../Assets/icons/react.svg"
import vscode from "../../Assets/icons/vscode.svg"
import sql from "../../Assets/icons/sql..png"
import node from "../../Assets/icons/node.png"
import typescript from "../../Assets/icons/typescript.png"


const StackPage = () => {


    return (
        <div>
            <Header />

            <Box
             

               
                position="relative"
                align="center"
                justify="center"
>
                <Flex display={"flex"} flexDir={"column"} marginTop={"50px"}>

                    <Text fontSize={"6xl"}> My Tech Stack</Text>
                    <Text fontSize={"4xl"}> Technologies I've been working with recently</Text >




                    <Flex display={"flex"} flexDir={"row"} gap={"28px"} wrap={"wrap"} 
                    marginTop={"50px"} alignItems={"center"} marginBottom={"40px"} justifyContent={"center"}>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> HTML</p> <Image src={html} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> CSS</p> <Image src={css} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> JAVASCRIPT</p> <Image src={javascript} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> GIT</p> <Image src={git} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> REACT JS</p> <Image src={react} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> VSCODE</p> <Image src={vscode} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> SQL</p> <Image src={sql} w={"100px"} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> Typescript</p> <Image src={typescript} w={"100px"} /></Flex>
                        <Flex flexDir={"column"} alignItems={"center"}  ><p> Node</p> <Image src={node} w={"100px"} /></Flex>
                    </Flex>
                </Flex>

            </Box>

        </div >
    )
}

export default StackPage