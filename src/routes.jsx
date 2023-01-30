import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import CreateAccount from "./Pages/Create-Account";
import Home from "./Pages/Home";

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Login />;
};

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Private Item={Home} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
