import "./App.css";
import AuthContext from "./context/AuthContext";
import AuthRouter from "./routers/AuthRouter";
import { UnauthRouter } from "./routers/UnauthRouter";
import { useContext } from "react";
import Dashboard from "../src/pages/private/Dashboard";
function App() {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Dashboard />
      {auth ? <AuthRouter /> : <UnauthRouter />}
    </div>
  );
}

export default App;
