import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";

export const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>react-library-template</h1>
      <div className="card">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/demo")}>Demo</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
