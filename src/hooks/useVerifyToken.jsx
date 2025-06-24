import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const verifyToken = async (token) => {
  console.log(token, "token");
  const response = await fetch("http://127.0.0.1:8000/api/token/verify/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  console.log(response.status, "status from fetch");

  return response.status;
};

export function useVerifyToken() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      verifyToken(localStorage.getItem("token")).then((res) => {
        console.log(res, "status");
        if (res != 200) {
          localStorage.clear();
          navigate("/login");
          console.log("token invalid!");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  return;
}
