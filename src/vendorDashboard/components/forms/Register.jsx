import React, { useState } from "react";
import { API_URL } from "../../data/ApiPath";
import Nav from "../../pages/LandingPage/Nav";
import { food, food1, food2, food4 } from "../../constants/images";

const Register = ({showLoginHandler}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Vendor Registered Successfully");
        setUsername("");
        setEmail("")
        setPassword("")
        showLoginHandler()
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log("Registration Failed", error);
      alert("Registration Failed");
    }
  };

  return (
    <section className={`flex flex-col w-full h-[100vh] overflow-x-hidden bg-[url(${food1})]`}>
      <Nav/>
      <section className="w-full flex h-full">
      <img src={food4} alt="img" className="w-1/2 h-full hidden md:block" />
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4 my-10">
      <h2 className="font-bold text-2xl py-2 text-r-btn">Vendor Register</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 justify-center border border-r-dbtn px-8 max-[380px]:px-5  py-4 text-lg  w-4/5 rounded-lg text-r-dbtn"
      >
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
          className="border border-r-dbtn p-2 w-full rounded-lg text-black"
          placeholder="enter username"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          className="border border-r-dbtn rounded-lg p-2 w-full"
          placeholder="enter email"
        />
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          className="border border-r-dbtn rounded-lg p-2 w-full"
          placeholder="enter password"
        />
        <br />
        <div className="py-2">
          <button
            type="submit"
            className="bg-r-logo py-2 text-r-nrml rounded-lg w-full"
          >
            Register
          </button>
        </div>
      </form>
      </div>
      </section>
    </section>
  );
};

export default Register;
