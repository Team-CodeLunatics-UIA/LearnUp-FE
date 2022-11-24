import React, { useEffect } from "react";
import axios from "axios";

const RiskStudentList = () => {
  const getStudentDetails = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.get("http://localhost:5000/sendalerts", config);
    console.log(res.data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  return <div>List of Students in Risk</div>;
};

export default RiskStudentList;
