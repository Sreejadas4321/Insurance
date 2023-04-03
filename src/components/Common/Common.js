import React from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";
import { getData } from "./CommonFunc";
import { Button } from "@mui/material";

export default function Common({ text, name, head, cover }) {
  const navigate = useNavigate();
  const sellHandler = async () => {
    let data = await getData(name);
    console.log(data);
    navigate("/show", { state: data });
  };
  return (
    <div className="show">
      <div className="text-container">
        <h1 className="heading">{head}</h1>
        <div className="show-text">{text}</div>
        <div className="learn-btn-div">
          <Button
            variant="outlined"
            className="learn-btn"
            onClick={sellHandler}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <div className="img-container">
        <img className="show-img" src={cover} alt="" />
      </div>
    </div>
  );
}
