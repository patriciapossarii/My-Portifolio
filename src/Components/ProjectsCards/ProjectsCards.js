import Header from "../../Components/Header/Header"
import {

    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Box,
    Center,
    Text,
    Image,
    Divider
} from '@chakra-ui/react';
import { LinkIcon, ViewIcon } from '@chakra-ui/icons'


const ProjectsCard = (props) => {
    const {title, stack,about, gitHub,demo, image,bg}=props
    
return(
                <Center py={12} >
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    minH={"500px"}
                    maxH={"500px"}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${image})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={"scale-down"}
                            src={image}
                            bg={bg}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>

                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                           {title}
                        </Heading>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Tech stack:
                            {stack}
                        </Text>
                        <Text>
                           {about}
                        </Text>
                    </Stack>
                    <br></br>
                    <Divider />
                    <Stack direction={'row'} display={"flex"} justifyContent={"space-evenly"}>
                        <Text fontSize={'xl'}>
                            <LinkIcon /><a href={gitHub} >Link</a>
                        </Text>
                        <Text fontSize={'xl'}>
                            <ViewIcon /><a href={demo} >Demo</a>
                        </Text>

                    </Stack>
                </Box>
            </Center>

)
}

export default ProjectsCard
