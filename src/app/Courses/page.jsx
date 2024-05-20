import Image from "next/image";

const Courses = () => {
    return (
        <div className="container m-auto py-8 w-full md:w-[85%]">
            <h2 className="text-3xl font-semibold mb-4">Our Courses and Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                    <div className="hoverneeded bg-cover bg-center h-40 md:h-60 md:min-h-40 rounded-lg shadow-md" style={{ backgroundImage: "url('/b.jpeg')", backgroundColor: "rgb(83, 83, 83)" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-start items-start p-4 text-white">
                            <h3 className="text-xl font-semibold mb-2">2 weeks</h3>
                            <p className="mb-1">- Barista</p>
                            <p className="mb-1">- Life/ Generic/ Soft skills training</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="hoverneeded bg-cover bg-center h-40 md:h-60 md:min-h-40 rounded-lg shadow-md" style={{ backgroundImage: "url('/b1.jpeg')", backgroundColor: "rgb(83, 83, 83)" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-start items-start p-4 text-white">
                            <h3 className="text-xl font-semibold mb-2">3 weeks</h3>
                            <p className="mb-1">- Barista</p>
                            <p className="mb-1">- F & B (waiter, waitress)</p>
                            <p className="mb-1">- Life/ Generic/ Soft skills training</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="hoverneeded bg-cover bg-center h-40 md:h-60 md:min-h-40 rounded-lg shadow-md" style={{ backgroundImage: "url('/b2.jpeg')", backgroundColor: "rgb(83, 83, 83)" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-start items-start p-4 text-white ">
                            <h3 className="text-xl font-semibold mb-2">4 weeks</h3>
                            <p className="mb-1">- Cooking</p>
                            <p className="mb-1">- Life/ Generic/ Soft skills training</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-span-3 mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-center">Basic Hotel Management Skills And Generic Skills</h3>
                <hr />
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-evenly items-start">
                    <div className="flex flex-col space-y-4">
                        <ul className="list-disc pl-4 text-xl">
                            <li>Art of Creating/ Cooking</li>
                            <li>F & B Service (A Conscious Service)</li>
                            <li>Front Office/ Receptions (Guest Handling)</li>
                            <li>House Keeping (Delivering Comfort)</li>
                            <li>Barista</li>
                            <li>Bar Skills</li>
                            <li>Communication Skills</li>
                            <li>Learning to Learn Skills</li>
                            <li>Time Management Skills</li>
                            <li>Goal Setting Skills</li>
                            <li>Thought Process & Belief</li>
                            <li>Decision Making Skills</li>
                            <li>Stress Management Skills</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Image
                            src="/hm1.png"
                            width={300}
                            height={200}
                            alt="Hotel Management 1"
                            className="rounded-lg shadow-lg"
                        />
                      
                        <Image
                            src="/hm3.png"
                            width={300}
                            height={200}
                            alt="Hotel Management 3"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
