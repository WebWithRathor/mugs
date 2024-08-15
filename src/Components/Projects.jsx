const projects = [
    {
        category: "Web Design",
        imageSrc: "https://s3-alpha-sig.figma.com/img/08a3/15aa/af2fb38ce2fa59072d26b09da15537ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKlFPgdd3SOC8y08OOnU3NPsdF4uwBJQB~KdJGMZCobuHp-dLU-BJ66juDafoSTHn~65UwtGRJiybl5lSvRBx6UKV6ISq6mY8D48baphIaGQAw9I3X788Yw0kuV5~JhnpMhYb-HyoEpOOWkbaJRXQS3fUXzKzkGuq19ovXaK-2uECYOIBl2RFq6KyCGPhYjJ9VVPAAQYu4VfVFCRn9ahmHai1r8lJq6ESj~wq33m05nb3kyp~nu9g0nCm-0lLS8ousgqL~ejYCVG-KEwoOlvGg2aCYBi~17lcvd2JbuN11RSEtgNmTWKYLX9uVS5b3yemPxTyMV6sXMe6RnwyZiUtw__",
    },
    {
        category: "App Design",
        imageSrc: "https://s3-alpha-sig.figma.com/img/99ad/9ecd/c7e4761db8fcbee96701dabc95083a4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw7ieWqQZSAPwHshvhzpMCKwRcwc99wYUq6HAHak-gmlSFYopBtihqFUpFAhU5SIedCd4dY~blVQPYTJBt-3uF8wHYZYuteqkMNwTP6WdqJmtguNaApzAcnQnWD~Il0iKk1CwNbrKCXI1ofSv7hVuks5SkOu6kuSgCxtJ4xA~WVko9McwSPOBao4sL9NOXOkvyt6aNjGacgxRaH5pI8KdG4TI5JFMXf1G0PMvy52dLcvR1MZJEKJTIQS4XwJ0SJ5AIWHBzW41QzbseuyUmvcnM6x4u8olJKVp6NPi9mELeNm8frmbSA7g0TZKBoM9BEyfUl3SL5r0Vfa~QRXqrpsZg__",
    },
    {
        category: "Graphic Design",
        imageSrc: "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
    },
];

const categories = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

const Projects = () => {
    return (
        <div className="py-16 px-8 md:px-44 dark:bg-black dark:text-white text-black bg-white">
            <div className="text-center">
                <h2 className="text-4xl font-bold ">My Projects</h2>
                <p className="mt-4 dark:text-white text-gray-600 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
                </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 items-center">
                {categories.map((category, index) => (
                    <h3
                        key={index}
                        className={`px-4 py-2 rounded-full border 
                            dark:bg-black bg-white dark:text-white text-black dark:border-white border-gray-300"
                            hover:bg-orange-500 dark:hover:text-white focus:outline-none`}
                    >
                        {category}
                    </h3>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:flex-nowrap flex-wrap gap-10">
                {projects.map((project, index) => (
                    <div key={index} className=" relative w-full md:w-1/3 rounded-lg">
                        <div
                            
                            className="bg-gray-100 p-8 relative h-[60vh] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img

                                src={project.imageSrc}
                                alt={project.category}
                                style={{ objectPosition: '0px -400px' }}
                                className="rounded-lg w-[60%] absolute right-6 top-5 z-0"
                            />
                            <img

                                src={project.imageSrc}
                                alt={project.category}
                                className="rounded-lg w-2/3 object-top relative z-2"
                            />
                        </div>
                        <h1 className="mt-8 font-medium text-orange-600" >{project.category}</h1>
                        <h1 className="font-semibold text-2xl mt-1" >{project.category}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
