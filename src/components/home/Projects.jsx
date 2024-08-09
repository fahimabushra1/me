import { Link } from 'react-router-dom';
import project1 from '../../assets/images/project ss.jpg'
import project2 from '../../assets/images/savory-restaurant.jpg'
const Projects = () => {
    return (
        <div id="projects" className='-mt-96'>
          <h2 className="font-bold text-4xl text-center">My Projects</h2>
        <div className='flex justify-evenly items-center pt-24'>
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={project1}
      alt="project1" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        <div className="card w-96 shadow-2xl bg-base-500">
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
        <div className="card bg-base-500 w-96 shadow-2xl">
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