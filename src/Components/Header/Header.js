import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image, Text } from "@chakra-ui/react"
import logoLinkedin from "../../Assets/icons/linkedin.svg"
import logoGitHub from "../../Assets/icons/github.svg"
import myLogo from "../../Assets/myLogo.png"
import { useNavigate } from "react-router-dom";
import { goToAboutPage, goToContactPage, goToIndexPage,goToProjectsPage,goToStackPage } from '../../Router/coordinator';


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize='30px' color='tomato' as='b'>Patrícia Possari</Text>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Flex class="nav-group-page-items" gap={"50px"} justifyContent={"center"} alignItems={"center"}>
                                <Link onClick={()=>goToIndexPage(navigate)}>Home</Link>
                                <Link onClick={()=>goToAboutPage(navigate)}>About</Link>
                                <Link onClick={()=>goToStackPage(navigate)}>Tech Stack</Link>
                                <Link onClick={()=>goToProjectsPage(navigate)}>Projects</Link>
                                <Link onClick={()=>goToContactPage(navigate)}>Contact</Link>
                            </Flex>

                            <Flex gap={"50px"} justifyContent={"space-between"} alignItems={"center"} >
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