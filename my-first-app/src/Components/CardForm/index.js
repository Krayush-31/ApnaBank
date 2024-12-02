import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useLocation } from "react-router-dom";

const CardForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardType = location.state?.cardType;
  const states = [
    "Andhra Pradesh",
    "Bihar",
    "Delhi",
    "Karnataka",
    "Maharashtra",
    "Tamil Nadu",
    "Uttar Pradesh",
  ];
  const handleStateChange = (e) => {
    setstate(e.target.value);
  };

  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [birthday, setbirthday] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");
  const [account, setaccount] = useState("");
  const [ifsc, setifsc] = useState("");
  const [homebranch, sethomebranch] = useState("");
  const [acctype, setacctype] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [pan, setpan] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState(null);
  const [nameError, setNameError] = useState();
  const [emailError, setemailError] = useState();

  const [numberError, setnumberError] = useState();

  const [accountError, setaccountError] = useState();

  const [ifscError, setifscError] = useState();

  const [aadharError, setaadharError] = useState();

  const [panError, setpanError] = useState();

 

  const [stateError, setstateError] = useState();

  

  const validateName = () => {
    if (fname.trim() === "" && mname.trim() === "" && lname.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      setemailError("Email is required");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setemailError("Please enter a valid email address");
    } else {
      setemailError("");
    }
  };

  const validateNumber = () => {
    if (number.trim() === "") {
      setnumberError("Number is required");
    } else if (number.length < 10) {
      setnumberError("Please enter valid phone number");
    } else {
      setnumberError("");
    }
  };

  const validateAadhar = () => {
    if (aadhar.trim() === "") {
      setaadharError("Aadhar Number this required");
    } else if (aadhar.length < 12) {
      setaadharError("Please enter valid aadhar");
    } else {
      setaadharError("");
    }
  };

  const validatePAN = () => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (pan.trim() === "") {
      setpanError("PAN number is required");
    } else if (!panPattern.test(pan)) {
      setpanError("Please enter a valid PAN number");
    } else {
      setpanError("");
    }
  };

  const validateAccount = () => {
    if (account.trim() === "") {
      setaccountError("Account number is required");
    } else if (account.length < 14 || account.length >14) {
      setaccountError("Invalid Account number");
    } else {
      setaccountError("");
    }
  };



  const validateIFSC = () => {
    const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifsc) {
      setifscError("IFSC Code is required.");
    } else if (!ifscPattern.test(ifsc)) {
      setifscError("Invalid IFSC Code format.");
    } else {
      setifscError("");
    }
  };


  const validateState = () =>{

    if(!state){
      setstateError("Select the state");
    }
    else{
      setstateError("");
    }
  }
  const handleCard = async (e) => {
    e.preventDefault();
  
   
    validateName();
    validateEmail();
    validateNumber();
    validateAadhar();
    validatePAN();
    validateState();
    validateAccount();
    validateIFSC();
  
   
    if (
      nameError ||
      emailError ||
      numberError ||
      stateError ||
      aadharError ||
      panError ||
      accountError ||
      ifscError
    ) {
      return;
    }
  
    const fullName = `${fname} ${mname} ${lname}`.trim();
    const properAddress = `${address} ${state} ${pin}`.trim();
    const currentDateTime = new Date().toISOString();
  
  
    const data = {
      fullName,
      email,
      birthday,
      phoneNumber: number,
      properAddress,
      accountNumber: account,
      ifsc,
      homeBranch: homebranch,
      accountType: acctype,
      aadhaar: aadhar,
      pan,
      submittedAt: currentDateTime,
      cardType,
    };
  
   
    const existingData = JSON.parse(localStorage.getItem("userSubmissions")) || [];
  
  
    existingData.push(data);
  
   
    localStorage.setItem("userSubmissions", JSON.stringify(existingData));
  
   
    setFormData(data);
    setShowModal(true);
  };
  

  const handleModalConfirm = () => {
    setLoading(true);
    setShowModal(false);
    navigate("/papplicants", { state: { formData, cardType } });
  };

  const handleModalCancel = () => {
    setShowModal(false);
    navigate("/dashboard/main");
  };

  return (
    <div className="h-full w-full bg-gradient-to-t from-blue-300 to-blue-200 flex items-center justify-center relative">
      <div className="absolute top-4 right-4 p-1 bg-blue-600 rounded shadow-lg">
        <button
          className="text-white hover:text-red-500 text-2xl"
          onClick={() => navigate("/dashboard/main")}
        >
          X
        </button>
      </div>

      <div className="p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-4xl text-blue-600 font-serif text-center cursor-progress underline">
          FILL IN THE DETAILS
        </h1>

        <h2 className="text-2xl text-blue-600 font-bold">
          Personal Information
        </h2>
        <form className="flex flex-col space-y-6" onSubmit={handleCard}>
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder={nameError ? nameError : "First Name"}
                className={`flex-1 p-2 border rounded shadow-sm mb-2 md:mb-0 ${
                  nameError
                    ? "border-2 border-red-700 text-red-700 bg-red-100"
                    : "border-1 border-gray-400"
                }`}
                required
                onBlur={validateName}
                onChange={(e) => setfname(e.target.value)}
              />

              <input
                type="text"
                placeholder="Middle Name"
                className="flex-1 p-2 border border-gray-300 rounded shadow-sm mb-2 md:mb-0"
                onChange={(e) => setmname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-2 border border-gray-300 rounded shadow-sm"
                onChange={(e) => setlname(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                placeholder={emailError ? emailError : "Enter Your Email"}
                className={`flex-1 p-2 border rounded shadow-sm mb-2 md:mb-0 ${
                  emailError
                    ? "border-2 border-red-700 text-red-700 bg-red-100"
                    : "border-1 border-gray-400"
                }`}
                required
                onChange={(e) => setemail(e.target.value)}
                onBlur={validateEmail}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Phone Number:
              </label>
              <div className="flex items-center border border-gray-300 rounded shadow-sm">
                <span
                  className={`flex-1 p-2 border rounded shadow-sm mb-2 md:mb-0 ${
                    emailError ? "border-red-500" : "border-gray-400"
                  }`}
                >
                  +91
                </span>
                <input
                  type="tel"
                  placeholder={numberError ? numberError : "Enter Phone Number"}
                  className={`p-2 border-2 w-full ${
                    numberError
                      ? "border-red-700 text-red-700 bg-red-100"
                      : "border-gray-400"
                  }`}
                  required
                  onChange={(e) => setnumber(e.target.value)}
                  onBlur={validateNumber}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Aadhaar Number:
              </label>
              <input
                type="text"
                placeholder={aadharError ? aadharError : "Enter Aadhaar Number"}
                className={`flex-1 p-2 border-2 rounded shadow-sm mb-2 md:mb-0 ${
                  aadharError
                    ? "border-red-700 text-red-700 bg-red-100"
                    : "border-gray-400"
                }`}
                required
                onChange={(e) => setaadhar(e.target.value)}
                onBlur={validateAadhar}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                PAN Number:
              </label>
              <input
                type="text"
                placeholder={panError ? panError : "Enter PAN Number"}
                className={`flex-1 p-2 border-2 rounded shadow-sm mb-2 md:mb-0 ${
                  panError
                    ? "border-red-700 text-red-700 bg-red-100"
                    : "border-gray-400"
                }`}
                required
                onChange={(e) => setpan(e.target.value)}
                onBlur={validatePAN}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Date of Birth:
              </label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded shadow-sm w-full"
                required
                onChange={(e) => setbirthday(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Address:
              </label>
              <textarea
                placeholder="Enter Your Address"
                className="p-2 border border-gray-300 rounded shadow-sm w-full"
                required
                onChange={(e) => setaddress(e.target.value)}
                rows="2"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                State:
              </label>
              <select
                value={state}
                onChange={handleStateChange}
                onBlur={validateState}
                className={`flex-1 p-2 border-2 rounded shadow-sm mb-2 md:mb-0 ${
                  stateError
                    ? "border-red-700 text-red-700 bg-red-100"
                    : "border-gray-400"
                }`}
                required
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((stateOption) => (
                  <option key={stateOption} value={stateOption}>
                    {stateOption}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                PIN Code:
              </label>
              <input
                type="text"
                placeholder="Enter PIN Code"
                className="p-2 border border-gray-300 rounded shadow-sm w-full"
                required
                onChange={(e) => setpin(e.target.value)}
              />
            </div>
          </div>
        </form>

        <h2 className="text-2xl text-blue-600 font-bold mt-5">
          Banking Information
        </h2>
        <form className="flex flex-col space-y-6 mt-2" onSubmit={handleCard}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Account Number:
              </label>
              <input
                type="number"
                placeholder={accountError ? accountError : "Enter Your Account Number"}
                className={`flex-1 p-2 border rounded shadow-sm mb-2 md:mb-0 ${
                  accountError
                    ? "border-2 border-red-700 text-red-700 bg-red-100"
                    : "border-1 border-gray-400"
                }`}
                required
                onChange={(e) => setaccount(e.target.value)}
                onBlur={validateAccount}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                IFSC Code:
              </label>
              <input
                type="text"
                placeholder={ifscError ? ifscError : "Enter Your Account Number"}
                className={`flex-1 p-2 border rounded shadow-sm mb-2 md:mb-0 ${
                  ifscError
                    ? "border-2 border-red-700 text-red-700 bg-red-100"
                    : "border-1 border-gray-400"
                }`}
                required
                onChange={(e) => setifsc(e.target.value)}
                onBlur={validateIFSC}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Home Branch:
              </label>
              <input
                type="text"
                placeholder="Enter Home Branch"
                className="p-2 border border-gray-300 rounded shadow-sm w-full"
                required
                onChange={(e) => sethomebranch(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Account Type:
              </label>
              <select
                className="p-2 border border-gray-300 rounded shadow-sm w-full"
                required
                onChange={(e) => setacctype(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Account Type
                </option>
                <option value="current">Current</option>
                <option value="saving">Saving</option>
              </select>
            </div>
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-800 text-white w-full py-2 px rounded"
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
                Submitting
              </div>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gradient-to-t from-blue-200 to-blue-500 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">SUCCESSFULLY APPLIED</h3>
              <div className="mb-4">
                <p>TRACK THE STATUS </p>
              </div>

              <div className="flex space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold"
                  onClick={handleModalConfirm}
                >
                  STATUS
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded font-bold"
                  onClick={handleModalCancel}
                >
                  DASHBOARD
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardForm;
