import { Link } from "react-router-dom";
import "./Home.css";

function App() {
  return (
    <div>
      <h2>Topics</h2>
      <div>
        <Link to="/infinite-scroll">Infinite Scrolling</Link>
      </div>
      <div>
        <Link to="/request-animation-frame">
          Request Animation Frame Example
        </Link>
      </div>
    </div>
  );
}

export default App;
