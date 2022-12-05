import ProjectCard from './ProjectCard';
import projectConfig from './projectConfig';

const Projects = () => {
    return ( 
        <div className="w-full min-h-screen h-auto flex justify-center items-center z-10 bg-almostWhite">
            <div className="w-full h-full flex justify-start items-center flex-col">
                <div className="w-full h-48 flex justify-center items-center flex-col">
                    <h1 className="h-auto text-5xl font-extrabold text-center my-2"> Featured <span className="text-mainBlue">Projects</span></h1> 
                    <h3 className="h-auto text-xl font-medium text-center my-1"> Browse projects to get an overview of my work</h3> 
                </div> 

                <div className="w-full h-auto flex justify-center items-center flex-row flex-wrap py-3 relative">
                    {
                        projectConfig.map((projectData) => <ProjectCard data={projectData} key={projectData.name}/>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Projects;