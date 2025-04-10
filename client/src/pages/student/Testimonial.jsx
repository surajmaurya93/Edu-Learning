import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <hr />
            <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <img class="mx-auto h-12" src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                            <p>“Our LMS (Learning Management System) website offers a seamless platform for online education and training.

                                It allows users to access courses, track progress, and engage in interactive learning.

                                Designed for students, teachers, and professionals, it enhances learning anytime, anywhere.”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto size-10 rounded-full" src="https://avatars.githubusercontent.com/u/176789056?v=4" alt="" />
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Suraj Maurya</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">CEO of Edu.Learning</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
