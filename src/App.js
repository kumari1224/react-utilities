import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import InfiniteScroll from "./components/InfiniteScroll";
import Error404Page from "./components/Error404Page";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      {/* <Route path="/request-animation-frame" element={<Error404Page />} /> */}
      <Route path="/" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
