'use client';
import Link from 'next/link';  
import { FaPlayCircle } from "react-icons/fa";
function Header() {
  return (
    <div className="container body p-5">
      <div className="flex items-center justify-center mt-[10px] mb-[8px]">
        <div className="text-center">
          <div className="py-12 px-6 md:px-20 lg:px-40">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-sm font-light uppercase tracking-wide text-gray-600">
                  Welcome to Medilaser
                </h3>
                <h1 className="text-4xl md:text-5xl font-pattaya font-bold leading-snug text-gray-900 mt-4">
  Revolutionizing Care <br />
  with Advanced Laser Technology
</h1>

                <div className="mt-6 gap-4 flex">
                  <button className=" text-white px-6 py-2 rounded-full flex items-center gap-2 bg-yellow-600 transition">
                    Get Started 
                  </button>
                  <div className=' mt-2 '>
                  <FaPlayCircle className='text-xl'/>
                  </div>
                </div>
              </div>

              {/* Responsive Image Section */}
              <div className="relative">
                <div className="rounded-lg">
                  <img
                    src="wom.png"
                    alt="Woman relaxing"
                    className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    </div>
  );
}

export default Header;
