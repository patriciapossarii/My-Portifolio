import Header from "../../Components/Header/Header"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    Box,
    Text,
    useColorModeValue,
    Card,
    CardHeader,
    Heading,
    Stack,
    ListItem,
    UnorderedList,
    Container
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


const AboutPage = () => {

    return (
        <div>
            <Header />
            <Box
                paddingTop={"800px"}
                
            >
                <Flex flexDir={"row"} marginBottom={"50px"}>
                    <Box marginLeft={"60px"}  >

                        <Text fontSize={"2xl"} marginTop={"-600px"} textAlign={"left"} lineHeight={"50px"}>
                            <Text fontSize={"5xl"} color={"tomato"} > About Me</Text>

                            Sou desenvolvedora full stack, QA, graduanda em Sistemas de Informação, estudante BootCamp Full Stack. Tenho conhecimento nas tecnologias HTML, JavaScript, CSS React.JS TypeScript, Node.JS, SQLITE assim como projetos realizados nestas tecnologias.
                            <br />
                            <p> Experiência profissional nas áreas de: QA Teste, Auditora Interna, Governança de TI, técnica em Informática,
                                Infraestrutura e Suporte Help Desk em TI.</p>

                            <p>A área de tecnologia para mim é essencial e criativa. Cada projeto possui suas particularidades e desafios, o que torna ainda mais empolgante.</p>

                        </Text>
                    </Box>
                    <Flex flexDir={"row"} marginRight={"20px"} marginTop={"-500px"} width={"350%"} opacity={"90%"} >

                        <Card minW={"50%"} marginLeft={"20px"} gap={"20px"} bg={useColorModeValue('gray.100', 'gray.900')}> 
                            <CardHeader>
                                <Heading size='md'>Education</Heading>
                            </CardHeader>

                            <Accordion allowMultiple >
                                <AccordionItem border={"none"}>
                                    {({ isExpanded }) => (
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Bootcamp de Desenvolvimento Web - Full-Stack
                                                    </Box>
                                                    {isExpanded ? (
                                                        <MinusIcon fontSize='12px' />
                                                    ) : (
                                                        <AddIcon fontSize='12px' />
                                                    )}
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4} textAlign={"left"}>
                                                Programa com mais de 1000 horas de experiência prática em desenvolvimento Fullstack, guiadas por metodologias ágeis (Kanban/Scrum).
                                                Entre as habilidades aprendidas durante o curso estão HTML, CSS, JavaScript,
                                                React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex,
                                                TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.
                                                <Text>09/2022 - 03/2023</Text>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>


                            <Accordion allowMultiple>
                                <AccordionItem border={"none"}>
                                    {({ isExpanded }) => (
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Bacharel em Sistemas de Informação
                                                    </Box>
                                                    {isExpanded ? (
                                                        <MinusIcon fontSize='12px' />
                                                    ) : (
                                                        <AddIcon fontSize='12px' />
                                                    )}
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>

                                                <Text>Universidade Estácio de Sá </Text>
                                                <Text> 06/2020 - 06/2024</Text>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>


                            <Accordion allowMultiple >
                                <AccordionItem border={"none"}>
                                    {({ isExpanded }) => (
                                        <>
                                            <h2>
                                                <AccordionButton >
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Técnico em Informática
                                                    </Box>
                                                    {isExpanded ? (
                                                        <MinusIcon fontSize='12px' />
                                                    ) : (
                                                        <AddIcon fontSize='12px' />
                                                    )}
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Text>Centro de Educação Profissional</Text>
                                                <Text>02/2016 - 06/2017</Text>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>

                            <Accordion allowMultiple>
                                <AccordionItem border={"none"}>
                                    {({ isExpanded }) => (
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Bacharel em Administração
                                                    </Box>
                                                    {isExpanded ? (
                                                        <MinusIcon fontSize='12px' />
                                                    ) : (
                                                        <AddIcon fontSize='12px' />
                                                    )}
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Text>Faculdade de Ciências Sociais Aplicadas do Sul de Minas - FACESM</Text>
                                                <Text>02/2010 - 12/2013</Text>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>

                            <Stack marginBlock={"60px"} marginLeft={"20px"} gap={"20px"}>
                                <Heading size='md' >Knowledge</Heading>

                                <Stack textAlign={"left"}  >
                                    <Text> IEC 27001 (ISFS)</Text>
                                    <Text>PDPF</Text>
                                    <Text>MS-900</Text>
                                    <Text>ITIL4</Text>
                                    <Text>AWS</Text>
                                    <Text>LGPD</Text>
                                </Stack>
                            </Stack>
                        </Card>



                        <Card minW={"50%"}  bg={useColorModeValue('gray.100', 'gray.900')}>
                            <CardHeader>
                                <Heading size='md'>Work Experience</Heading>
                            </CardHeader>
                            <Stack padding={"20px"} gap={"20px"}>
                                <Accordion allowMultiple>
                                    <AccordionItem border={"none"}>
                                        {({ isExpanded }) => (
                                            <>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            Analista de Suporte de  TI / QA Teste
                                                        </Box>
                                                        {isExpanded ? (
                                                            <MinusIcon fontSize='12px' />
                                                        ) : (
                                                            <AddIcon fontSize='12px' />
                                                        )}
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text as={"b"} >Fênix Indústria de Eletrônicos Ltda - FOXCONN</Text>
                                                    <UnorderedList textAlign={"left"}>
                                                        <ListItem>Desenvolvi o processo de teste de software na empresa;</ListItem>
                                                        <ListItem>Gerenciei os processos de governança de TI da equipe;</ListItem>
                                                        <ListItem>Trabalhei como analista de Infraestrutura e suporte Help Desk em TI;</ListItem>
                                                        <ListItem>Participei na auditora interna.</ListItem>
                                                        <p>05/2019 - 09/2022</p>
                                                    </UnorderedList>
                                                </AccordionPanel>
                                            </>
                                        )}
                                    </AccordionItem>
                                </Accordion>


                                <Accordion allowMultiple>
                                    <AccordionItem border={"none"}>
                                        {({ isExpanded }) => (
                                            <>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            Assistente Administrativo
                                                        </Box>
                                                        {isExpanded ? (
                                                            <MinusIcon fontSize='12px' />
                                                        ) : (
                                                            <AddIcon fontSize='12px' />
                                                        )}
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text as={"b"} >Comercial e Importadora de Pneus - Pirelli</Text>
                                                    <Text>Assistente administrativas em:</Text>
                                                    <UnorderedList textAlign={"left"}>
                                                        <ListItem>Fiscal;</ListItem>
                                                        <ListItem>Financeiro;</ListItem>
                                                        <ListItem>RH;</ListItem>
                                                        <ListItem>Logística;</ListItem>
                                                        <ListItem>Compras;</ListItem>
                                                        <p>03/2018 - 03/2019</p>
                                                    </UnorderedList>
                                                </AccordionPanel>
                                            </>
                                        )}
                                    </AccordionItem>
                                </Accordion>


                                <Accordion allowMultiple >
                                    <AccordionItem border={"none"}>
                                        {({ isExpanded }) => (
                                            <>
                                                <h2>
                                                    <AccordionButton >
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            Assistente Administrativo
                                                        </Box>
                                                        {isExpanded ? (
                                                            <MinusIcon fontSize='12px' />
                                                        ) : (
                                                            <AddIcon fontSize='12px' />
                                                        )}
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text as={"b"} >Vanderci Fereira da Silva - Mecatrônica</Text>
                                                    <Text>Gerenciei e melhorei todos os processos administrativos nas áreas:</Text>
                                                    <UnorderedList textAlign={"left"}>
                                                        <ListItem>Fiscal;</ListItem>
                                                        <ListItem>Financeiro;</ListItem>
                                                        <ListItem>RH;</ListItem>
                                                        <ListItem>Logística;</ListItem>
                                                        <ListItem>Compras;</ListItem>
                                                        <ListItem>Licitação.</ListItem>
                                                        <p>10/2013 - 03/2018</p>
                                                    </UnorderedList>
                                                </AccordionPanel>
                                            </>
                                        )}
                                    </AccordionItem>
                                </Accordion>

                                <Stack marginBlockStart={"50px"} marginLeft={"20px"} gap={"20px"} flexDir={"column"}>
                                    <Heading size='md' marginTop={"120px"} >Language</Heading>

                                    <Stack textAlign={"left"}  >
                                        <Text> Inglês (Intermediário)</Text>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                    </Flex>
                </Flex>
            </Box>
        </div >
    )
}


export default AboutPage