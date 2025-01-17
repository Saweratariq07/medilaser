'use client';
import Link from 'next/link';  

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

                <div className="mt-6">
                  <button className="bg-yellow-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
                    Get Started <span>&#9654;</span>
                  </button>
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
