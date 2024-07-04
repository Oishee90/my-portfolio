import { FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Import icons for HTML5 and CSS3 (example)
import { IoLogoJavascript } from 'react-icons/io'; // Import icon for JavaScript (example)

import { SiTailwindcss,SiReact,SiFirebase,SiNodedotjs, SiMongodb  } from "react-icons/si";
const Skill = () => {
    return (
        <div id='skill' className="mt-32 py-12 bg-gray-900 min-h-screen border-t-2  border-purple-400 rounded-2xl">
            <div className="container mx-auto px-6">
            <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700  lg:text-5xl  text-3xl font-bold text-white mb-2  text-center shadow-slate-400">
                 My Skills 📊
                </h1>
                <div className="text-gray-300 border-t-2 border-green-500 w-[147px] mx-auto pb-2 mb-3 "> </div>
                <p className='text-xl text-center mx-auto font-raleway mb-8 text-white font-raleway'>Here the technologies i work with</p>
                <div className="grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e] ">
                        <FaHtml5 className="text-6xl text-red-500" />
                        <span className="  text-white font-bold ml-4 text-xl font-Wittgenstein">HTML5</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 hover:bg-[#17191e] shadow-xl bg-[#31353e] rounded-3xl">
                        <FaCss3Alt className="text-6xl text-blue-500" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">CSS3</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e] ">
                        <SiTailwindcss className="text-6xl text-cyan-500" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">Taillwind css</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e] ">
                        <IoLogoJavascript className="text-6xl text-yellow-500" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">JavaScript</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e]">
                        <SiReact className="text-6xl text-blue-400" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">React</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e]">
                        <SiFirebase className="text-6xl text-yellow-500" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">Firebase</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e] ">
                        <SiNodedotjs className="text-6xl text-green-500" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">Node.js</span>
                    </div>
                    <div className="flex items-center justify-center p-4 hover:border-2 hover:border-violet-300 transition transform duration-300 ease-in-out hover:scale-105 rounded-3xl hover:bg-[#17191e] shadow-xl bg-[#31353e] ">
                        <SiMongodb className="text-6xl text-green-400" />
                        <span className="text-white font-bold ml-4 text-xl font-Wittgenstein">MongoDB</span>
                    </div>
                    {/* <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <SiTailwindcss className="text-6xl text-cyan-500" />
                        <span className="text-white ml-4 text-xl">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <IoLogoJavascript className="text-6xl text-yellow-500" />
                        <span className="text-white ml-4 text-xl">JavaScript</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <SiReact className="text-6xl text-blue-400" />
                        <span className="text-white ml-4 text-xl">React</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <SiFirebase className="text-6xl text-yellow-500" />
                        <span className="text-white ml-4 text-xl">Firebase</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <SiNodeDotJs className="text-6xl text-green-500" />
                        <span className="text-white ml-4 text-xl">Node.js</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <SiMongodb className="text-6xl text-green-400" />
                        <span className="text-white ml-4 text-xl">MongoDB</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Skill;
