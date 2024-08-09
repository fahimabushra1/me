import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import Education from "../components/home/Education";
import Projects from "../components/home/Projects";
import Skill from "../components/home/Skill";


const Home = () => {
    return (
        <div className="lg:*:max-w-6xl sm:*:max-w-3xl">
          <Banner/> 
          <About/>
          <Skill/>
          <Projects/>
          <Education/>
          <Contact/>
        </div>
    );
};

export default Home;