import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Homes = () => {
    return (
        <section className="bg-white text-gray-800 w-full md:w-[85%] m-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4 md:p-0">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">
                            International Hospitality Skills Development Center Private Limited (IHSDC)
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-600">
                            (IHSDC – Academy of Professional Educations)
                        </h2>
                        <br />

                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                        <Image
                            src="/open.jpg" // Path to your image file
                            alt="IHSDC Profile"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>


                <br />
                <hr />
                <div className="mt-8 text-center">
                    <h3 className="text-3xl font-semibold mb-4">About Us</h3>
                    <div className="w-full flex flex-col md:flex-row justify-around items-center">
                        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                            <p className="text-lg leading-relaxed mb-8">
                                The Hospitality Skills Development Center Private Limited (IHSDC) was established in 2071 BS with the purpose of producing skilled hospitality professionals. We focus on training entrepreneurs, management, and workforce, especially for the hospitality industry. Since then, IHSDC has conducted programs in over 100 organizations and associations.
                            </p>
                        </div>

                        <Image
                            src="/about.jpg"
                            alt="About Us Image"
                            width={300}
                            height={300}
                        />

                    </div>
                </div>
                <br />
                <br />
                <hr />

                <div className="mt-8 text-center">
                    <h3 className="text-3xl font-semibold mb-4">IHSDC's Ethos and Objectives</h3>
                    <div className=" flex flex-col justify-between md:flex-row">
                        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                            <div className="text-left">
                                <h4 className="text-2xl font-semibold mb-2">Vision</h4>
                                <p className="text-lg leading-relaxed">Developing quality human resources and supporting quality tourism.</p>
                            </div>
                            <div className="text-left">
                                <h4 className="text-2xl font-semibold mb-2">Mission</h4>
                                <p className="text-lg leading-relaxed">Maintain trust of service users.</p>
                            </div>
                            <div className="text-left">
                                <h4 className="text-2xl font-semibold mb-2">Core Value</h4>
                                <p className="text-lg leading-relaxed">Care for.</p>
                            </div>
                            <div className="text-left">
                                <h4 className="text-2xl font-semibold mb-2">Goal</h4>
                                <p className="text-lg leading-relaxed">Being the first choice of service users.</p>
                            </div>
                        </div>

                        <Image
                            src="/vision.png"
                            width={300}
                            height={300}
                            alt="Vision Image"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <br />
                <br />
                <hr />

                <div className="mt-8">
                    <h3 className="text-3xl font-semibold mb-4">IHSDC's Unique Support Programs</h3>
                    <p className="text-lg leading-relaxed mb-8">
                        IHSDC's unique support programs for developing professionals are based on the Happy Curriculum Concept:
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
                        <li>Basic hotel management practical training program (as per your need or on package).</li>
                        <li>Soft skills development program.</li>
                        <li>Management level training program.</li>
                        <li>Management trainee program.</li>
                        <li>Personal counseling and coaching program.</li>
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default Homes;
