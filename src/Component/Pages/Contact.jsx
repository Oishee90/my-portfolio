import { useState } from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        document.getElementById('contact-form').submit();
        
    };

    return (
        <div id="contact" className="mt-32 py-12 bg-gray-900 min-h-screen border-b-2 border-t-2  border-purple-400 rounded-2xl shadow-lg shadow-slate-400">
            <div className="container mx-auto px-4">
            <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700  lg:text-5xl  text-3xl font-bold text-white mb-2  text-center shadow-slate-400">
            🚀 Get in Touch!
                </h1>
                
                <div className="text-gray-300 border-t-2 border-green-500 w-[147px] mx-auto pb-2  mb-5 "> </div>
                <p className='text-white font-raleway mx-auto text-xl  text-center mb-10'>Have questions, suggestions, or want to collaborate on a project? Feel free to drop me a message! I'm excited to hear from you and discuss how we can work together to bring ideas to life.</p>
                <div className="text-center mb-8">
                    <p className="text-xl text-white font-bold font-raleway">Email: <a href="mailto:oisheekhan90@gmail.com" className="text-purple-600">oisheekhan90@gmail.com</a></p>
                    <div className="flex justify-center items-center gap-4 mt-3">
    <a href='https://x.com/khan_oishee'><FaXTwitter className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/tasmim_oiishee/'><FaInstagram  className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.facebook.com/profile.php?id=100057513260363'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://github.com/Oishee90'><FaGithub className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.linkedin.com/in/oishee-khan/'><FaLinkedin className="fill-current w-[24px] h-[24px] text-white" /></a>
      
   
    </div>
                </div>
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form id="contact-form" action="https://formsubmit.co/oisheekhan90@gmail.com" method="POST" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
