import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const loginAPI = async (data) => {
  const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
    method: "POST",
    body: data,
  });

  //   const res = await response.json();
  //   console.log(res);
  return await response.json();
};

export default function LoginPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [err, setErr] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = new FormData(formRef.current);

    // check formdata values
    for (let [key, value] of loginData.entries()) {
      console.log(`${key}: ${value}`);
    }

    loginAPI(loginData).then((res) => {
      console.log(res);
      if (res.access) {
        localStorage.setItem("token", res.access);
        navigate("/");
      } else {
        setErr(res.detail);
      }
    });
  };
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
      >
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        {err && <p style={{ color: "red" }}>{err}</p>}
        <input type="submit" value="login" />
      </form>
    </main>
  );
}
