import { Heading,
    Icon,
    Stack,
    useColorModeValue, 
    Box,
    Center,
    Text,
    Image,
    Divider
} from '@chakra-ui/react';
import { MdVideoLibrary } from 'react-icons/md'
import { LinkIcon, ViewIcon } from '@chakra-ui/icons'


const ProjectsCard = (props) => {
    const { title, stack, about, gitHub, demo, image, bg, video } = props

    return (
        <Center py={12} >
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                minH={"550px"}
                maxH={"550px"}
                bg={useColorModeValue('gray.100', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'210px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 1,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: 'blur(0px)',
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

                <Divider bottom={"36px"} position={"absolute"} />
                <Box width={"300px"} display={"flex"} bottom={"6px"} position={"absolute"}
                    justifyContent={"space-around"} justifyItems={"center"} justify={"center"}>
                    <Text fontSize={'xl'}>
                        <LinkIcon /><a href={gitHub} target="_blank" >GitHub</a>
                    </Text>{demo.length > 2 &&
                        <Text fontSize={'xl'}>
                            <ViewIcon /><a href={demo} target="_blank" >Demo</a>
                        </Text>}
                        {video.length > 2 &&  <Text fontSize={'xl'}>
                        <Icon as={MdVideoLibrary} /><a href={video} target="_blank" >Video</a>
                    </Text>}
                </Box>
            </Box>
        </Center>

    )
}

export default ProjectsCard
