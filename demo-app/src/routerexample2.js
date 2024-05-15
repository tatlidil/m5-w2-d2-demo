import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useMatch("/topics/*");
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.pathnameBase}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${match.pathnameBase}/dogs`}>Dogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${match.path}/:topicId`} element={<Topic />} />
        <Route path={match.pathnameBase} element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
