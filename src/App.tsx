import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
