import Reac, { userContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../pages/Loader";
import { UserLayout } from "../pages";

// import authContext from "context/auth/authContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  //   const { isAuthenticated, user, loading } = useContext(authContext);

  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     loading ? (
    //       <Loader />
    //     ) : (
    //       isAuthenticated !== null &&
    //       (isAuthenticated === false ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to={user.role === "" ? "/admin/overview" : "/user/dashboard"} />
    //       ))
    //     )
    //   }
    // />

    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};

export default PublicRoute;
