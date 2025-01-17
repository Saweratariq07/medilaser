'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if all the required fields are filled
    const formData = new FormData(form.current);
    const allFieldsFilled = Array.from(formData.values()).every(value => value !== '');

    if (!allFieldsFilled) {
      setFormError('Please fill in all the fields');
      return;
    }

    // If everything is filled, send the email
    emailjs
      .sendForm('service_111mf4e', 'template_su63etf', form.current, {
        publicKey: 'FOIoUq-OxcWoJnH6O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(''); // Clear any errors if the submission is successful
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center pt-28 py-10">
        <div className="relative w-full max-w-2xl d] p-12 rounded-lg border-[#000000]">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full p-4 border-2 border-[#000000] text-[#000000] bg-transparent placeholder-[#585353] focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E Mail"
                  className="w-full p-4 border-2 border-[#000000] bg-transparent text-[#000000] placeholder-[#524e4a] focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-4 border-2 border-[#000000] text-[#000000] bg-transparent placeholder-[#585552] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <select
                name="service"
                className="w-full p-4 border-2 border-[#000000] bg-transparent text-[#000000] focus:outline-none"
                required
              >
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                name="date"
                className="w-full p-4 border-2 border-[#000000] bg-transparent text-[#000000] placeholder-[#474644] focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Additional Note"
                className="w-full h-32 p-4 border-2 border-[#000000] text-[#000000] bg-transparent placeholder-[#504d4a] focus:outline-none"
                required
              />
            </div>

            <div className="flex items-start text-[#000000] justify-between">
              <input
                type="checkbox"
                name="acceptedTerms"
                className="mr-2 bg-[#000000]"
                required
              />
              <p className="text-sm text-start">
                I agree to the Terms and Conditions of this laser clinic and acknowledge that I have read and understood them
              </p>
            </div>

            {/* Show error message if form is incomplete */}
            {formError && (
              <p className="text-red-500 text-center">{formError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#D39937] text-[#ffffff] font-semibold py-3 transition duration-200"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
