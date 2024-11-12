/* eslint-disable react/no-unescaped-entities */

import { IoSchool } from "react-icons/io5";

const About = () => {
    return (
        <div id="about" className="mt-32 py-12 bg-gray-900 min-h-screen border-t-2  border-green-400 rounded-2xl">
            <div className="container mx-auto px-4 ">
                <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700  lg:text-5xl  text-3xl font-bold text-white mb-2  text-center shadow-slate-400">
              About Me 🌟 
                </h1>
                <div className="text-gray-300 border-t-2 border-purple-500 w-[147px] mx-auto pb-2 mb-10 "> </div>
                <div className="mt-12 md:text-lg text-base text-white font-raleway">
                    <p>
                        Hi, I'm Oishee! 👋 I'm a passionate and hardworking front-end developer who loves coding and creating responsive websites. I have expertise in HTML, CSS, JavaScript, and React, and I'm always eager to learn more.
                    </p>
                    <p className="mt-4">
                        Currently, I'm studying at the DMPI Department of CST, enhancing my skills and knowledge. I enjoy collaborating with others and sharing ideas to bring innovative projects to life.Recently, I completed a team project built with Next.js, where I gained hands-on experience with the framework. Let's connect and build something amazing together!
                    </p>
                </div>
                <div>
                <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700  lg:text-5xl  text-3xl font-bold text-white mb-2  text-center shadow-slate-400">
             My Education 🎓
                </h1>  
                <div className="text-gray-300 border-t-2 border-green-500 w-[147px] mx-auto pb-2 mb-10 "> </div>
                <div className="flex flex-wrap justify-center mt-12 gap-8">
           
  <div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400  text-white rounded-lg overflow-hidden">
  <p className="text-green-400  mx-auto text-center mt-2">2020-Present</p>
    <div className="px-4 py-2 flex items-center gap-5 justify-between">
      <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div> {/* Adjusted size and color */}
      <div>
        {/* Green color and medium font weight */}
        <h1 className="text-xl font-bold font-raleway mt-5 mb-5 ">DIPLOMA IN ENGINEERING</h1> {/* Bold text */}
        <h2 className='mb-5'>Depertment of Cst ,8th semester</h2>
        <h2 className='mb-5'>Dhaka Mohila Polytechnic Institute</h2> {/* Normal text */}
      </div>
    </div>
</div>
<div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400  text-white rounded-lg overflow-hidden">
  <p className="text-green-400  mx-auto text-center mt-2">2019-2020</p>
    <div className="px-4 py-2 flex items-center gap-5 justify-between">
      <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div> {/* Adjusted size and color */}
      <div>
        {/* Green color and medium font weight */}
        <h1 className="text-xl font-bold font-raleway mt-5 mb-5 ">SECENDORY SCHOOL CERTIFICATE</h1> 
        <h2 className='mb-5'>SSC (4.78 out GPA5)</h2> {/* Bold text */}
        <h2 className='mb-5'>MAHM School And Collage</h2> {/* Normal text */}
      </div>
    </div>
</div>
<div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400  text-white rounded-lg overflow-hidden">
  <p className="text-green-400  mx-auto text-center mt-2">31/12/2023 - 24/06/2024</p>
    <div className="px-4 py-2 flex items-center gap-5 justify-between">
      <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div> {/* Adjusted size and color */}
      <div>
        {/* Green color and medium font weight */}
        <h1 className="text-xl font-bold font-raleway mt-5 mb-5 ">FRESHER MERN STACK DEVELOPER</h1> 
        <h2 className='mb-5'>Learning Frontend Developing 6months</h2>
        <h2 className='mb-5'>Programming Hero</h2> {/* Normal text */}
      </div>
    </div>
</div>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default About;
