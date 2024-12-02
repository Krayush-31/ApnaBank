import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const PApplicants = () => {
  const [userList, setUserList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [issuedList, setIssuedList] = useState([]);
  const location = useLocation();
  const { formData, cardType } = location.state || {};

  const [expandedIndexes, setExpandedIndexes] = useState({
    submitted: null,
    processing: null,
    issued: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("userSubmissions")) || [];
    const savedProcessing =
      JSON.parse(localStorage.getItem("processingCards")) || [];
    const savedIssued = JSON.parse(localStorage.getItem("issuedCards")) || [];

    setUserList(savedUsers);
    setProcessingList(savedProcessing);
    setIssuedList(savedIssued);

    savedUsers.forEach((user, index) => {
      updateStatus(user, index);
    });
  }, []);

  const updateStatus = (user, index) => {
    const updatedUser = { ...user, status: "Submitted" };

    setUserList((prev) => {
      const updatedList = [...prev];
      updatedList[index] = updatedUser;
      localStorage.setItem("userSubmissions", JSON.stringify(updatedList));
      return updatedList;
    });

    setTimeout(() => {
      const updatedUserProcessing = { ...updatedUser, status: "Processing" };

      setProcessingList((prev) => {
        if (!prev.some((u) => u.email === updatedUser.email)) {
          const updatedList = [...prev, updatedUserProcessing];
          localStorage.setItem("processingCards", JSON.stringify(updatedList));
          return updatedList;
        }
        return prev;
      });

      setUserList((prev) => {
        const updatedList = prev.filter((u) => u.email !== updatedUser.email);
        localStorage.setItem("userSubmissions", JSON.stringify(updatedList));
        return updatedList;
      });
    }, 120000);

    setTimeout(() => {
      const updatedUserIssued = { ...updatedUser, status: "Issued" };

      setIssuedList((prev) => {
        if (!prev.some((u) => u.email === updatedUser.email)) {
          const updatedList = [...prev, updatedUserIssued];
          localStorage.setItem("issuedCards", JSON.stringify(updatedList));
          return updatedList;
        }
        return prev;
      });

      setProcessingList((prev) => {
        const updatedList = prev.filter((u) => u.email !== updatedUser.email);
        localStorage.setItem("processingCards", JSON.stringify(updatedList));
        return updatedList;
      });
    }, 240000);
  };

  const toggleDetails = (stage, index) => {
    setExpandedIndexes((prevIndexes) => ({
      ...prevIndexes,
      [stage]: prevIndexes[stage] === index ? null : index,
    }));
  };

  const clearAllData = () => {
    setUserList([]);
    setProcessingList([]);
    setIssuedList([]);

    localStorage.removeItem("userSubmissions");
    localStorage.removeItem("processingCards");
    localStorage.removeItem("issuedCards");
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center py-8 bg-gradient-to-t from-blue-100 to-blue-400">
      <h1 className="text-4xl text-black text-center mb-20 underline font-serif">
        Applications Status
      </h1>

      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Submitted</h2>
          {userList.length === 0 ? (
            <p>No card in this stage</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userList.map((user, index) => (
                <div
                  key={index}
                  className={`relative p-4 bg-gradient-to-t from-blue-300 to-blue-500 border shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                    expandedIndexes.submitted === index ? "h-auto" : "h-32"
                  }`}
                >
                  <button
                    className="absolute top-2 right-2 text-black"
                    onClick={() => toggleDetails("submitted", index)}
                  >
                    {expandedIndexes.submitted === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>

                  <h3 className="text-xl font-bold text-black">{cardType}</h3>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Status:</strong> {user.status}
                  </p>

                  {expandedIndexes.submitted === index && (
                    <div>
                      <p>
                        <strong>Name: </strong>
                        {formData.fullName}
                      </p>

                      <p>
                        <strong>Phone Number: </strong>
                        {formData.phoneNumber}
                      </p>
                      <p>
                        <strong>D-O-B: </strong>
                        {formData.birthday}
                      </p>
                      <p>
                        <strong>Address: </strong>
                        {formData.properAddress}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Processing</h2>
          {processingList.length === 0 ? (
            <p>No card in this stage</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processingList.map((user, index) => (
                <div
                  key={index}
                  className={`relative p-4 bg-gradient-to-t from-yellow-300 to-yellow-500 border shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                    expandedIndexes.processing === index ? "h-auto" : "h-32"
                  }`}
                >
                  

                  <h3 className="text-xl font-bold text-black">
                    {cardType}
                  </h3>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Status:</strong> {user.status}
                  </p>

                  
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Issued</h2>
          {issuedList.length === 0 ? (
            <p>No card in this stage</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {issuedList.map((user, index) => (
                <div
                  key={index}
                  className={`relative p-4 bg-gradient-to-t from-green-300 to-green-500 border shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                    expandedIndexes.issued === index ? "h-auto" : "h-32"
                  }`}
                >
                  <button
                    className="absolute top-2 right-2 text-black"
                    onClick={() => toggleDetails("issued", index)}
                  >
                    {expandedIndexes.issued === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>

                  <h3 className="text-xl font-bold text-black">
                    {cardType}
                  </h3>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Status:</strong> {user.status}
                  </p>

                  {expandedIndexes.issued === index && (
                    <div>
                      <p>
                        <strong>Name: </strong>
                        {formData.fullName}
                      </p>
                     
                      <p>
                        <strong>Phone Number: </strong>
                        {formData.phoneNumber}
                      </p>
                      <p>
                        <strong>D-O-B: </strong>
                        {formData.birthday}
                      </p>
                      <p>
                        <strong>Address: </strong>
                        {formData.properAddress}
                      </p>
                     
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <button
          className="bg-blue-600 text-white p-2 rounded-md"
          onClick={() => navigate("/dashboard/main")}
        >
          Back to Dashboard
        </button>
      </div>

      <div className="mt-8">
        <button
          className="bg-red-600 text-white p-2 rounded-md"
          onClick={clearAllData}
        >
          Clear Records
        </button>
      </div>
     
    </div>
  );
};

export default PApplicants;
