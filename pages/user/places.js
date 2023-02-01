import Footer from '@/components/Footer';
import UserNav from '@/components/nav/UserNav';
import Navbar from '@/components/Navbar';
import PlaceImg from '@/components/PlaceImg';
import UserRoute from '@/components/routes/UserRoute';
import TopBar from '@/components/TopBar';
import { Context } from '@/context';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

function Places() {
    const {
        state: { user },
    } = useContext(Context);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        loadPlaces();
    }, []);

    const loadPlaces = async () => {
        const { data } = await axios.get("/api/partner-places");
        setPlaces(data);
    };
 
    return (
        <UserRoute>
            <TopBar />
            <Navbar />
            <UserNav />

            <div className="py-12 h-screen bg-gray-300">
                <div className='text-center'>
                    <Link href={'/user/placeform'} className="bg-blue-600 text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" >
                        <strong className='text-xl text-center text-'>+</strong> Add New Apartment
                    </Link>
                </div>

                <div className="pt-6 pb-12 bg-gray-300">
                    <div id="card" className="">
                        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                            {places.length > 0 && places.map(place => (
                                <div key={place._id} className="flex flex-col md:flex-row overflow-hidden
                                bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                                    <div className="h-64 w-auto md:w-1/2">
                                        <PlaceImg place={place} />
                                    </div>

                                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                        <h3 className="font-semibold text-lg leading-tight truncate">{place.title}</h3>
                                        <p className="mt-2">
                                            {place.description}
                                        </p>

                                        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                            Hosted by {user.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </UserRoute>
    )
}

export default Places