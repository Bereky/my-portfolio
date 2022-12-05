import Brand from "./Brand";
import Nav from "./Nav";


const Header = () => {
    return ( 
        <div className="h-16 w-screen shadow-md z-20 fixed">
            <div className="w-100 flex justify-between h-full relative bg-white">
                <Brand />
                <Nav />
            </div>
        </div>
     );
}
 
export default Header;