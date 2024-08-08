import myPic from "../../assets/images/myPic-front.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Banner = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
    return (
        <div className="h-screen">
            <div id="home" className="lg:flex justify-center justify-items-center sm:flex-none">
                <div  className="lg:pt-48 sm:pt-8 lg:mx-0 sm:mx-auto lg:pr-24 text-left w-1/2"  data-aos="fade-right">
                   <h2 className="font-bold text-2xl">I am FAHIMA</h2>
                   <h1 className="font-bold text-[#8854d0] text-7xl">Web Developer</h1>
                   <p className="pt-4">I break down complex user experinece problems to create integrity focussed solutions that connect billions of people</p>
                   <div>
                   <button className="mt-8 mb-2"><a target="_blank" download href="/resume of Fahima.pdf" className="bg-[#8854d0] rounded-lg p-4 text-white mt-4 shadow-2xl">Download Resume</a></button>
                 <div className="flex justify-start gap-6 mt-4 pl-2">
                 <Link to={'https://www.linkedin.com/in/fahima-bushra-a6392a25a/'}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                   <Link to={'https://github.com/fahimabushra1'}><FontAwesomeIcon icon={faGithub} /></Link>
                   <Link to={'https://www.facebook.com/share/XTiazKJLQSGjaBNY/?mibextid=qi2Omg'}><FontAwesomeIcon icon={faFacebook} /></Link>
                   {/* <Link to={}><FontAwesomeIcon icon={faTwitter} /></Link> */}
                   <Link to={'https://www.instagram.com/bushra_fahima?utm_source=qr&igsh=ZWV0d3B0ZWFxN2F1'}><FontAwesomeIcon icon={faInstagram} /></Link>
                 </div>
                   </div>
                </div>  
                <div className="lg:pt-20 sm:pt-8">
                <div className="relative overflow-hidden w-96 h-96 bg-gradient-to-r from-violet-500 to-fuchsia-700 rounded-full before:content-[''] before:absolute before:-inset-y-2.5 before:inset-x-36 before:w-28 motion-reduce:before:animate-spin hover:before:w-full hover:before:inset-0 hover:before:animate-none before:bg-gradient-to-r from-violet-500 to-fuchsia-500  before:animate-spin
                 after:content-[''] after:absolute after:inset-1.5 after:bg-[#A3CB38] after:rounded-full">
                  <div className="absolute overflow-hidden inset-7 border-4 border-solid border-[#1B1464] rounded-full z-10"><img className="absolute top-0 w-full h-full object-scale-down" src={myPic} alt="myPic" />
                  </div>
                </div>
                </div>
                </div>
                
            </div>
    );
};

export default Banner;