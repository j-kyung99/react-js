import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
