// @flow strict
import { personalData } from 'utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      {/* CONTACT label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* LEFT - Contact Form */}
        <ContactForm />

        {/* RIGHT - GIF + Contact Info */}
        <div className="flex flex-col items-center lg:items-start w-full h-full">
          {/* GIF Section */}
          <div className="w-[75%] ml-[-10px] mt-12" style={{ height: "40%" }}>
            <img
              src={personalData.code}
              alt="Fun"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* Spacer to push contact info to bottom */}
          <div className="flex-grow" />

          {/* Contact Info */}
          <div className="w-[75%] mb-4 flex flex-col gap-4 text-[0.7rem] md:text-xs lg:text-sm">
            <p className="flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={22}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={22}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={22}
              />
              <span>{personalData.address}</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-3">
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-[#8b98a5] p-1.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={28}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-1.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={28}
                />
              </Link>
              <Link target="_blank" href={personalData.stackOverflow}>
                <FaStackOverflow
                  className="bg-[#8b98a5] p-1.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={28}
                />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactSection;
