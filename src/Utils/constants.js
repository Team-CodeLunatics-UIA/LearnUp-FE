export const roleOptions = [
  {
    value: "ministry",
    label: "Ministry Official",
  },
  {
    value: "state",
    label: "State Official",
  },
  {
    value: "district",
    label: "District Official",
  },
  {
    value: "school",
    label: "School Official",
  },
];

export const StudentFeatures = () => [
  {
    id: 0,
    link: "/student/news",
    icon: <FaNewspaper />,
    title: "News",
  },
  {
    id: 1,
    link: "/student/feedback",
    icon: <FaComment />,
    title: "Feedback",
  },
  {
    id: 2,
    link: "/student/suggestions",
    icon: <FaLightbulb />,
    title: "Suggestions",
  },
  {
    id: 3,
    link: "/student/policies",
    icon: <FaFileAlt />,
    title: "Policies",
  },
];

// export const feedbackCategories = [
//   { value: null, label: "Select Category Type" },
//   { value: "scholarship", label: "Scholarship" },
//   { value: "curriculum", label: "Curriculum" },
//   { value: "exam", label: "Exams" },
//   { value: "faculty", label: "Faculty" },
//   { value: "books", label: "Study Material" },
//   { value: "other", label: "other" },
// ];
