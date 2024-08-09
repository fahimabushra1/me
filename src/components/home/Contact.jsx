import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocation, faPhoneSquare,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div id="contact"className="p-8 mt-4 rounded-[50px]">
           <h2 className="font-bold text-4xl text-center mb-12">Contact</h2>
           <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-24 items-center">
            <div className='-mt-72'>
            <h3 className="font-bold text-2xl text-left mb-4">Drop Me a Message</h3>
                <p>If you have a project in mind or a question or just want to say hello, I'd love to hear from you. Drop me a message, and let's start a conversation.</p>
                <div className='flex justify-center items-center gap-4 mt-12'>
                 <div className="flex justify-center items-center gap-2">
                    <div>
                       <FontAwesomeIcon icon={faPhoneSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <p>(+880)-1884545974</p>
                    </div>
                </div>
                 <div className="flex justify-center gap-2">
                    <div>
                       <FontAwesomeIcon icon={faEnvelopeSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <a href="mailto:fahimabushra974@gmail.com"><p>fahimabushra974@gmail.com</p></a>
                    </div>
                </div>
                 <div className="flex justify-center items-center gap-2">
                    <div>
                       <FontAwesomeIcon icon={faMapLocation} className='text-purple-700' />
                    </div>
                    <div>
                    <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-full border-s-4 border-purple-500 rounded-3xl shadow-2xl'>
            {/* <div className="card bg-base-500 w-full max-w-sm shrink-0 shadow-2xl"> */}
      <form className="card-body">
        <div className='grid lg:grid-cols-2 gap-3 my-2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="first name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="last name" className="input input-bordered" required />
        </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-3 my-2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="phone number" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message" className="input input-bordered w-full h-32" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#8854d0] text-white">Send</button>
        </div>
      </form>
    {/* </div> */}
            </div>
            </div> 
        </div>
    );
};

export default Contact;