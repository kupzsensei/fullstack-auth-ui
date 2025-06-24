import { useNavigate } from "react-router-dom";
import { verifyToken } from "../hooks/useVerifyToken";
import { useEffect } from "react";

export const withAuth = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    console.log("hoc");
    useEffect(() => {
      if (localStorage.getItem("token")) {
        console.log(localStorage.getItem("token"));
        verifyToken(localStorage.getItem("token")).then((res) => {
          console.log(res, "status");
          if (res != 200) {
            localStorage.clear();
            return navigate("/login");
          }
        });
      } else {
        return navigate("/login");
      }
    }, []);
    console.log("wew");

    return <WrappedComponent />;
  };
};
