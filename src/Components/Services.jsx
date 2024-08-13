import { FaDesktop, FaMobileAlt, FaPalette, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    title: "UI/UX",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: <FaPencilRuler className="text-4xl text-orange-500" />
  },
  {
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: <FaDesktop className="text-4xl text-orange-500" />
  },
  {
    title: "App Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: <FaMobileAlt className="text-4xl text-orange-500" />
  },
  {
    title: "Graphic Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: <FaPalette className="text-4xl text-orange-500" />
  },
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-black">Services</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg py-8 px-5 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="my-6 scale-125 ml-7">
              {service.icon}
            </div>
            <h3 className="text-2xl mt-8 font-semibold text-black mb-2">{service.title}</h3>
            <p className="">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
