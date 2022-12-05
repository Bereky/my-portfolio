const SkillCard = (props) => {
    return ( 
        <div className="w-24 h-24 flex justify-center items-center bg-superLightBlu m-1 flex-col rounded-md hover:bg-inherit hover:ring-2 ring-superLightBlu hover:border-superLightBlu">
            <div className="w-full h-3/5 flex justify-center items-center">
                <img src={props.data.src} alt="" className="w-12 h-fit"/>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
                <h1 className="h-auto text-sm font-extrabold text-center my-2 text-slate-600"> {props.data.name}</h1> 
            </div>
        </div>
     );
}
 
export default SkillCard;