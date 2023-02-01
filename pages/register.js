import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        state: { user },
    } = useContext(Context);

    const router = useRouter();

    useEffect(() => {
        if (user !== null) router.push("/");
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password });
        try {
          setLoading(true);
          const { data } = await axios.post(`/api/register`, {
            name,
            email,
            password,
          });
          // console.log("REGISTER RESPONSE", data);
          toast("Registration successful. Please login.");
          setName("");
          setEmail("");
          setPassword("");
          setLoading(false);
        } catch (err) {
          toast(err.response.data);
          setLoading(false);
        }
    };

    return (
        <section className="h-full gradient-form bg-gray-200">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                <div className="md:p-12 md:mx-6">
                                    <div className="text-center">
                                        <h2 className="mx-auto w-48 text-blue-900 text-3xl text">ONESEASON</h2>
                                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Join Us!</h4>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <p className="mb-4">Please register your account</p>
                                        <div className="mb-4">
                                            <input
                                            type="text"
                                            value={name}
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter Your Full Name"
                                            required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                            type="email"
                                            value={email}
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email"
                                            required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                            type="password"
                                            value={password}
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password"
                                            required
                                            />
                                        </div>
                                        <div className="text-center pt-1 mb-12 pb-1">
                                            <button
                                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                            type="submit"
                                            disabled={!name || !email || !password || loading}
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            style={{background: "linear-gradient(109.6deg, rgb(31, 179, 237) 11.2%, rgb(17, 106, 197) 91.1%)"}}
                                            >
                                                {loading ? <SyncOutlined spin /> : "Register"}
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between pb-6">
                                            <p className="mb-0 mr-2">Already a member?</p>
                                            <Link
                                            href={'/login'}
                                            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            >
                                            Login
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                            className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                            style={{background: "linear-gradient(109.6deg, rgb(31, 179, 237) 11.2%, rgb(17, 106, 197) 91.1%)"}}
                            >
                            <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                <h4 className="text-xl font-semibold mb-6">Find your next stay</h4>
                                <p className="text-lg">
                                Search deals on hotels, homes, and much more. Earn as much as you want by uploading your properties for bookings.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}