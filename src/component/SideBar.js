import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      SideBar
      <button onClick={() => navigate("/createBattle")}>Click</button>
    </div>
  );
};

export default SideBar;
