import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import {faHand} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronUp} from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
    return (
        <div id="about" className="font-bold px-4 lg:pt-0 sm:pt-4 lg:mx-4 sm:mx-2 lg:mt-12 sm:mt-2">
            <div className="lg:text-wrap sm:text-justify">
            <h2 className="font-bold text-4xl text-center lg:mb-4 sm:mb-2">About Me</h2>
        <div data-aos="fade-left">
        <p className="lg:text-left sm:text-center"><FontAwesomeIcon icon={faHand} className='text-orange-700' /> I'm FAHIMA SAMSUNNAHAR BUSHRA, a  Humble, enthusiast,active web developer with technical expertise in web application development.I create responsive and interactive websites.I specialize in React.js, leveraging the power of Tailwind CSS and Material UI to bring design to life.</p>
           <br/>
          <p><FontAwesomeIcon icon={faLaptopCode} className='text-blue-700' /> My focus on ensuring that my code is efficient,maintainable,optimized for performance,often dealing with aspects like accessibility, cross browser compatibility and mobile responsive.</p>
            <br/>
          <p><FontAwesomeIcon icon={faRocket} className='text-red-600' /> I transform design concepts into responsive and interactive web pages or optimizing performance for a smoother user journey.My goal is to deliver high-quality,user-friendly products that meet the needs and expectation of users.</p> 
        </div>
        </div>
        <div className="fixed top-96 z-10 lg:right-4 sm:right-4"><Link to={'#home'} className="btn btn-ghost text-xl"><FontAwesomeIcon icon={faCircleChevronUp} className="text-black"/></Link></div>
        </div>
    );
};

export default About;