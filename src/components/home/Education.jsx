

const Education = () => {
    return (
        <div id="education" className="lg:p-8 sm:p-0 mt-12 w-full">
         <h2 className="font-bold text-4xl text-center mb-6">Education</h2>
         <div className="lg:grid lg:grid-cols-1 sm:grid sm:grid-cols-1 gap-8 items-center w-1/2 mx-auto">
            <div className="font-bold lg:p-12 sm:p-8 shadow-2xl shadow-slate-800/50 mb-4 lg:text-justify sm:text-center"  data-aos="fade-right">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> BBA (Marketing)</p>
              <p>2014</p>
            </div>
            <div className="font-bold  lg:p-12 sm:p-4 shadow-2xl bg-[#8854d0] shadow-slate-800/50"  data-aos="fade-left">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> MBA (Marketing)</p>
              <p>2015</p>
            </div>
         </div>
</div>
    );
};

export default Education;