import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const correctPassword = "cityslicka";

  const isPasswordValid = (inputPassword) => {
    return inputPassword === correctPassword;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(password)) {
      setError("Invalid password. Please try again.");
      return;
    }

    const url = "https://reqres.in/api/login";

    const body = {
      email: email,
      password: password,
    };

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Login failed: " + response.statusText);
      }

      const data = await response.json();
      if (!data.token) {
        throw new Error("Login failed: Invalid credentials");
      }

      setToken(data.token);
      console.log(token);
      setError(null);
      navigate("/dashboard/main");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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

export default Login;
