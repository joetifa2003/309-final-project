import { useCallback, useContext } from "react";
import { UserContext } from "../context/user";
import api from "../lib/axios";

function SignUp() {
  const { setToken } = useContext(UserContext);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    if (data.password != data.confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const res = await api.post("/auth/signup", data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (e) {
      alert("an account already exists with that email");
    }
  }, []);

  return (
    <section className="container flex h-screen items-center">
      <form className="flex w-full flex-col space-y-8" onSubmit={onSubmit}>
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
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input-txt"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-txt"
        />
        <button className="btn">Sign Up</button>
      </form>
    </section>
  );
}

export default SignUp;
