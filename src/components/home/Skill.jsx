import html from '../../assets/images/html5-logo-1.png'
import css from '../../assets/images/css-3-logo.png'
import tailwind from '../../assets/images/Tailwind.png'
import bootstrap from '../../assets/images/bootstrap-logo.png'
import js from '../../assets/images/js-logo.jpg'
import react from '../../assets/images/react-logo-png.jpg'
import mongodb from '../../assets/images/mongodb.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skill = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
    return (
        <div id="skill">
            <h2 className="font-bold text-4xl text-center py-8">Skills</h2>
            <div className="flex justify-evenly items-center gap-4 p-16 mb-96" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={html} alt="html logo" className='w-12 h-12'/>
          <p>HTML</p>
          </div>
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={css} alt="css logo" className='w-12 h-12'/>
          <p>CSS</p>
          </div>
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={js} alt="js logo" className='w-12 h-12'/>
          <p>Javascript</p>
          </div>
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={tailwind} alt="tailwind logo" className='w-12 h-12'/>
          <p>Tailwind</p>
          </div>
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={bootstrap} alt="bootstrap logo" className='w-12 h-12'/>
          <p>Bootstrap</p>
          </div>
          <div className='flex justify-center items-center rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={react} alt="react logo" className='w-12 h-12'/>
          <p>React</p>
          </div>
          <div className='flex justify-center items-center  rounded-3xl shadow-2xl py-4 px-8 gap-2 font-bold'>
          <img src={mongodb} alt="mongodb logo" className='w-12 h-12'/>
          <p>MongoDB</p>
          </div>
            </div>
            </div>
    );
};

export default Skill;