import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import api from "../lib/axios";

function SignUp() {
  const { setToken } = useContext(UserContext);
  const nav = useNavigate();

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (formData.get("password") != formData.get("confirmPassword")) {
      alert("passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/signup", formData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      nav("/");
    } catch (e) {
      alert("an account already exists with that email");
    }
  }, []);

  return (
    <section className="container flex h-screen items-center">
      <form className="flex w-full flex-col space-y-8" onSubmit={onSubmit}>
        <input name="profileImage" type="file" className="" required />
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input-txt"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input-txt"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input-txt"
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-txt"
          required
        />
        <button className="btn">Sign Up</button>
      </form>
    </section>
  );
}

export default SignUp;
