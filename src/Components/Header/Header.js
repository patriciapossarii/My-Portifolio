import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logoLinkedin from "../../Assets/icons/linkedin.svg"
import logoGitHub from "../../Assets/icons/github.svg"
import { useNavigate } from "react-router-dom";
import { goToAboutPage, goToContactPage, goToIndexPage, goToProjectsPage, goToStackPage } from '../../Router/coordinator';


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}wrap={"wrap"} padding={"10px"}>
                <Flex display={"flex"} alignItems={'center'} justifyContent={'space-between'} wrap={"wrap"} >
                    <Text fontSize='30px' color='tomato' as='b'>Patrícia Possari</Text>

                    <Flex alignItems={'center'}  wrap={"wrap"} >
                        <Stack direction={'row'} spacing={7}  wrap={"wrap"} >
                            <Flex class="nav-group-page-items" gap={"50px"} justifyContent={"center"} alignItems={"center"}>
                                <Link onClick={() => goToIndexPage(navigate)}>Home</Link>
                                <Link onClick={() => goToAboutPage(navigate)}>About</Link>
                                <Link onClick={() => goToStackPage(navigate)}>Tech Stack</Link>
                                <Link onClick={() => goToProjectsPage(navigate)}>Projects</Link>
                                <Link onClick={() => goToContactPage(navigate)}>Contact</Link>
                            </Flex>

                            <Flex gap={"10px"} justifyContent={"space-between"} alignItems={"center"}  >
                                <a href="https://github.com/patriciapossarii" target="_blank">
                                    <Image src={logoGitHub} alt="Github icon" />
                                </a>

                                <a href="https://www.linkedin.com/in/patricia-m-carvalho-possari/" target="_blank">
                                    <Image src={logoLinkedin} alt="Linkedin icon" />
                                </a>
                            </Flex>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}