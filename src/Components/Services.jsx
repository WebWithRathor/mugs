import ui from '../../public/images/ui.png';
import app from '../../public/images/app.png';
import Graphic from '../../public/images/Graphic.png';
import web from '../../public/images/web.png';


const services = [
  {
    title: "UI/UX",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon:ui
  },
  {
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: web
  },
  {
    title: "App Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: app
  },
  {
    title: "Graphic Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: Graphic
  },
];



const Services = () => {
  return (
    <div className="py-16 px-8 md:px-44 dark:bg-black bg-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold dark:text-white text-black">Services</h2>
        <p className="mt-8 dark:text-white  text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 cursor-pointer  rounded-lg py-8 px-5 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="my-6 scale-125 ml-7">
              <img src={service.icon.src} className='h-14 object-cover' alt="" />
            </div>
            <h3 className="text-2xl mt-8 font-semibold text-black mb-2">{service.title}</h3>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
