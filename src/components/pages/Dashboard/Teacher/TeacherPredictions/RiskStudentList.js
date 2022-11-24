import React, { useEffect, useState } from "react";
import axios from "axios";

const RiskStudentList = () => {
  const [list, setList] = useState([]);

  const getStudentDetails = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.get("http://localhost:5000/sendalert", config);
    console.log(res.data);
    setList(res.data.data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  return (
    <div>
      List of Students in Risk
      <ul>{list.length > 0 && list.map((student) => <li>{student._id}</li>)}</ul>
    </div>
  );
};

export default RiskStudentList;
