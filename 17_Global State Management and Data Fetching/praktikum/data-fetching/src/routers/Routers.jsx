import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutApp from "../components/About/AboutApp/AboutApp";
import AboutAuthor from "../components/About/AboutAuthor/AboutAuthor";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;