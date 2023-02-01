import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import UserNav from "@/components/nav/UserNav";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  const goToBookings = async () => {
    router.push("/user/bookings")
  }

  return (
    <UserRoute>
      <TopBar />
      <Navbar />
      <UserNav />
      {loading && (
          <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
          />
      )}
      <div className="py-12 h-screen bg-gray-300">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full p-2 py-10">
              <div className="flex justify-center">
                <div className="relative">
                  <img src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png" className="rounded-full" width="80" />
                  <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
                </div>
              </div>

              <div className="flex flex-col text-center mt-3 mb-4">
                <span className="text-2xl font-medium">{user?.name}</span>
                <span className="text-md text-gray-400">{user?.email}</span>
              </div>

              <p className="px-16 text-center text-md text-gray-800">Address</p>
                  
              <div className="px-14 mt-5">
                <button onClick={goToBookings} className="h-12 bg-gray-200 w-full text-white text-md rounded hover:shadow hover:bg-gray-300 mb-2">My Bookings</button>
                <button onClick={logout} className="h-12 bg-blue-700 w-full text-white text-md rounded hover:shadow hover:bg-blue-800">Logout</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </UserRoute>
  );
};

export default UserIndex;
