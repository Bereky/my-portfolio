import ParticleBg from "./particle/ParticleBg";

const Hero = () => {
    return ( 
        <div className="w-full h-screen flex justify-center items-center">
                <ParticleBg />
                <div className="w-full h-96 flex justify-center items-center cursor-default">
                    <div className="w-full h-auto flex justify-center items-center flex-col z-10 space-y-3">
                        <h1 className="h-auto md:text-7xl  text-6xl font-extrabold text-center ">BEREKET LEMMA</h1> 
                        <h1 className="h-auto md:text-7xl text-6xl font-medium text-center text-mainBlue"> FULL STACK DEVELOPER</h1>
                        <h1 className="h-auto md:text-5xl text-5xl font-medium text-center">BASED IN ETHIOPIA</h1>
                    </div>
                </div>
        </div>
     );
}
 
export default Hero;