import img from "../../assets/oishee2-removebg-preview.png";

const Banner = () => {
    // const handleDownloadResume = () => {
    //     const link = document.createElement('a');
    //     link.href = resumeFile;
    //     link.setAttribute('download', 'Oishee_Khan_Resume.txt'); // Name of the file to download
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
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
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 mt-4 rounded-lg transition duration-300 ease-in-out"
                        // onClick={handleDownloadResume}
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;