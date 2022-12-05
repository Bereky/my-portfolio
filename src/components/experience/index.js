import experienceConfig from './experienceConfig';
import WorkCard from './WorkCard';

const Experience = () => {
    return ( 
        <div className="w-full min-h-screen h-auto flex justify-start items-start flex-col z-10 bg-almostWhite">
            <div className="w-full h-full flex justify-start items-center flex-col mt-24">
                <div className="w-full h-48 flex justify-center items-center flex-col">
                    <h1 className="h-auto text-5xl font-extrabold text-center my-2"> Job <span className="text-mainBlue">Experience</span></h1> 
                    <h3 className="h-auto text-xl font-medium text-center my-1"> Overview of my work experiences</h3> 
                </div> 
            </div>
            <div className="w-full h-auto flex justify-center items-center flex-col px-10 space-y-5 my-6  ">
                
                {
                    experienceConfig.map((experienceData) => <WorkCard data={experienceData} key={experienceData.companyName}/>)
                }
                
            </div>
        </div>
     );
}
 
export default Experience;