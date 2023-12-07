import { useCallback } from "react";
import api from "../lib/axios";

function SignUp() {
  const onSubmit = useCallback((event) => {
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

    api.post("/auth/signup", data).then((response) => {
      console.log(response);
    });
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
