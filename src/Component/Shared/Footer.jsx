import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="container mx-auto mt-32">
            <footer className="footer bg-[#030637] bg-opacity-50 text-neutral-content p-10">
  <div className="text-white  font-bold text-4xl font-Wittgenstein ">
  
     
    <p>
     Oishee<span className="text-pink-800 gap-0">Khan</span>
      <br />
      <span className="text-xl"> Frontend Web Developer</span>
     
    </p>
  </div>
  <div>
    <h6 className="  text-white  font-bold text-xl font-Wittgenstein">My Social Links</h6>
    <div className="grid grid-flow-col gap-4 mt-3">
    <a href='https://x.com/khan_oishee'><FaXTwitter className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/tasmim_oiishee/'><FaInstagram  className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.facebook.com/profile.php?id=100057513260363'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://github.com/Oishee90'><FaGithub className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.linkedin.com/in/oishee-khan-509ba12b0'><FaLinkedin className="fill-current w-[24px] h-[24px] text-white" /></a>
      
   
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;