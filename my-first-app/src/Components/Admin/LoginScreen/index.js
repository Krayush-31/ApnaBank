import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 
  const [adminID,setAdminID] = useState("");
  const [loading, setLoading] = useState(false);
  const correctPassword = "cityslicka";
  const correctEmail = "advya123@gmail.com";
  const correctAdminID = "advya123";
  
  const isPasswordValid = (inputPassword) => {
    return inputPassword === correctPassword;
  };
  
  const isEmailValid = (inputEmail) => {
    return inputEmail === correctEmail;
  };
  
  const isAdminValid = (inputAdmin) => {
    return inputAdmin === correctAdminID;
  };
 
  const login = (e) => {
    e.preventDefault();

   
    setLoading(true);

    
    if (!isEmailValid(email)) {
      setError("Invalid email. Please try again.");
      setLoading(false);
      return;
    }

    if (!isPasswordValid(password)) {
      setError("Invalid password. Please try again.");
      setLoading(false); 
      return;
    }

    if (!isAdminValid(adminID)) {
      setError("Invalid Admin ID. Please try again.");
      setLoading(false); 
      return;
    }

   
    setError(null); 
    console.log("Login successful!"); 

   
    setTimeout(() => {
   
      navigate("/admin/admindashboard");
    }, 1000); 

    setLoading(false); 
  };

  return (
    <div className="flex-col w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-blue-500 hidden md:block"></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450px] px-8">
              <div className="mb-10">
                <h1 className="text-3xl font-bold">
                  WELCOME TO THE LOGIN SCREEN
                </h1>
                <p className="font-semibold">PLEASE ENTER YOUR CREDENTIALS</p>
              </div>
              <form onSubmit={login}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded bg-transparent border-gray-400 p-3"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter The Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded bg-transparent border-gray-400 p-3"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Admin ID</label>
                  <input
                    type="text"
                    placeholder="Enter Your Admin ID"
                    onChange={(e) => setAdminID(e.target.value)}
                    className="w-full border rounded bg-transparent border-gray-400 p-3"
                    required
                  />
                </div>
                <button
                  className="bg-blue-400 hover:bg-blue-600 text-white w-full py-2 px rounded"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                       
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                        ></path>
                      </svg>
                      Logging in...
                    </div>
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </form>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default LoginScreen;
