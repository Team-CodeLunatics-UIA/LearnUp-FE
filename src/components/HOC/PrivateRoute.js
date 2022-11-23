// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// // import { UserLayout } from "../pages";
// import Loader from "../pages/Loader";
// // import authContext from "../../context/auth/authContext";

// const PrivateRoute = ({ component, title, ...rest }) => {
//   // const { isAuthenticated, loading } = useContext(authContext);
//   //   const user = JSON.parse(localStorage.getItem("user"));
//   // <Route
//   //   {...rest}
//   //   render={(props) =>
//   //     loading ? (
//   //       <Loader />
//   //     ) : (
//   //       isAuthenticated !== null &&
//   //       (isAuthenticated ? (
//   //         <UserLayout Component={component} title={title} {...props} />
//   //       ) : (
//   //         <Redirect to={"/login"} />
//   //       ))
//   //     )
//   //   }
//   // />;

//   return (
//     <Route
//       {...rest}
//       render={(props) => <UserLayout Component={component} title={title} {...props} />}
//     />
//   );
// };

// export default PrivateRoute;
