

const Education = () => {
    return (
        <div id="education" className="p-8 mt-12">
         <h2 className="font-bold text-4xl text-center mb-6">Education</h2>
         <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 items-center">
            <div className="font-bold w-1/2 border-r-8 border-purple-700 rounded-3xl mr-4 p-4 shadow-2xl ">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> BBA (Marketing)</p>
              <p>2014</p>
            </div>
            <div className="font-bold w-1/2 border-r-8 p-4 border-purple-700 rounded-3xl shadow-2xl">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> MBA (Marketing)</p>
              <p>2015</p>
            </div>
         </div>
</div>
    );
};

export default Education;