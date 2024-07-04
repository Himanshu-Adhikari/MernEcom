import React from "react";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setauthUSer] = useAuth();
  const handleLogout = () => {
    try {
      setauthUSer({
        ...authUser,
        user: null,
      });
      toast.success("Logout Successfully");
      setTimeout(() => {
        localStorage.removeItem("Users");
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-xl cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
