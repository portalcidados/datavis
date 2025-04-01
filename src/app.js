// gh-pages route for deployment.
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Loading_adensamento } from "./pages/adensamento/loading";
import { Loading_saudesp } from "./pages/saudesp/loading";
import style, { createGlobalStyle } from "styled-components";
import "./tailwind.css";

const Home = lazy(() => import("./pages/home/home"));

const CepSEOP = lazy(() => {
  return Promise.all([
    import("./pages/adensamento/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});
const Saudesp = lazy(() => {
  return Promise.all([
    import("./pages/saudesp/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .mapboxgl-control-container {
    display: none !important;
  } 
`;

function App() {
  return (
    <div id={"main"}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading_adensamento />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<Loading_adensamento />}>
          <Routes>
            <Route path="/adensamento" element={<CepSEOP />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<Loading_saudesp />}>
          <Routes>
            <Route path="/saudesp" element={<Saudesp />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;