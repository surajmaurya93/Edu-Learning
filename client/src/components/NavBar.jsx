import { Menu, School } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from '@/DarkMode';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Separator } from '@radix-ui/react-dropdown-menu';

const NavBar = () => {
    const user = true;
    return (
        <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
            {/* Desktop Screen*/}
            <div className='max-w-6xl mx-auto hidden justify-between items-center gap-10 h-full md:flex'>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className='hidden md:block font-extrabold text-2xl'>Edu. Learning</h1>
                </div>
                {/* User Icons And Dark Mode Icons */}
                <div className='flex items-center gap-6'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>My Learning</DropdownMenuItem>
                                        <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Log out</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>DashBoard</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button>Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>

            {/* Mobile Screen */}
            <div className='flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl'>E-Learning</h1>
                <MobileNavbar />
            </div>
        </div>
    );
};

export default NavBar;


const MobileNavbar = () => {
    const role = "instructor";
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-6">
                    <SheetTitle className="font-bold text-2xl">E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className='mr-5' />
                <nav className='flex flex-col space-y-3'>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <p>Logout</p>
                </nav>
                {
                    role === "instructor" && (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}
