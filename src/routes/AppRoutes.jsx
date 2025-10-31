import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";

function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
</Routes>
  );
}

export default AppRoutes;