import Footer from '@/components/Footer'
import UserNav from '@/components/nav/UserNav'
import Navbar from '@/components/Navbar'
import Perks from '@/components/Perks'
import PhotosUploader from '@/components/PhotosUploader'
import UserRoute from '@/components/routes/UserRoute'
import TopBar from '@/components/TopBar'
import { Context } from '@/context'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

function Placeform() {
    const {
        state: { user },
    } = useContext(Context);

    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [photos,setPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [price,setPrice] = useState(30);

    // router
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const placeData = {
            title, address, photos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests, price,
        };
        try {
          // console.log(values);
          const { data } = await axios.post("/api/place", placeData);
          toast("Great! We will review your first apartment, then you can start adding more");
          router.push("/user/places");
        } catch (err) {
            //console.log('err', err)
            toast(err.response?.data);
        }
    };

    return (
        <UserRoute>
            <Head>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />     
            </Head>
            <TopBar />
            <Navbar />
            <UserNav />

            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    Start With Your First Apartment
                                </h6>
                                <Link href={'/user/places'} className="bg-blue-600 text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" >
                                    My Accommodations
                                </Link>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="name">
                                            Owner
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user?.name} disabled />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="useremail">
                                            Owner Email
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user?.email} disabled />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="contactperson">
                                            Contact Person
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="contactnumber">
                                            Contact Number
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="" />
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Apartment Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="title">
                                            Title
                                        </label>
                                        <input name='title' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={title} onChange={ev => setTitle(ev.target.value)}  placeholder="title, for example: My lovely apt" required />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="maxGuests">
                                            Max number of guests
                                        </label>
                                        <input name='maxGuests' type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} required />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="address">
                                                Address to this place
                                            </label>
                                            <input name='address' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={address} onChange={ev => setAddress(ev.target.value)} required />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="checkIn">
                                            Check In Time
                                        </label>
                                        <input name='checkIn' type="time" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} required />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="checkOut">
                                            Check Out Time
                                        </label>
                                        <input name='checkOut' type="time" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="price">
                                            Price per night
                                        </label>
                                        <input name='price' type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={price} onChange={ev => setPrice(ev.target.value)} />
                                        </div>
                                    </div>

                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Amenities
                                </h6>
                                <div className="flex flex-wrap">
                                    <Perks selected={perks} onChange={setPerks} />
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Photos
                                </h6>
                                <div className="flex flex-wrap">
                                    <PhotosUploader addedPhotos={photos} onChange={setPhotos} />
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About The Apartment
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="description">
                                                Description
                                            </label>
                                            <textarea name='description' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" value={description} onChange={ev => setDescription(ev.target.value)} placeholder="description of the place" required />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="extraInfo">
                                            Extra info
                                        </label>
                                        <textarea name='extraInfo' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} placeholder="house rules, etc" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <button type='submit' className='bg-blue-600'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </UserRoute>
    )
}

export default Placeform