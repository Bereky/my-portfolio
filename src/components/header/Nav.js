import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

const Nav = () => {

    const [ navState, setNavState ] = useState(false)

    const toggleNavigation = () => {
        setNavState(!navState)
    }

    return ( <>
                <div className="w-auto md:flex justify-start h-full absolute z-10 right-8 hidden">
                    <div className="w-84 flex justify-center items-center flex-row h-full px-4">
                        <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                            <a href="https://www.linkedin.com/in/bereket-lemma/" target="_blank" rel="noreferrer">
                                <LinkedInIcon fontSize='large' className="text-mainBlue" />
                            </a>
                        </div>

                        <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                            <a href="https://www.twitter.com/berek_et" target="_blank" rel="noreferrer">
                                <TwitterIcon fontSize='large' className="text-mainBlue"  /> 
                            </a> 
                        </div>

                        <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                            <a href="https://t.me/fa_con" target="_blank" rel="noreferrer">
                                <TelegramIcon fontSize='large' className="text-mainBlue" />                            
                            </a>                            
                        </div>

                        <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                            <a href="https://github.com/Bereky" target="_blank" rel="noreferrer">
                                <GitHubIcon fontSize='large' className="text-mainBlue" />
                            </a>
                        </div>
                    </div>

                     {/* Download Resume Button */}

                    <div className="w-36 flex justify-center items-center h-full mx-4">
                        <button className="w-full outline outline-2 outline-mainBlue rounded-md h-9 text-xl text-mainBlue hover:bg-mainBlue hover:text-white duration-200"><FileDownloadIcon /> Resume</button>
                    </div>
                </div>

                <div className="w-24 flex justify-end items-center h-full mr-6 md:hidden" onClick={toggleNavigation}>
                    {!navState && <MenuIcon fontSize='large'/>}
                    {navState && <CloseIcon fontSize='large'/>}
                </div>
                
                {navState && 

                    <div className="w-full absolute md:hidden flex justify-center items-center flex-col bg-slate-50 mt-16 h-36 duration-300 space-y-1 shadow-md">
                        <div className="w-full flex justify-center items-center flex-row h-full px-4 bg-slate-100 ">
                            <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                                <LinkedInIcon fontSize='large' className="text-mainBlue"/>
                            </div>

                            <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                                <TwitterIcon fontSize='large' className="text-mainBlue"/> 
                            </div>

                            <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                                <TelegramIcon fontSize='large' className="text-mainBlue" />                            
                            </div>

                            <div className="w-11 flex justify-center items-center h-11 mx-1 rounded-full shadow-md hover:shadow-sm cursor-pointer duration-150">
                                <GitHubIcon fontSize='large' className="text-mainBlue"/>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center h-full mx-4 bg-slate-100">
                            <button className="w-36  outline outline-2 outline-mainBlue rounded-md h-9 text-xl text-mainBlue hover:bg-mainBlue hover:text-white duration-200"><FileDownloadIcon /> Resume</button>
                        </div>

                    </div>
                }
            </>
     );
}
 
export default Nav;