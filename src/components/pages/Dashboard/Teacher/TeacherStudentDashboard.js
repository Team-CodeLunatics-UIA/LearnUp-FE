import React from "react";

const TeacherStudentDashboard = () => {
  return (
    <div>
      <tableau-viz
        id="tableauViz"
        src="https://prod-useast-a.online.tableau.com/t/learnup/views/Course/StudentDashboard"
        device="desktop"
        hide-tabs
      ></tableau-viz>
    </div>
  );
};

export default TeacherStudentDashboard;
