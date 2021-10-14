const ProjectCard = (props) => {
    return (
        <div>
            {/*Will need back-end data from a Node.JS app I need to build*/}
            <img src={props.projectPhoto} />
            <h2>{props.projectName}</h2>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default ProjectCard