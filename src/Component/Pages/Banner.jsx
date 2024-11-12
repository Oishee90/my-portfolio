/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/oishee2-removebg-preview.png";
import resumeFile from '../../assets/oishe_resume.pdf'
import { FaFileDownload } from "react-icons/fa";
const Banner = () => {
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
    return (
        <div className=" h-auto  lg:h-[500px] flex justify-center items-center py-10 f">
            <div className="container mx-auto px-6 lg:flex lg:items-center  lg:gap-12">
              
                <div className="flex justify-center lg:w-1/2">
                    <div className="avatar h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] rounded-3xl flex justify-center items-center">
                        <div className="ring-primary  flex-col ring-offset-base-100 w-60 h-60 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full ring ring-offset-2 overflow-hidden bg-gray-900">
                            <img src={img} alt="Avatar" className="w-full h-full object-cover" />
                         
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left lg:w-1/2 ml-10">
                <h1 className="text-2xl lg:text-4xl xl:text-7xl xl:leading-tight font-bold text-white">
                        Hi,👋<br />I'm Oishee 
                        <span className="text-2xl font-Wittgenstein text-purple-600 lg:text-4xl xl:text-7xl xl:leading-tight font-bold">
                            Khan
                        </span>
                    </h1>
                    <h2 className="text-2xl lg:text-4xl mt-4 text-gray-300 font-Wittgenstein font-bold">
                        Frontend Developer | Passionate about Crafting User-Centric Experiences. 
                    </h2>
                    <button
                        className="btn mx-auto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-2xl border-none text-white py-2 px-4 mt-4 transition duration-300 ease-in-out flex items-center gap-2"
                        onClick={handleDownloadResume}
                    ><FaFileDownload />
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
