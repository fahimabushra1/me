import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocation, faPhoneSquare,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div id="contact"className="p-8 mt-4">
           <h2 className="font-bold text-4xl text-center mb-12">Contact</h2>
           <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-24 items-center">
            <div className='mb-4'>
            <h3 className="font-bold text-2xl lg:text-left sm:text-justify mb-4">Drop Me a Message</h3>
                <p>If you have a project in mind or a question or just want to say hello, I'd love to hear from you. Drop me a message, and let's start a conversation.</p>
                <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 items-center gap-4 mt-12'>
                 <div className="flex lg:justify-center sm:justify-start items-center gap-2 mr-2">
                    <div>
                       <FontAwesomeIcon icon={faPhoneSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <p>(+880)-1884545974</p>
                    </div>
                </div>
                 <div className="flex lg:justify-center sm:justify-start gap-2">
                    <div>
                       <FontAwesomeIcon icon={faEnvelopeSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <a href="mailto:fahimabushra974@gmail.com"><p>fahimabushra974@gmail.com</p></a>
                    </div>
                </div>
                 <div className="flex lg:justify-center sm:justify-start items-center gap-2">
                    <div>
                       <FontAwesomeIcon icon={faMapLocation} className='text-purple-700' />
                    </div>
                    <div>
                    <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className='w-1/2 border-8 py-8 my-4 rounded-3xl'> */}
            <div className="card bg-[#a3cb38] w-full max-w-sm shrink-0">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered bg-lime-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered bg-lime-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message" className="input input-bordered w-full bg-lime-200 h-32" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn badge badge-outline badge-primary w-full text-white">Send</button>
        </div>
      </form>
    </div>
            </div>
            </div> 
        // </div>
    );
};

export default Contact;