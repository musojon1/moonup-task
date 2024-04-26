import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-mini.png";
import logOut from "../assets/logOut.svg";
import avatar from "../assets/avatar.png";

function Nav() {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.setItem("TOKEN", "");
    navigate("/login");
  };
  return (
    <nav
      className="bg-white shadow-md p-4 flex"
      style={{
        justifyContent: "space-between",
        boxShadow: "0 0 6px rgba(86, 85, 85, 0.3)",
        zIndex: 2,
        position: "relative",
      }}
    >
      <a href="#" className="text-xl font-bold">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ margin: "auto" }}
        />
      </a>
      <ul className="flex gap-4">
        <li>
          <p
            className="rounded flex justify-between"
            style={{ backgroundColor: "#F1F1F3", padding: "3px" }}
          >
            Shoxrux
            <div
              className="rounded p-1"
              style={{
                backgroundColor: "#00AE69",
                marginLeft: "5px",
                padding: "2px",
              }}
            >
              <img src={avatar} />
            </div>
          </p>
        </li>
        <li onClick={logOutHandler} style={{ cursor: "pointer" }}>
          <img src={logOut} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
