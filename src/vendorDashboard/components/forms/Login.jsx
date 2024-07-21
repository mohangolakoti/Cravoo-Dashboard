import React,{useState} from "react";
import { API_URL } from "../../data/ApiPath";
import Nav from "../../pages/LandingPage/Nav";
import { Link, useNavigate } from "react-router-dom";
import { food, food1, food2 } from "../../constants/images";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.success);
        localStorage.setItem("loginToken", data.token);
        if(data.firmId){
          localStorage.setItem("firmId",data.firmId)
          localStorage.setItem("firmName",data.firmName)
        }
        setEmail("")
        setPassword("")
        navigate("/", { replace: true });
        /* window.location.reload() */
      }else{
        alert(data.error)
      }
    } catch (error) {
      alert("Login Failed")
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col items-center w-full h-[100vh] overflow-x-hidden">
      <Nav/>
      <section className="w-full flex h-full">
      <img src={food1} alt="img" className="md:w-1/2 h-full hidden md:block" />
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4 my-10">
      <h2 className="font-bold text-2xl py-2 text-r-btn">Vendor Login</h2>
      <form
        onSubmit={loginHandler}
        className="flex flex-col gap-2 justify-center border border-r-dbtn px-8 max-[380px]:px-5 py-4 text-lg  w-4/5 rounded-lg text-r-dbtn"
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-r-dbtn rounded-lg p-2 w-full"
          placeholder="enter email"
        />
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-r-dbtn rounded-lg p-2 w-full"
          placeholder="enter password"
        />
        <br />
        <div className="py-2">
          <button
            type="submit"
            className="bg-r-logo py-2 text-r-nrml rounded-lg w-full"
          >
            Login
          </button>
        </div>
      </form>
      </div>
      </section>
    </section>
  );
};

export default Login;
