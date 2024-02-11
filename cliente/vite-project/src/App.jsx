import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [microserivio1Data, setMicroserivio1Data] = useState("");
  const [microserivio2Data, setMicroserivio2Data] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => setMicroserivio1Data(response.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:3003")
      .then((response) => setMicroserivio2Data(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Cliente react con VIte</h1>
      <p>Microservicio 1 :{microserivio1Data}</p>
      <p>Microservicio 2 :{microserivio2Data}</p>
    </div>
  );
}

export default App;
