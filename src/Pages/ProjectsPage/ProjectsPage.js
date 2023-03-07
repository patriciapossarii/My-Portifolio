import Header from "../../Components/Header/Header"
import {
    Flex,
    useColorModeValue,
    Box
} from '@chakra-ui/react';
import projects from "../../projects/projects.json"
import ProjectsCard from "../../Components/ProjectsCards/ProjectsCards";



const ProjectsPage = () => {


    return (
        <div>
            <Header />

            <Box

               
                align="center"
                justify="center"
              
                   >
                <Flex gap={"16px"} wrap={"wrap"} justifyContent={"space-evenly"}  >
                    {projects.map((project) => {
                        return <ProjectsCard  title={project.title} stack={project.stacks} about={project.about} gitHub={project.github}
                            demo={project.demo} image={project.image} bg={project.bg} video={project.video} />
                    })}
                </Flex>

            </Box>
        </div>
    )
}

export default ProjectsPage