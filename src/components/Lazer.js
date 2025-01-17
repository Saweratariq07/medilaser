'use client'
import { useState } from "react";

function Laser() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            {/* Header Section */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gradient-to-r from-[#000000] via-[#000000] font-pattaya to-[#000000] text-white font-bold text-2xl py-2 px-4 "
            >

                How Does Laser Hair Removal Process Work?
                <span className="float-right">{isOpen ? "▲" : "▼"}</span>
            </button>

            {/* Collapsible Content */}
            {isOpen && (
                <div className="flex  bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] p-4 space-x-4 rounded-b-lg">
                    <div className="text-start flex-1 pt-8 text-white">
                    <strong>Preparation:</strong>
                        <p className="mb-8">
                             Shave the area 1-2 days before, avoid sun exposure, and attend a consultation.
                        </p>
                        <strong>Treatment:</strong> 
                        <p className="mb-8">
                           A laser targets hair follicles, using light to damage them and reduce future growth.
                        </p>
                        <strong>Aftercare:</strong> 
                        <p className="mb-8">
                           Apply soothing gel, avoid sun, and follow up with 6-8 sessions for best results.
                        </p>
                        <strong>YouTube Tutorial:</strong>
                        <p>
                            <a href="https://www.medilaser.youtube.com" target="_blank" rel="noopener noreferrer">www.MediLaser.YouTube.com</a>
                        </p>
                    </div>
                    <div className="w-1/3">
                        <img
                            src="/img/laze.png" // Replace with your image URL
                            alt="Laser Hair Removal Process"
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Laser;
