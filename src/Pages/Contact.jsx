import React from 'react';

function Contact() {
  const contactdetails = [
    { label: 'Contact No.', value: '8544755798' },
    { label: 'E-mail:', value: '94187nishant@gmail.com', type: 'email' },
    { label: 'GitHub:', value: 'https://github.com/Nishantrana1', type: 'link' },
    { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/nishant-6362652a4/', type: 'link' }
  ];

  return (
    <div id="Contact" className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-4xl py-20">
        <div className="text-3xl font-bold border-b-2 pb-4 mb-8">CONTACT ME</div>

        <div className="mb-10">
          <p className="text-xl mb-4 text-gray-300">
            Have a project in mind or just want to say hello? Feel free to reach out — I'm always open to new opportunities, collaborations, or tech talk!
          </p>
          {contactdetails.map(({ label, value, type }, index) => (
            <p key={index} className="text-lg mb-2">
              <span className="font-bold text-white">{label}:</span>{' '}
              {type === 'link' ? (
                <a href={value} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
                  {value}
                </a>
              ) : type === 'email' ? (
                <a href={`mailto:${value}`} className="underline text-blue-400">
                  {value}
                </a>
              ) : (
                value
              )}
            </p>
          ))}
        </div>

        <div className="border-t-2 my-6 text-center text-xl text-gray-400">OR</div>

        <div className="flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold underline">FORM</h2>

          <input
            type="text"
            className="p-3 border border-gray-600 bg-black text-white rounded"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            className="p-3 border border-gray-600 bg-black text-white rounded"
            placeholder="Enter Your Email"
          />
          <textarea
            className="p-3 border border-gray-600 bg-black text-white rounded h-28 resize-none"
            placeholder="Enter Your Message"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="self-center px-6 py-2 border border-blue-400 rounded text-blue-400 font-bold hover:bg-blue-400 hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
