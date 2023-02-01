import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';

function UserNav() {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        (window === 'undefined') && setCurrent(window.location.pathname);
    }, [(window === 'undefined') && window.location.pathname]);

    function linkClasses (type=null) {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
          classes += ' bg-primary text-white';
        } else {
          classes += ' bg-gray-200';
        }
        return classes;
    }

    return (
        <div className='w-full h-[30vh]'>
            <img
                src='https://img.freepik.com/free-photo/beautiful-hotel-insights-details_23-2149160779.jpg?w=740&t=st=1675029368~exp=1675029968~hmac=09116b3494bb408e3ee24e2081e9af9b10798456affc03d0cfd51d2d980a8617'
                alt='/'
                className='w-full h-full object-cover'
            />
            <div className='absolute w-full h-[39vh] top-0 left-0 bg-gray-900/30'></div>
            
            <div className='absolute top-[20%] w-full md:-[50%] max-w-[600px] h-full flex flex-col mx-auto p-4'>
                
                <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                    <Link className={`inline-flex gap-1 py-2 px-6 rounded-full ${current === "/user" ? "bg-primary text-white" : "bg-gray-200"}`} href={'/user'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        My profile
                    </Link>
                    <Link className={`inline-flex gap-1 py-2 px-6 rounded-full ${current === "/user/bookings" ? "bg-primary text-white" : "bg-gray-200"}`} href={'/user/bookings'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        My bookings
                    </Link>
                    <Link className={`inline-flex gap-1 py-2 px-6 rounded-full ${current === "/user/places" ? "bg-primary text-white" : "bg-gray-200"}`} href={'/user/places'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                        My accommodations
                    </Link>
                </nav>

            </div>
        </div>
    )
}

export default UserNav