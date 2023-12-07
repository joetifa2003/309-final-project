import { useCallback, useContext } from "react";
import { UserContext } from "../context/user";
import api from "../lib/axios";

function Login() {
  const { setToken } = useContext(UserContext);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await api.post("/auth/login", data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (e) {
      alert("invalid email or password");
    }
  }, []);

  return (
    <section className="container flex h-screen items-center">
      <form className="flex w-full flex-col space-y-8" onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input-txt"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input-txt"
        />
        <button className="btn">Login</button>
      </form>
    </section>
  );
}

export default Login;
