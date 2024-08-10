import { Link } from 'react-router-dom';
import project1 from '../../assets/images/project ss.jpg'
import project2 from '../../assets/images/savory-restaurant.jpg'
const Projects = () => {
    return (
        <div id="projects">
          <h2 className="font-bold text-4xl text-center">My Projects</h2>
        <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 gap-4 pt-24 lg:pl-12 sm:pl-8'>
        <div className="card lg:w-96 sm:w-80 shadow-2xl lg:bg-[#a3cb38] sm:bg-lime-200 mb-6 lg:mx-0 sm:mx-2" data-aos="fade-up">
  <figure>
    <img
      src={project1} className='w-96 h-60 p-4 rounded-3xl'
      alt="project1" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Gloria Jeans Coffee
    </h2>
    <p>
      <li>Login, Registration & Google Sign-Up</li>
      <li>Search Option, Filter By Categories, and Sorting system</li>
      <li>Developed a REST API for CRUD operations and stored all data in MongoDB.</li>
      </p>
    <div className="card-actions justify-center mt-4">
      <div className="badge badge-outline badge-primary"><Link to={'https://gloria-jeans-coffee-38a6a.web.app/'}>Live Site</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-coffee'}>Frontend</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-server'}>Backend</Link></div>
    </div>
  </div>
</div>
        <div className="card lg:w-96 sm:w-80 shadow-2xl lg:bg-[#a3cb38] sm:bg-lime-200 mb-6 lg:mx-0 sm:mx-2" data-aos="fade-left">
  <figure>
    <img
      src={project1} className='w-96 h-60 p-4 rounded-3xl'
      alt="project1" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Gloria Jeans Coffee
    </h2>
    <p>
      <li>Login, Registration & Google Sign-Up</li>
      <li>Search Option, Filter By Categories, and Sorting system</li>
      <li>Developed a REST API for CRUD operations and stored all data in MongoDB.</li>
      </p>
    <div className="card-actions justify-center mt-4">
      <div className="badge badge-outline badge-primary"><Link to={'https://gloria-jeans-coffee-38a6a.web.app/'}>Live Site</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-coffee'}>Frontend</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-server'}>Backend</Link></div>
    </div>
  </div>
</div>
        <div className="card lg:w-96 sm:w-80 shadow-2xl lg:bg-[#a3cb38] sm:bg-lime-200 mb-6 lg:mx-0 sm:mx-2" data-aos="fade-up">
  <figure>
    <img
      src={project2} className='w-96 h-60 p-4 rounded-3xl'
      alt="project2" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Savory Restaurant
    </h2>
    <p>
      <li>Login, Registration & Google Sign-Up</li>
      <li>Search Option, Filter By Categories, and Sorting system</li>
      <li>Developed a REST API for CRUD operations and stored all data in MongoDB.</li>
      </p>
      <div className="card-actions justify-center mt-4">
      <div className="badge badge-outline badge-primary"><Link to={'https://gloria-jeans-coffee-38a6a.web.app/'}>Live Site</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-coffee'}>Frontend</Link></div>
      <div className="badge badge-outline badge-primary"><Link to={'https://github.com/fahimabushra1/gloria-jeans-server'}>Backend</Link></div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Projects;