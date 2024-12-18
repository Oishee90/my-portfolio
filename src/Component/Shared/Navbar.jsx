

import { IoHome } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";
import { GrTechnology } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";
import resumeFile from '../../assets/oishe_resume.pdf'
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const handleDownloadResume = () => {
    fetch(resumeFile)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Oishee_Khan_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error downloading the file:', error));
};
    const navlinks = <>
     <li className="font-Wittgenstein hover:text-white text-[#F5DEB3] text-xs lg:text-lg items-start justify-start" >  <ScrollLink  className="flex items-center justify-center gap-3" to="home" smooth={true} duration={500}>
                    <IoHome /> Home
                </ScrollLink></li>
                <li className="font-Wittgenstein hover:text-white text-[#F5DEB3] text-xs lg:text-lg items-start justify-start  " > <ScrollLink className="flex items-center justify-center gap-3" to="about" smooth={true} duration={500}>
                    <IoPersonCircleSharp  /> About Me
                </ScrollLink></li>
                <li className="font-Wittgenstein hover:text-white text-[#F5DEB3] text-xs lg:text-lg items-start justify-start " > <ScrollLink className="flex items-center justify-center gap-3" to="skill" smooth={true} duration={500}>
                    <GrTechnology  /> Skills
                </ScrollLink></li>
                <li className="font-Wittgenstein hover:text-white text-[#F5DEB3] text-xs lg:text-lg items-start justify-start " > <ScrollLink className="flex items-center justify-center gap-3" to="projects" smooth={true} duration={500}>
                <GoProjectSymlink /> Project
                </ScrollLink></li>
                <li className="font-Wittgenstein hover:text-white text-[#F5DEB3] text-xs lg:text-lg items-start justify-start  " > <ScrollLink className="flex items-center justify-center gap-3" to="contact" smooth={true} duration={500}>
                    <GrContact /> Contact Me
                </ScrollLink></li>
   

  

    
  </>
    return (
        <div  className="container mx-auto">
            <div className="navbar bg-black border-b border-gray-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-black text-white lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-Wittgenstein text-white font-bold"><i><span className="font-Wittgenstein text-purple-600">Oishee</span><span className="text-pink-500">Khan</span></i></a>
  </div>
 
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
    {navlinks}
   
   
    </ul>
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <button
                        className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-2xl border-none text-white py-2 px-4 mt-4  transition duration-300 ease-in-out flex items-center gap-2"
                        onClick={handleDownloadResume}
                    ><FaFileDownload />
                        Download Resume
                    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;