import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IndexPage = () => {
  // if any message we have then get in msg
  let { msg } = useParams();

  const navigate = useNavigate();

  // auto navigate to hompage after dislayed message
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    <div className="indexpage">
      <h2>Hello</h2>
      <p>This is React router dom v6</p>
      {msg ? (
        <h3 style={{ color: "green" }}>{msg}</h3>
      ) : (
        <>
          <h2 style={{ color: "#ff6400", textAlign: "center" }}>
            Welcome to <br />
          </h2>
          <h1>Home Page</h1>
        </>
      )}
    </div>
  );
};

export default IndexPage;
