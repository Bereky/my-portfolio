import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const WorkCard = (props) => {
    return ( 
        <div className="h-32 md:w-4/5 w-full  flex justify-start items-center flex-row rounded-md shadow-md">
            <div className="sm:h-24 h-16 w-24 flex items-center justify-center bg-superLightBlu m-3 rounded-full shadow-md">
                <WorkOutlineIcon className="sm:h-32 h-16 sm:w-32 w-16" sx={{fontSize: 50 }}/>
            </div>

            <div className="h-28 md:w-4/5 w-11/12 flex flex-col justify-start items-start  m-3 px-4 rounded-md ">
                <h1 className="h-12 lg:text-2xl md:text-2xl text-lg font-bold  my-1">{props.data.jobTitle}</h1>
                <h1 className="h-12 lg:text-xl md:text-lg text-md font-bold my-1"> {props.data.companyName}</h1> 
                <h1 className="h-8 text-sm font-medium my-1"> {props.data.date} </h1> 
            </div>
        </div>
     );
}
 
export default WorkCard;