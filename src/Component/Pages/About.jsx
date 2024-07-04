import React from 'react';

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
                        Currently, I'm studying at the DMPI Department of CST, enhancing my skills and knowledge. I enjoy collaborating with others and sharing ideas to bring innovative projects to life. Let's connect and build something amazing together!
                    </p>
                </div>
                <div>
                <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700  lg:text-5xl  text-3xl font-bold text-white mb-2  text-center shadow-slate-400">
             My Education 
                </h1>  
                <div className="text-gray-300 border-t-2 border-green-500 w-[147px] mx-auto pb-2 mb-10 "> </div>
                <div className="flex flex-wrap justify-center mt-12 gap-8">
                    <div className="max-w-md w-full bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-4 py-2">
                            <h2 className="font-bold text-xl text-white mb-2">Education</h2>
                            <div className="text-gray-300 border-t-2 border-gray-600 pb-2"> </div>
                            <div className="text--300">
                                <p className="text-base font-Wittgenstein ">Institute Name: <span className="font-bold"> MAHMS And College</span></p>
                                <p className="text-base font-Wittgenstein mt-2 mb-4">Exam: <span className="font-bold"> SSC (3.78 out of 5 GPA)</span></p>
                                <p className="text-base font-Wittgenstein">Subject: <span className="font-bold"> Science</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md w-full bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-4 py-2">
                            <h2 className="font-bold text-xl text-white mb-2">Course</h2>
                            <div className="text-gray-300 border-t-2 border-gray-600 pb-2"> </div>
                            <div className="text-white">
                                <p className="text-base font-Wittgenstein">Institute Name: <span className="font-bold">Programming Hero</span></p>
                                <p className="text-base font-Wittgenstein mt-4 mb-4">Course: <span className="font-bold">Web Development</span></p>
                                <p className="text-base font-Wittgenstein">Certificate: <span className="font-bold">View</span></p>
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
