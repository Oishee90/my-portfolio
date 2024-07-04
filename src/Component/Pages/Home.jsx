import Banner from "./Banner";
import Skill from "./Skill";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";


const Home = () => {
    return (
        <div className=" container mx-auto  bg-gray-900 bg-opacity-50 ">
     <Banner></Banner>
     <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
            
        
        </div>
    );
};

export default Home;