import './navbar.css';
import {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logop1 from '../../assets/images/logop1.jpeg'
import logop2 from '../../assets/images/logop2.png'

const Navbar = (props)=>{
    const [active,setActive] = useState('home');
    const links = [faLinkedin,faGithub,faInstagram];
    const hrefs = ['https://www.linkedin.com/in/pareekshith-n-1a3b44197/','https://github.com/pareekshithachar','https://www.instagram.com/pareekshithachar/'];
    return(
        <div className= "w-16 sm:w-40 h-[100vh]  fixed top-[50%] translate-y-[-50%] bg-black/10 md:bg-black/50 backdrop-blur-[3px] backdrop-saturate-100  flex flex-col sm:px-0 px-1">
        
            <div className="flex w-[90%]   mx-auto  justify-center space-x-2 py-2">
                <div className="w-[40px] h-[40px] rounded-[50%]  relative  ">
                    <img src = {logop1} layout ='fill' className="absolute  rounded-[50%] "/>
                </div>
                
              

            </div>
            <div className="sm:flex flex-col text-white/80 space-y-0 hidden ">
                    <div className=" text-center text-xl font-[600]">PAREEKSHITH</div> 
                     
                </div>
                <br/>
            <hr className="text-gray-900 border-1 w-[100%]"/>
            
            
            <ul className="justify-center flex flex-col h-screen pb-2 ">
               <a href = '#home' onClick={()=>setActive('home')} className=" flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group  relative transition duration-300 ease-in-out hover:scale-110">
              
                   <FontAwesomeIcon className={`text-xl w-7 group-hover:text-amber-400 ${active == 'home' ? 'text-amber-400' : ""}`} icon ={faHome} id='home'/>
                    <span className="text-sm group-hover:text-white font-[800] hidden sm:inline opacity-0 group-hover:opacity-80">Home</span>
                     <div className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%]">Home</div>
                   
               </a>
               <a href = '#about' onClick={()=>setActive('about')} className="mt-4 flex text-white items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative transition duration-300 ease-in-out hover:scale-110">
                   <FontAwesomeIcon className={`text-xl w-7 group-hover:text-amber-400 ${active == 'about' ? 'text-amber-400' : ""}`} icon ={faUser} id ='about'/>
                    <span className="text-sm group-hover:text-white font-[800] hidden sm:inline opacity-0 group-hover:opacity-80">About</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">Posts</div>
                   
               </a>
               <a href = '#projects' onClick={()=>setActive('projects')} className=" mt-4 flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative transition duration-300 ease-in-out hover:scale-110">
                   <FontAwesomeIcon className={`text-xl w-7 group-hover:text-amber-400 ${active == 'projects' ? 'text-amber-400' : ""}`} icon ={faLightbulb} id = 'projects'/>
                    <span className="text-sm group-hover:text-white font-[800] hidden sm:inline opacity-0 group-hover:opacity-80">Projects</span>
                    <div className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">Projects</div>
                   
               </a>
               <a href = '#contact' onClick={()=>setActive('contact')} className=" mt-4 flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative transition duration-300 ease-in-out hover:scale-110">
                   <FontAwesomeIcon className={`text-xl w-7 group-hover:text-amber-400 ${active == 'contact' ? 'text-amber-400' : ""}`} icon ={faEnvelope} id = 'contactme'/>
                    <span className="text-sm group-hover:text-white font-[800] hidden sm:inline opacity-0 group-hover:opacity-80">Contact</span>
                    <div className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">Contact</div>
                   
               </a>
              
              
            </ul>
            <ul className=' flex flex-col'>
            {   
                links.map((el,index)=>{
                    return(<li className='ml-4 mt-0 mr-0'>
                        <a  target="_blank" rel="noreferrer" href = {hrefs[index]}>
                            <FontAwesomeIcon className ="mt-4  md:text-sm text-white/80 hover:text-white pb-2" icon ={el} />
                            
                        </a>
                    </li>)
                })

                
            }
            <li className='ml-4 mt-0 mr-0'>
                <a className="group" target="_blank">
                <FontAwesomeIcon  className ="mt-4 md:text-sm text-white/80 hover:text-white pb-2" icon ={faEnvelope}/>
                <span className=" invisible inline-block text-2xl group-hover:text-white group-hover:visible font-[800]  ">achar.pareekshith@gmail.com</span>
                
               
                </a>
                
            </li>
            
        </ul> 
           
        </div>
    )
}

export default Navbar;