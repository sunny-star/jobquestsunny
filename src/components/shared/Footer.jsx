
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <>
      <div className="mt-2 w-full bg-gray-500 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start md:justify-between text-sm py-4 space-y-6 md:space-y-0">
        <h2 className="text-xl text-cyan-50 font-bold text-center md:text-left">
          JOB QUEST
          <p className="text-sm mt-1">@ All rights reserved.</p>
        </h2>

        <div className="flex flex-col md:px-16 space-y-4 text-white">
          <p className="flex items-center">
            <a href="https://www.instagram.com/sunny_chiluka07?igsh=eGVjZDA2enF1bXo4">
              <FaInstagram size={20} />
            </a>
            <span className="ml-2">Instagram</span>
          </p>
          <p className="flex items-center">
            <a href="mailto:sunnysunny968667@gmail.com">
              <HiOutlineMail size={20} />
            </a>
            <span className="ml-2">Gmail</span>
          </p>
          <p className="flex items-center">
            <a href="https://www.facebook.com/profile.php?id=100025448063447&mibextid=JRoKGi">
              <FaFacebook size={20} />
            </a>
            <span className="ml-2">Facebook</span>
          </p>
        </div>

        <div className="flex flex-col md:px-16 space-y-4 text-white">
          <p className="flex items-center">
            <a href="https://www.linkedin.com/in/sunnychiluka/">
              <FaLinkedin size={20} />
            </a>
            <span className="ml-2">LinkedIn</span>
          </p>
          <p className="flex items-center">
            <a href="https://github.com/sunny-star">
              <FaGithub size={20} />
            </a>
            <span className="ml-2">Github</span>
          </p>
          <p className="flex items-center">
            <a href="https://wa.me/9676002081">
              <FaWhatsapp size={20} />
            </a>
            <span className="ml-2">Whatsapp</span>
          </p>
        </div>
      </div>

      <p className="py-3 text-center text-white bg-gray-500 text-sm">
        Built with 💖 by
        <button className="text-lg font-bold ml-1">SUNNY</button>
      </p>
    </>
  );
};

export default Footer;
