import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreditUsers = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};
  const cardType = location.state?.cardType; 

  const viewPreviousApplications = () => {
    navigate('/papplicants'); 
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl text-blue-600 font-serif text-center mb-4">
          Application Submitted
        </h1>
        <h2 className="text-2xl text-blue-600 font-bold mb-2">Credentials:</h2>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {formData?.fullName}
          </p>
          <p>
            <strong>Email:</strong> {formData?.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {formData?.phoneNumber}
          </p>
          <p>
            <strong>Address:</strong> {formData?.properAddress}
          </p>
          <p>
            <strong>Applied for:</strong> {cardType} 
          </p>
        </div>

        <p>
          <strong>Submitted At:</strong>{" "}
          {new Date(formData.submittedAt).toLocaleString()}
        </p>
        <p className="mt-4 text-blue-500 font-bold text-2xl">
          Status: Applied
        </p>

        <button
          onClick={viewPreviousApplications}
          className="mt-6 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          View Previous Applications
        </button>
      </div>
    </div>
  );
};

export default CreditUsers;
