// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="register" element={<RegisterPage  />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
