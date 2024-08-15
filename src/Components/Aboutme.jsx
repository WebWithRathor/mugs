import { FaCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="dark:bg-black bg-white  p-8 md:px-44 flex lg:flex-row flex-col md:gap-4 gap-10 ">
      <div className="relative w-full md:w-1/2 flex ">
        <div className="w-96 aspect-square rounded-full border-4 border-orange-500 mx-auto lg:mx-0 relative">
          <img
            className='w-full rounded-b-full absolute bottom-0'
            src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__"
            alt="Muhammad Umair"
          />
          <div className="bg-orange-500 w-full h-20 opacity-45 mt-10"></div>

        </div>
      </div>

      <div className="flex md:w-1/2 w-full md:px-10 flex-col justify-center">
        <h2 className="text-5xl font-bold dark:text-white text-black">About Me</h2>
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
    <div className="my-3">
      <h1 className=" font-semibold">{title}</h1>
      <div className="relative flex-1 mt-2.5 h-2">
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
