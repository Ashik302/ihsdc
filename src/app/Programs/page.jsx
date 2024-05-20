import React from 'react';

const OurPrograms = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md m-auto w-full md:w-[85%]">
            <h2 className="text-3xl font-bold text-center mb-6">Our Programs</h2>
            <p className="text-lg mb-6">
                To add value on confident level for your overseas startup and further career growth anywhere, IHSDC – Academy of professional educations has started Employability skills and Life skills Development program on the title of “Basic hotel management skills and Generic skills”.
            </p>

            <div className="relative bg-cover bg-center p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/new.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 text-white">About Program</h3>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>
                            We arm young-minded learners with professional knowledge, experienced skills, and effective thoughts on 5 departments of the hotel (Barista, Waiter, Cooking, Front office, and Housekeeping/cleaning) which provide feelings of work confidence on overseas startup.
                        </li>
                        <li>
                            Empowering learners with useful life skills tools and techniques with appropriate learning environments which directly support further career growth of learners.
                        </li>
                    </ul>
                </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md mt-6 " style={{
                backgroundImage: "url('/gr.jpg')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"
            }}>
                <h3 className="text-2xl font-semibold mb-4">Expected Outcomes</h3>
                <ul className="list-disc font-semibold pl-6 space-y-2">
                    <li>
                        Learners can become familiar with 5 departments of the hotel, advanced knowledge, and techniques which they can implement to develop their capabilities productively.
                    </li>
                    <li>
                        Learners will be introduced to what the work is about, how to do it, what kind of role the job plays in the whole business, which helps them to understand the work better and also love what they do by understanding the work.
                    </li>
                    <li>
                        Learners stimulate learning through behavior which is best for skill development and changing attitudes.
                    </li>
                    <li>
                        The knowledge and skills presented during learning sessions are directly related to job competency and expanding opportunities.
                    </li>
                    <li>
                        Learning process makes individuals more flexible, adaptable, innovative, eager to learn, able to communicate effectively, know about time management, decision making, personality development, and other soft skills and life skills.
                    </li>
                    <li>
                        It is the process of individual guidance, instructions, and motivation to improve overall knowledge, skills, and performance which is directly oriented on the basis of requirements of learners for their sustainable career growth.
                    </li>
                    <li>
                        It can motivate yourself to value yourself enough to invest in your growth. You will be able to create success strategies that work for you.
                    </li>
                    <li>
                        Learners can acquire adequate “hands-on” models, knowledge, skills, and talent which emphasize experiential learning to provide them feelings of confidence.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OurPrograms;
