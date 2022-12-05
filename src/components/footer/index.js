import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return ( 
        <div className="w-full h-auto flex justify-start items-start flex-col z-10 bg-mainBlue">
            <div className="w-full h-auto flex justify-center items-center md:flex-row flex-col-reverse">
                <div className="md:w-1/2 w-auto h-auto flex justify-center items-center ">
                    <h1 className="h-auto text-md font-sm text-almostWhite"> &copy; <span className="text-almostWhite"> 2022 Bereket Lemma. All rights reserved.</span></h1> 
                </div>
                <div className="md:w-1/2 w-full h-20 flex justify-center items-center flex-row">
                    <div className="w-auto h-1/2 flex justify-center items-center mx-3">
                        <h1 className="h-auto w-full text-lg font-bold text-almostWhite"> Contact Me</h1> 
                    </div>

                    <div className="w-auto h-1/2 flex justify-center items-center flex-row ">
                        <div className="w-10 flex justify-center items-center h-10 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150 bg-almostWhite hover:bg-superLightBlu">
                            <a href="https://www.linkedin.com/in/bereket-lemma/" target="_blank" rel="noreferrer">
                                <LinkedInIcon fontSize='large' className="text-mainBlue"/>
                            </a>
                        </div>

                        <div className="w-10 h-10 flex justify-center items-center mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150 bg-almostWhite hover:bg-superLightBlu">
                            <a href="https://www.twitter.com/berek_et" target="_blank" rel="noreferrer">
                                <TwitterIcon fontSize='large' className="text-mainBlue"/> 
                            </a>
                        </div>

                        <div className="w-10 h-10 flex justify-center items-center mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150 bg-almostWhite hover:bg-superLightBlu">
                            <a href="https://t.me/fa_con" target="_blank" rel="noreferrer">
                                <TelegramIcon fontSize='large' className="text-mainBlue"/>                            
                            </a>
                        </div>

                        <div className="w-10 h-10 flex justify-center items-center mx-1 rounded-full shadow-md hover:shadow-md cursor-pointer duration-150 bg-almostWhite hover:bg-superLightBlu">
                            <a href="https://github.com/Bereky" target="_blank" rel="noreferrer">
                                <GitHubIcon fontSize='large' className="text-mainBlue "/>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
             
        </div>
     );
}
 
export default Footer;