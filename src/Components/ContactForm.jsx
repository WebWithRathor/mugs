import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 py-20 dark:bg-black bg-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Lets Design Together</h1>
      <p className="text-center w-full md:w-1/2 mt-2 mb-6">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
        netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex gap-3 w-full md:flex-row flex-col md:w-1/2 items-center justify-center mt-5 md:mt-10">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="p-3 border md:w-1/2 border-gray-300 rounded focus:outline-none"
        />
        <h3 className="bg-orange-500 cursor-pointer text-white p-3 rounded hover:bg-orange-600 focus:outline-none">
          Contact Me
        </h3>
      </div>
    </div>
  );
};

export default ContactForm;
