import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import Tooltip from '@mui/material/Tooltip'

const ProjectCard = (props) => {
    return ( 
        <div className="w-96 h-80 flex justify-start items-center flex-col mx-3 my-5 shadow-lg rounded-md hover:shadow-sm duration-700 z-10 relative">
            {/* Blur Card*/}
            <div className="w-96 h-80 bg-superLightBlu absolute z-1 rounded-md blur-sm"></div>

            <div className="w-96 h-80 absolute outline outline-1 outline-superLightBlu rounded-md">
                <div className="w-full h-3/5 flex justify-center items-center flex-col rounded-t-md p-2">
                    <img src={props.data.imageSrc} alt="test" className='rounded-md'/>
                </div>

                <div className="w-full h-2/5 flex justify-start items-center flex-col rounded-b-md px-2">
                    <div className="w-full h-10 flex justify-center items-start flex-col py-1">
                        <h3 className="h-auto text-xl font-bold text-center my-1">{props.data.name}</h3> 
                    </div> 

                    <div className="w-full h-12 flex justify-start items-start flex-row relative py-1">
                        <Tooltip title={props.data.technologies[0].name}>
                            <div className="w-11 h-11 flex justify-center items-center absolute bg-almostWhite rounded-full shadow-md p-1">
                                <img src={props.data.technologies[0].src} alt={props.data.technologies[0].name} className="w-8"/>
                            </div> 
                        </Tooltip>
                        
                        <Tooltip title={props.data.technologies[1].name}>
                            <div className="w-11 h-11 flex justify-center items-center absolute bg-almostWhite rounded-full left-9 shadow-md p-1">
                                <img src={props.data.technologies[1].src} alt={props.data.technologies[1].name} className="w-8"/>
                            </div> 
                        </Tooltip>
                        <Tooltip title={props.data.technologies[2].name}>
                            <div className="w-11 h-11 flex justify-center items-center absolute bg-almostWhite rounded-full left-16 ml-2 shadow-md p-1">
                                <img src={props.data.technologies[2].src} alt={props.data.technologies[2].name} className="w-8"/>
                            </div>
                        </Tooltip>

                    </div>

                    <div className="w-full h-10 flex justify-end items-end flex-row my-1 ">
                        <Tooltip title="Source code">
                            <div className="w-9 h-9 flex justify-center items-center bg-almostWhite rounded-full shadow-md cursor-pointer hover:bg-inherit duration-300 mx-1">
                                <a href={props.data.sourceCode} target="_blank" rel="noreferrer">
                                    <CodeIcon />
                                </a> 
                            </div> 
                        </Tooltip>

                        <Tooltip title="Preview site">
                            <div className="w-9 h-9 flex justify-center items-center bg-almostWhite rounded-full shadow-md cursor-pointer hover:bg-inherit duration-300 mx-1">
                                <a href={props.data.externalLink} target="_blank" rel="noreferrer">
                                    <LaunchIcon />
                                </a>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;