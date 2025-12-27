import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../routes/Home";
import NotFound from "../routes/NotFound";
import Login from "../routes/auth/Login";
import Registration from "../routes/auth/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
