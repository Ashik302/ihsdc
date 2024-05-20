import Image from 'next/image';

const testimonials = [
    {
        name: "Asmita_Devkota",
        image: "/Asmita_Devkota.png",
        testimonial: "The academy has implemented happy curriculam concept. I feel so fortunate that i had found this wonderfullearning envronment. I belief the multi dimension skills, knowledge i have gained will support on my further career growth."
    },
    {
        name: "Diwakar_Neupane",
        image: "/Diwakar_Neupane.png",
        testimonial: 
        "After getting visa of Canada, i was searching for a program which can help me in policing my soft skills as well as learning hard skills. After joining this academy the level of my confidence has increased. The way of teaching is different from the teaching we have been familier with."
    },
    {
        name: "Minaksh_Lamsal",
        image: "/abc.jpg",
        testimonial: "How can i become more confident is by for the most common question we asked to ourselves. But now, I got my answer and i have built my confidence level high after coming to this academy."
    },
    {
        name: "Rajeeb_Neupane",
        image: "/Rajeeb_Neupane.png",
        testimonial: "Academy holds good value for learning hospitality skills. Different learning mode use on developing skills and knowledge makes our learning clear."
    },
    {
        name: "Reshma_Rasaili",
        image: "/Reshma_Rasaili.png",
        testimonial: "IHSDC is a perfect place of learning with relaxing atmosphere and friendly environment. I really enjoyed it. I feel much better prepared to deal with uncomfortable issue. I experienced one of the best class I have attend ever."
    },
    {
        name: "Shishir _Chhetri",
        image: "/Shishir _Chhetri.png",
        testimonial: "I join this academy while procesing the visa of Australia. My overall experience has been amazing and theacademy is having amazing objectives with perfect environment for developing self esteemed and skills."
    }
];

const Testimonials = () => {
    return (
        <div className="bg-gray-100 py-12 w-full md:w-[85%] m-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <Image
                        src="/ceo.jpg" // Replace with the actual image path
                        alt="MD and CEO"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Message from the MD and CEO</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to IHSDC! As the MD and CEO, I'm excited to welcome you to our institute. Our mission is simple: to provide top-notch hospitality education that prepares students for success in the industry. With practical training, expert faculty, and a supportive learning environment, we're here to help you achieve your goals. Join us, and let's embark on this journey together!
                    </p>
                    <p className="text-lg font-semibold">Sudip Pokharel </p>
                    <p className="text-md text-gray-700">Managing Director & CEO</p>
                </div>
            </div>
            <br />
            <hr />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-4">What our students say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    width={50}
                                    height={50}
                                    alt={testimonial.name}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.testimonial}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
