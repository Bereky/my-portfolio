import SkillDisplay from "./SkillDisplay";
import skillConfig from "./skill-config";

const Tools = () => {
    return ( 
        <div className="w-full min-h-screen h-auto flex justify-start items-start flex-col z-10 bg-almostWhite pb-24">
            <div className="w-full h-full flex justify-start items-center flex-col mt-24">
                <div className="w-full h-48 flex justify-center items-center flex-col">
                    <h1 className="h-auto text-5xl font-extrabold text-center my-2"> Development <span className="text-mainBlue">Tools</span> & Skills</h1> 
                    <h3 className="h-auto text-xl font-medium text-center my-1"> Technologies, frameworks and tools that I use to create software solutions</h3> 
                </div> 
            </div>
            
            <SkillDisplay data={skillConfig.frontend}/>
            <SkillDisplay data={skillConfig.backend}/>
            <SkillDisplay data={skillConfig.tools}/>

        </div>
     );
}
 
export default Tools;