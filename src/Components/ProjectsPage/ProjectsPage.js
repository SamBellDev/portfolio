import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsPage = () => {
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light"> Project portfolio < /h1>
                        <p className="lead text-muted">A collection of my personal projects with details about the stacks
                        used and why I built it.</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>


        </main>
    )
}

export default ProjectsPage