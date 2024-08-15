import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function SwipperJs() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<h1 class='${className}'></h1>`;
        },
    };

    const testimonials = [
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'Jane Smith',
            position: 'Designer',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'Jane Smith',
            position: 'Designer',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        // Add more testimonials as needed
    ];

    return (
        <section className=" py-12 pb-20 w-full overflow-hidden dark:bg-black bg-white">
            <div className="container text-center">
                <h2 className="md:text-6xl text-4xl font-bold mb-7">Testimonials</h2>
                <p className="text-lg mb-12 w-full px-8 md:w-1/2 mx-auto">Lorem ipsum dolor, sit nsectetur adipisicing elit. Numquam, blanditiis libero! Et animi quam, blanditiis libero! Et animi.</p>
            </div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={'auto'}
                centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full gap-5 p-8 rounded-xl px-4 md:px-24 text-black bg-gray-200 flex md:flex-row flex-col w-full items-center">
                            <div className="img rounded-full h-[40%] md:h-full aspect-square">
                                <img src={testimonial.image} className=' h-full w-full rounded-full' alt="" />
                            </div>
                            <div className="text-start">
                                <p className='tracking-wide md:leading-7 md:text-normal text-sm'>{testimonial.feedback}</p>
                                <h1 className='font-bold md:text-xl mt-3'>{testimonial.name}</h1>
                                <h2 className=''>{testimonial.position}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
