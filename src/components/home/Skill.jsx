import html from '../../assets/images/html5-logo-1.png'
import css from '../../assets/images/css-3-logo.png'
import tailwind from '../../assets/images/Tailwind.png'
import bootstrap from '../../assets/images/bootstrap-logo.png'
import js from '../../assets/images/js-logo.jpg'
import react from '../../assets/images/react-logo-png.jpg'
import node from '../../assets/images/node.jpg'
import express from '../../assets/images/express.avif'
import mongodb from '../../assets/images/mongodb.jpg'
import github from '../../assets/images/GitHub-Symbol.png'
import git from '../../assets/images/Git.jpg'
import vscode from '../../assets/images/vscode.jpg'
import figma from '../../assets/images/figma-logo.png'
import vercel from '../../assets/images/vercel.png'
import vite from '../../assets/images/vite.png'
import firebase from '../../assets/images/firebase.jpg'

const Skill = () => {
    return (
        <div id="skill">
            <h2 className="font-bold text-4xl text-center py-8">Skills</h2>
            <div className="grid grid-cols-4 gap-4 p-16 mx-52 mb-96 items-center content-center">
             <img src={html} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={css} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={js} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={tailwind} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={bootstrap} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={react} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={firebase} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={node} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={express} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={mongodb} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={github} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={git} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={vite} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={figma} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={vercel} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
             <img src={vscode} alt="" className='w-24 h-24 border-4 border-white rounded-3xl shadow-2xl'/>
            </div>
            </div>
    );
};

export default Skill;