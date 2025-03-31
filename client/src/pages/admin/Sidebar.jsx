import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='flex'>
            <div className='hidden lg:block w-[250px] sm:w-[300px] sapce-y-8 border-r-gray-300 dark:border-gray-700 bg-[#f0f0f0] p-5 h-screen'>
                <div className='mt-20 space-y-4'>
                    <Link to="dashboard" className='flex items-center gap-2'>
                        <ChartNoAxesColumn size={22} />
                        <h1>Dashboard</h1>
                    </Link>
                    <Link to="course" className='flex items-center gap-2'>
                        <SquareLibrary size={22} />
                        <h1>Courses</h1>
                    </Link>
                </div>
            </div>
            <div className='flex-1 md:p-24 p-2 bg-white'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Sidebar
