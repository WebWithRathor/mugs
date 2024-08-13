import { FaCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
      <div className="bg-white rounded-lg p-8 flex gap-4 ">
        <div className="relative w-1/2">
          <img
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 h-16 bg-orange-500 opacity-70"></div>
        </div>

        <div className="flex w-1/2 px-10 flex-col justify-center">
          <h2 className="text-5xl font-bold text-black">About Me</h2>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>

          <div className="mt-2">
            <SkillBar title="UX" percentage={80} />
            <SkillBar title="Website Design" percentage={90} />
            <SkillBar title="App Design" percentage={70} />
            <SkillBar title="Graphic Design" percentage={85} />
          </div>
        </div>

      </div>
  );
};

const SkillBar = ({ title, percentage }) => {
  return (
    <div className=" my-3">
      <h1 className="text-black font-semibold">{title}</h1>
      <div className="relative flex-1 mt-2.5 h-2 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-2 bg-orange-500 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
        <div style={{ left: `${percentage}%` }} className={`absolute w-5 aspect-square top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full border-2 bg-zinc-200 border-orange-500`} ></div>
      </div>
    </div>
  );
};

export default AboutMe;
