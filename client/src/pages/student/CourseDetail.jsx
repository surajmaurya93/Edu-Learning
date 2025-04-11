import BuyCourseButton from '@/components/BuyCourseButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BadgeInfo, Lock, PlayCircle } from 'lucide-react'
import React from 'react'

const CourseDetail = () => {
    const purchasedCourse = false;
    return (
        <div className='mt-20 space-y-5'>
            <div className='bg-[#2d2f31] text-white'>
                <div className='max-w-7xl mx-auto py-7 px-4 md:px-8 flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold md:text-3xl'>Course Title</h1>
                    <p className='text-base md:text-lg'>Course Sub-title</p>
                    <p>Created By{" "} <span className='text-[#C0C4FC] italic underline'>Suraj Maurya</span></p>
                    <div className='flex items-center gap-2 text-sm'>
                        <BadgeInfo size={16} />
                        <p>Last updated 11-04-2025</p>
                    </div>
                    <p>Students enrolled: 10</p>
                </div>
            </div>
            {/* description-section */}
            <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10'>

                {/* content-section */}
                <div className='w-full lg:w-1/2 space-y-5'>
                    <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod recusandae ad maxime ullam repellendus, eius aliquid in? Reiciendis facilis ex, eaque ullam rerum necessitatibus ea! Ullam error minus dolore dolor doloremque, a atque, officiis nisi unde praesentium deserunt, rerum rem repudiandae omnis? Debitis dolorum perferendis quod?</p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Content</CardTitle>
                            <CardDescription>4 Lectures</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {
                                [1, 2, 3].map((_, idx) => (
                                    <div key={idx} className='flex items-center gap-3 text-sm'>
                                        <span>
                                            {
                                                true ? (<PlayCircle size={14} />) : <Lock size={14} />
                                            }
                                        </span>
                                        <p>lecture title</p>
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                </div>

                {/* video-section */}
                <div className='w-full lg:w-1/3'>
                    <Card>
                        <CardContent className="p-4 flex flex-col">
                            <div className='w-full aspect-video mb-4'>
                                react plyer video aaayega
                            </div>
                            <h1>Lecture title</h1>
                            <Separator className="my-2" />
                            <h1 className='text-lg md:text-xl font-semibold'>Course Price</h1>
                        </CardContent>
                        <CardFooter className="flex justify-center p-2">
                            {
                                purchasedCourse ? (
                                    <Button className="w-full">Continue Course</Button>
                                ) : (
                                    <BuyCourseButton/>
                                )
                            }
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
