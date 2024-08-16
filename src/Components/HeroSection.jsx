import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-10 lg:flex-row items-center justify-center lg:justify-between py-20 px-8 md:px-44 dark:bg-black bg-white">
      <div className="text-center lg:text-left max-w-lg">
        <p className="text-lg font-bold mb-1 md:mb-2">Hi I am</p>
        <h1 className="text-xl font-bold text-orange-500">Muhammad Umair</h1>
        <h2 className=" text-4xl md:text-6xl font-black mt-1 md:mt-2">UI & UX <br /> <span className='inline-block ml-32'>Designer</span></h2>
        <p className="tracking-wide mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
          convallis pretium. Turpis tempus pharetra.
        </p>
        <h3 className="mt-6 px-10 py-2 w-max bg-orange-500 text-white rounded-md  hover:bg-orange-600 transition">
          Hire Me
        </h3>
      </div>

      <div className="relative mt-10 lg:mt-0">
        <div className="md:w-96 w-[80%]  aspect-square rounded-full border-4 border-orange-500 mx-auto lg:mx-0 relative">
          <img
          className='w-full rounded-b-full absolute bottom-0'
            src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__"
            alt="Muhammad Umair"
          />
          <div className="bg-orange-500 w-full h-20 opacity-45"></div>
        </div>
        <div className="flex w-96 justify-center mt-5 space-x-4 dark:text-white text-gray-600">
          <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition">
            <RiFacebookFill size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition">
            <RiTwitterFill size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition">
            <RiInstagramFill size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-500 transition">
            <RiLinkedinFill size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
