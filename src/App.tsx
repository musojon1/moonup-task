import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("TOKEN") ? navigate("/sponsors") : navigate("/login");
  });
  return <></>;
}

export default App;
