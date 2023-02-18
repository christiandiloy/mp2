import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "./404";
import Register from "./registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/register" element={<Register/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
