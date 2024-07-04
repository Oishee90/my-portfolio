
import {Autoplay, Navigation, Pagination,  } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';
 import { FaGithub } from "react-icons/fa6";
 import { GrWaypoint } from "react-icons/gr";
 import { GrTechnology } from "react-icons/gr";


 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 const swiperStyles = `
.swiper-button-next, .swiper-button-prev {
    color: white;
}

.swiper-button-next:hover, .swiper-button-prev:hover {
    color: #f1f1f1;
}
`;
const projects = [
    {
        name: "FoodShareHub",
        description: "FoodShareHub is a Community Food Sharing and Surplus Reduction Platform. This platform aims to connect food donors with those in need, helping to reduce food waste and hunger in the community. The project involves a full stack implementation using React, Firebase, Node.js, and MongoDB.",
        features: [
            "Responsive Design",
            "Food Donation",
            "Search and Sort",
        
        ],
        technologies: ["HTML", "CSS", "Tailwindcss","JavaScript", "React", "Node.js",  "Firebase", "MongoDB"],
        liveLink: "https://foodking-website.web.app",
        githubClient: "https://github.com/Oishee90/rq7-foods-website-client11",
        githubServer: "https://github.com/Oishee90/rq7-food-website-server11",
        imageUrl: "https://i.ibb.co/X3yp6Nm/food-Share.png" // Replace with actual image URL
    },
    {
        name: "JourneySEA ",
        description: "This project is a tourism management website focusing on tourist spots in Southeast Asia. Users can explore various tourist destinations, view their details, and interact with the platform by adding, updating, or deleting tourist spots. The website is built using React.js and incorporates several npm packages to enhance functionality and user experience.",
        features: [
           "Add, Update, Delete Tourist Spots",
            "User-specific 'My List'",
            "Facilities Section",
            "Q&A Section",
            "Authentication",
            "Theme Toggle"
      
        ],
        technologies: ["HTML", "CSS", "Tailwindcss","JavaScript", "React", "Node.js",  "Firebase", "MongoDB"],
        liveLink: "https://tourism-management-websi-a73be.web.app",
        githubClient: "https://github.com/Oishee90/tourism-management-website-client10",
        githubServer: "hhttps://github.com/Oishee90/tourism-management-website-server10",
        imageUrl: "https://i.ibb.co/XVW3bj0/journey.png" // Replace with actual image URL
    },
    {
        name: "Sky Vista",
        description: "Sky Vista is a responsive real estate project built using React, offering a unique design and seamless user experience across all devices. The project utilizes environment variables for Firebase configuration keys, ensuring security and flexibility.",
        features: [
            "Responsive Design",
            "Firebase Integration",
            "Dynamic Components",
            "Protected Route",
            "Enhanced User Experience",
        ],
        technologies: ["HTML5", "CSS3", "Tailwind CSS", "React", "Firebase", "Express.js"],
        liveLink: "https://residential-web-project.web.app",
        githubClient: "https://github.com/Oishee90/make-private-repo-public9",
       
        imageUrl: "https://i.ibb.co/GVvcHHd/Screenshot-10.png" // Replace with actual image URL
    }

];

const Project = () => {
    return (
        <div id="projects" className="mt-32 py-12 bg-gray-900 min-h-screen border-b-2 border-t-2  border-green-400 rounded-2xl shadow-lg shadow-slate-400">
          <h1 className=" container mx-auto text-center mt-10 font-Wittgenstein border-purple-700  lg:text-5xl text-white  text-3xl font-bold">
                   My Projects 👩‍💻
                </h1>
                <div className="text-gray-300 border-t-2 border-purple-500 w-[160px] mx-auto pb-2 mb-10 "> </div>
                <style>{swiperStyles}</style>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full md:w-1/2 bg-gray-800 text-white overflow-hidden mx-auto p-6  shadow-lg shadow-slate-400"
  style={{
    border: '2px solid',
    borderImage: 'linear-gradient(to right, #8A2BE2, #FF1493) 1',
    borderRadius: '0.5rem',
  }}>
                        <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover mb-4" />
                        
                            <h2 className="font-bold text-2xl font-Wittgenstein text-green-600">{project.name}</h2>
                            <div className="text-gray-300 border-t-2 border-purple-500 w-[110px]  pb-2 "> </div>
                            <p className="mb-4">{project.description}</p>
                            <h3 className="font-semibold  text-green-500 font-Wittgenstein ">Core Features:</h3>
                            <div className="text-gray-300 border-t-2 border-purple-500 w-[110px]  pb-2 "> </div>
                            <div className="list-disc list-inside mb-4 ml-5">
                                {project.features.map((feature, index) => (
                                    <p className='flex items-center gap-2' key={index}><GrWaypoint className='text-purple-500' />{feature}</p>
                                ))}
                            </div>
                            <h3 className="font-semibold  text-green-500 font-Wittgenstein">Technologies Used:</h3>
                            <div className="text-gray-300 border-t-2 border-purple-500 w-[150px]  pb-2 "> </div>
                            <div className="grid grid-cols-4 gap-3 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <li className='flex items-center gap-2' key={index}><GrTechnology  className='text-purple-500' /> {tech}</li>
                                ))}
                            </div>
                            <div className="mt-4 flex md:flex-row  flex-col gap-2 items-center p-2">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-2xl border-none  ">
                                    Live Project
                                </a>
                                <div className='flex gap-2 items-center'> 
                                <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white  rounded-2xl border-none ">
                                <FaGithub />  GitHub Client
                                </a>
                                {project.githubServer && (
    <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white rounded-2xl border-none">
        <FaGithub /> GitHub Server
    </a>)}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Project;
