import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import t5 from "./t5.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const navigate = useNavigate();
  const { setUserName, setUserAge } = useContext(UserContext);

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }
  };

  const validateAge = () => {
    if (age.trim() === "") {
      setAgeError("Age cannot be empty");
    } else if (age < 18) {
      setAgeError("Age cannot be less than 18");
    } else {
      setAgeError("");
    }
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPass !== password) {
      setConfirmPassError("Passwords do not match");
    } else {
      setConfirmPassError("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    validateName();
    validateAge();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
      nameError ||
      ageError ||
      emailError ||
      passwordError ||
      confirmPassError
    ) {
      return;
    }

    const userData = { email, password };

    try {
      setLoading(true);

      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registration Successful");
        setUserName(name);
        setUserAge(age);
        navigate("/dashboard/main");
      } else {
        setMessage("Unsuccessful sign-up. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-white hidden md:block items-center justify-center">
            <img src={t5} className="mt-44 ml-5" alt="001" />
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450px] px-8 ">
              <div className="mb-10">
                <h1 className="text-3xl font-bold">
                  WELCOME TO THE SIGN-UP SCREEN
                </h1>
                <p className="font-semibold">PLEASE FILL UP THE CREDENTIALS</p>
              </div>
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={validateName}
                    className={`w-full border rounded bg-transparent p-3 ${
                      nameError ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {nameError && <p className="text-red-600">{nameError}</p>}
                </div>
                <div className="mb-3">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Enter Your Age"
                    onChange={(e) => setAge(e.target.value)}
                    onBlur={validateAge}
                    className={`w-full border rounded bg-transparent p-3 ${
                      ageError ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {ageError && <p className="text-red-600">{ageError}</p>}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                    className={`w-full border rounded bg-transparent p-3 ${
                      emailError ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {emailError && <p className="text-red-600">{emailError}</p>}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter The Password"
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                    className={`w-full border rounded bg-transparent p-3 ${
                      passwordError ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {passwordError && (
                    <p className="text-red-600">{passwordError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    onBlur={validateConfirmPassword}
                    className={`w-full border rounded bg-transparent p-3 ${
                      confirmPassError ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {confirmPassError && (
                    <p className="text-red-600">{confirmPassError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-600 text-white w-full py-2 px rounded"
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
                      Signing up...
                    </div>
                  ) : (
                    "SIGN UP"
                  )}
                </button>
              </form>
              {message && <p className="text-red-600 text-2xl">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
