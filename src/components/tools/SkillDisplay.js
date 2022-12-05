import SkillCard from "./SkillCard";

const SkillDisplay = (props) => {
    return ( 
        <div className="w-full h-auto flex justify-center items-start md:flex-row flex-col px-10 space-y-3 my-6">
            <div className="md:w-2/5 w-full h-auto flex justify-start items-start flex-col">
                <h1 className="h-auto text-4xl font-md text-center mt-2"> {props.data.title}</h1>
                <span className="flex w-full h-1 md:hidden justify-start items-start bg-superLightBlu"></span> 
            </div>

            <div className="md:w-3/5 w-full h-auto flex justify-start items-center flex-wrap ">
                
                {props.data.technologies.map((cardData) => <SkillCard data={cardData} key={cardData.name}/>)}

                <span className="hidden w-full h-1 md:flex justify-start items-start bg-superLightBlu mt-10"></span> 
                
            </div>
        </div>
     );
}
 
export default SkillDisplay;