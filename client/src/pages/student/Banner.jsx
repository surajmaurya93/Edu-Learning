import React from "react";

const Banner2 = () => {
    return (
        <div>
            <hr />
            <section className="bg-[#f7f7f7]">

                <div className="container py-20 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                    {/* Banner Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://img.freepik.com/premium-vector/boy-online-learning-online-education-illustration_677179-114.jpg"
                            alt=""
                            className="w-[415px] md:max-w-[500px] object-cover drop-shadow rounded-lg"
                        />
                    </div>
                    {/* Banner Text */}
                    <div className="text-center md:text-left space-y-5 lg:max-w-[450px]">
                        <h1 className="text-4xl font-bold !leading-snug">
                            Join Our Community to Start your Journey
                        </h1>
                        <p className="text-dark2 mt-6">
                            Edu.Learning is a platform dedicated to empowering aspiring developers.
                            From beginner tutorials to advanced programming concepts, we
                            provide a comprehensive learning experience designed to help you
                            master coding skills, build projects, and launch your tech career.
                        </p>
                        <a
                            href="/"
                            className="bg-blue-700 text-white font-medium p-2 rounded-lg"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner2;