import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsPage = () => {
    return (
        <main>
            <h1>Project Portfolio</h1>
            <ProjectCard projectPhoto="./images/proj1.jpg" projectName="proj1" projectDescription="testproj1" />
            <ProjectCard projectPhoto="./images/proj2.jpg" projectName="proj2" projectDescription="testproj2"/>
            <ProjectCard projectPhoto="./images/proj3.jpg" projectName="proj3" projectDescription="testproj3"/>
        </main>
    )
}

export default ProjectsPage