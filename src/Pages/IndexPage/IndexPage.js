import Header from "../../Components/Header/Header"
import photoProfile from "../../Assets/foto.jpg"
import {
    Flex,
    Image,
    Box,
    Text,
    useColorModeValue
} from "@chakra-ui/react"


const IndexPage = () => {

    return (



        <Box>
            <Header />

            <Flex display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"} wrap={"wrap"} marginLeft={"10px"} >
                <Box width={"50%"}>
                    <Flex flexDir={"column"}>
                        <Text fontSize={"8xl"}> Hello! </Text>
                        <Text fontSize={"6xl"}>  My name is </Text >
                        <Text fontSize={"6xl"} color={"tomato"}> Patri­cia Possari</Text>
                        <Text fontSize={"6xl"}> I build things for web. </Text>
                        <Text fontSize={"8xl"} color={"tomato"}>I'm front-end developer. </Text>

                    </Flex>
                </Box>
                <Image src={photoProfile} maxH={"450px"} maxW={"450px"} borderRadius={"50%"} />

            </Flex>

        </Box>


    )
}


export default IndexPage