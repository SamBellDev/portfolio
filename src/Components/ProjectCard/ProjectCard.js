const ProjectCard = (props) => {
    return (
        <div className ="card">
            {/*Will need back-end data from a Node.JS app I need to build*/}
            <img src={props.projectPhoto} alt={'Thumbnail of ' + props.projectName} />
            <h2>{props.projectName}</h2>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default ProjectCard