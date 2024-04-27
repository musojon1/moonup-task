import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData((p) => ({ ...p, [event.target.name]: event.target.value }));
  };
  const onChangeRecaptcha = (event: string | null): void => {
    setRecaptchaValue(!!event);
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recaptchaValue) {
      alert("Fill the recaptcha");
    } else {
      const res = await axios.post(
        "https://club.metsenat.uz/api/v1/auth/login/",
        formData
      );
      res.data && localStorage.setItem("TOKEN", res.data.access);
      navigate("/sponsors");
    }
  };
  useEffect(() => {
    localStorage.getItem("TOKEN") && navigate("/sponsors");
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="block w-1/4">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ margin: "auto", marginBottom: "20px" }}
        />
        <form
          className="flex flex-col gap-4 p-3 rounded bg-white"
          onSubmit={onSubmit}
        >
          <label htmlFor="username" className="font-bold">
            LOGIN
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            required
            onChange={handleInputChange}
            className="border rounded-md p-2 bg-white"
          />
          <label htmlFor="password" className="font-bold">
            PAROL
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            className="border rounded-md p-2 bg-white"
          />
          <ReCAPTCHA
            sitekey="6LeeoscpAAAAAGD8hBAsqICugbEcVARH42o_JDT8"
            onChange={onChangeRecaptcha}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
