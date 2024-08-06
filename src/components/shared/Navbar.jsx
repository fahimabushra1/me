import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="#about">About</Link></li>
                  <li><Link to="#skill">Skill</Link></li>
                  <li><Link to="#projects">Projects</Link></li>
                  <li><Link to="#education">Education</Link></li>
                  <li><Link to="#contact">Contact</Link></li>
                    <div className="navbar-end">
                       <Link target={"_blank"}  download to={"/resume of Fahima.pdf"} className="btn bg-[#8854d0] text-white">Resume</Link>
                    </div>
            </ul>
          </div>
          <div><Link className="btn btn-ghost font-bold text-xl">bushra.arifeen@gmail.com</Link></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
          <li><Link to="/">Home</Link></li>
                  <li><Link to="#about">About</Link></li>
                  <li><Link to="#skill">Skill</Link></li>
                  <li><Link to="#projects">Projects</Link></li>
                  <li><Link to="#education">Education</Link></li>
                  <li><Link to="#contact">Contact</Link></li>
                  </ul>
                  </div>
                    <div className="navbar-end">
                    <Link target={"_blank"}  download to={"/resume of Fahima.pdf"} className="btn bg-[#8854d0] text-white">Resume</Link>
                    </div>
      </div>
    );
};

export default Navbar;